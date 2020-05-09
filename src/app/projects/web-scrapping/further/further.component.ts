import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatGridList } from '@angular/material/grid-list';
import { Subject } from 'rxjs';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetDetailComponent } from '../shared/bottom-sheet-detail/bottom-sheet-detail.component';
import { BottomSheetCouponComponent } from '../shared/bottom-sheet-coupon/bottom-sheet-coupon.component';
import {
  WebScrappingService,
  CouponResData,
  GiveawayResData,
} from '../web-scrapping.service';
import { BottomSheetGiveawayDetailComponent } from '../shared/bottom-sheet-giveaway-detail/bottom-sheet-giveaway-detail.component';

@Component({
  selector: 'app-further',
  templateUrl: './further.component.html',
  styleUrls: ['./further.component.css'],
})
export class FurtherComponent implements OnInit, AfterContentInit {
  couponlist: CouponResData[];
  giveawayList: GiveawayResData[];

  @ViewChild('grid') grid: MatGridList;
  @ViewChild('grid2') grid2: MatGridList;
  cols: Subject<number> = new Subject();

  isCouponLoading: boolean = false;
  isGiveawayLoading: boolean = false;

  gridByBreakpoint = {
    xl: 4,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 1,
  };

  constructor(
    private mediaObserable: MediaObserver,
    private _bottomSheet: MatBottomSheet,
    private webScrappingService: WebScrappingService
  ) {}

  ngOnInit(): void {
    if (this.couponlist == null) {
      this.isCouponLoading = true;
      this.webScrappingService.fetchCouponCourses(1).subscribe((resData) => {
        resData.data.length -= 7;
        this.couponlist = resData.data;
        this.isCouponLoading = false;
      });
    }

    if (this.giveawayList == null) {
      this.isGiveawayLoading = true;
      this.webScrappingService.fetchGiveaways(1).subscribe((resData) => {
        resData.data.length -= 8;
        this.giveawayList = resData.data;
        this.isGiveawayLoading = false;
      });
    }
  }

  ngAfterContentInit() {
    this.mediaObserable.asObservable().subscribe((change: MediaChange[]) => {
      this.grid.cols = this.gridByBreakpoint[change[0].mqAlias];
      this.grid2.cols = this.gridByBreakpoint[change[0].mqAlias];
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

  openGiveawayDetailBottomSheet(name: string) {
    const detail = this.giveawayList.filter(g => g.name === name);
    this._bottomSheet.open(BottomSheetGiveawayDetailComponent, {
      data: detail,
    });
  }

  openGiveawayLinkBottomSheet(linkToDetail: string) {
    this.webScrappingService
      .fetchGiveawayDetail(linkToDetail)
      .subscribe((resData) => {
        console.log(resData.data[1]);
        const data = {
          title: 'GIVEAWAY LINK',
          link: resData.data[0],
          description: resData.data[1],
        };
        this._bottomSheet.open(BottomSheetCouponComponent, {
          data: data,
        });
      });
  }
}
