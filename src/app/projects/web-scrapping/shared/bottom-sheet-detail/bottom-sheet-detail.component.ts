import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { CouponResData } from '../../web-scrapping.service';

@Component({
  selector: 'app-bottom-sheet-detail',
  templateUrl: './bottom-sheet-detail.component.html',
  styleUrls: ['./bottom-sheet-detail.component.css'],
})
export class BottomSheetDetailComponent implements OnInit {

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetDetailComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: CouponResData[]
  ) {}

  ngOnInit(): void {
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
