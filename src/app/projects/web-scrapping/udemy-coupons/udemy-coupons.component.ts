import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { CouponResData, WebScrappingService } from '../web-scrapping.service';
import { MatGridList } from '@angular/material/grid-list';
import { Subject } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetDetailComponent } from '../shared/bottom-sheet-detail/bottom-sheet-detail.component';
import { BottomSheetCouponComponent } from '../shared/bottom-sheet-coupon/bottom-sheet-coupon.component';

@Component({
  selector: 'app-udemy-coupons',
  templateUrl: './udemy-coupons.component.html',
  styleUrls: ['./udemy-coupons.component.css']
})
export class UdemyCouponsComponent implements OnInit, AfterContentInit {
  couponlist: CouponResData[];
  @ViewChild('grid') grid: MatGridList;
  selectedNumber = 1;

  cols: Subject<number> = new Subject();
  gridByBreakpoint = {
    xl: 4,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 1,
  };

  isLoading: boolean = false;

  paginationLength = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor(
    private mediaObserable: MediaObserver,
    private _bottomSheet: MatBottomSheet,
    private webScrappingService: WebScrappingService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.webScrappingService.fetchCouponCourses(1).subscribe(resData => {
      this.couponlist = resData.data;
      this.isLoading = false;
    })
  }

  ngAfterContentInit() {
    this.mediaObserable.asObservable().subscribe((change: MediaChange[]) => {
      this.grid.cols = this.gridByBreakpoint[change[0].mqAlias];
    });
  }

  openDetailBottomSheet(heading: string) {
    const detail = this.couponlist.filter((d) => d.heading === heading);
    this._bottomSheet.open(BottomSheetDetailComponent, {
      data: detail,
    });
  }

  openCouponBottomSheet(linkToCoupon: string) {
    this.webScrappingService
      .fetchCouponLink(linkToCoupon)
      .subscribe((resData) => {
        const data = {
          title: 'COUPON',
          link: resData.link,
          description: '',
        };
        this._bottomSheet.open(BottomSheetCouponComponent, {
          data: data,
        });
      });
  }

  onSelectItem(item: number) {
    this.isLoading = true;
    this.webScrappingService.fetchCouponCourses(item).subscribe(resData => {
      this.couponlist = resData.data;
      this.isLoading = false;
      window.scrollTo(0,0);
      this.selectedNumber = item;
    })
  }

}
