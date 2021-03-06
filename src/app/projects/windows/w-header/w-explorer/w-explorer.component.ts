import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-w-explorer',
  templateUrl: './w-explorer.component.html',
  styleUrls: ['./w-explorer.component.css', '../w-header-common.css']
})
export class WExplorerComponent implements OnInit {
  screenWidth: any;
  animation: string;
  widthStatus: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.animation = 'animated zoomIn';
    this.getScreenSize();
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

  onclose() {
    this.router.navigate(['/windows']);
  }

}
