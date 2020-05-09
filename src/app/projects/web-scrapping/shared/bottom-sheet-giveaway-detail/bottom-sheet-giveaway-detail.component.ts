import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { GiveawayResData } from '../../web-scrapping.service';

@Component({
  selector: 'app-bottom-sheet-giveaway-detail',
  templateUrl: './bottom-sheet-giveaway-detail.component.html',
  styleUrls: ['./bottom-sheet-giveaway-detail.component.css']
})
export class BottomSheetGiveawayDetailComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetGiveawayDetailComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: GiveawayResData[]) { }

  ngOnInit(): void {
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
