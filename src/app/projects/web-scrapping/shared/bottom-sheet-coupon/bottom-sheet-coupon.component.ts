import { Component, OnInit, Inject } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet-coupon',
  templateUrl: './bottom-sheet-coupon.component.html',
  styleUrls: ['./bottom-sheet-coupon.component.css'],
})
export class BottomSheetCouponComponent implements OnInit {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetCouponComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: {title: string, link: string, description: any}
  ) {}

  ngOnInit(): void {
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
