import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { GiveawayResData, WebScrappingService } from '../web-scrapping.service';
import { MatGridList } from '@angular/material/grid-list';
import { Subject } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetCouponComponent } from '../shared/bottom-sheet-coupon/bottom-sheet-coupon.component';
import { BottomSheetGiveawayDetailComponent } from '../shared/bottom-sheet-giveaway-detail/bottom-sheet-giveaway-detail.component';

@Component({
  selector: 'app-giveaways',
  templateUrl: './giveaways.component.html',
  styleUrls: ['./giveaways.component.css'],
})
export class GiveawaysComponent implements OnInit, AfterContentInit {
  giveawayList: GiveawayResData[];

  @ViewChild('grid') grid: MatGridList;
  cols: Subject<number> = new Subject();

  isLoading: boolean = false;
  isLeftDisabled: boolean = true;
  isRightDisabled: boolean = false;

  gridByBreakpoint = {
    xl: 4,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 1,
  };

  selectedNumber = 1;
  paginationLength;

  constructor(
    private mediaObserable: MediaObserver,
    private _bottomSheet: MatBottomSheet,
    private webScrappingService: WebScrappingService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.webScrappingService.getGiveawayPagination().subscribe((resData) => {
      this.paginationLength = Array.from(
        { length: resData.data },
        (v, i) => i + 1
      );
      this.webScrappingService.fetchGiveaways(1).subscribe((resData) => {
        this.giveawayList = resData.data;
        this.isLoading = false;
      });
    });
  }

  ngAfterContentInit() {
    this.mediaObserable.asObservable().subscribe((change: MediaChange[]) => {
      this.grid.cols = this.gridByBreakpoint[change[0].mqAlias];
    });
  }

  onLeftArrow() {
    let item = 0;
    if (1 <= this.selectedNumber < this.paginationLength.length) {
      this.selectedNumber -= 1;
      item = this.selectedNumber;
      this.isRightDisabled = false;
    }
    if (this.selectedNumber == 1) {
      this.isLeftDisabled = true;
    }
    console.log(item, this.isLeftDisabled);
    this.isLoading = true;
    this.webScrappingService.fetchGiveaways(item).subscribe((resData) => {
      this.giveawayList = resData.data;
      this.isLoading = false;
      window.scrollTo(0, 0);
    });
  }

  onRightArrow() {
    let item = 0;
    if (1 <= this.selectedNumber < this.paginationLength.length) {
      this.selectedNumber += 1;
      item = this.selectedNumber;
      this.isLeftDisabled = false;
    }
    if (this.selectedNumber > this.paginationLength.length - 1) {
      this.isRightDisabled = true;
    }
    console.log(item, this.isRightDisabled);
    this.isLoading = true;
    this.webScrappingService.fetchGiveaways(item).subscribe((resData) => {
      this.giveawayList = resData.data;
      this.isLoading = false;
      window.scrollTo(0, 0);
    });
  }

  openGiveawayDetailBottomSheet(name: string) {
    const detail = this.giveawayList.filter((g) => g.name === name);
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
