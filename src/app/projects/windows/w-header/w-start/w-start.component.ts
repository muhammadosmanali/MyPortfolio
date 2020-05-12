import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-w-start',
  templateUrl: './w-start.component.html',
  styleUrls: ['./w-start.component.css']
})
export class WStartComponent implements OnInit {
  screenWidth: any;
  widthStatus: boolean;
  animation: string;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 480) {
      this.widthStatus = true;
    } else {
      this.widthStatus = false;
    }
  }

  onImageLoad() {
    this.animation = "animated zoomIn"
  }

  shutdown() {
    // window.top.close();
  }

}
