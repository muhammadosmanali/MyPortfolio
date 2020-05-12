import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-w-desktop',
  templateUrl: './w-desktop.component.html',
  styleUrls: ['./w-desktop.component.css']
})
export class WDesktopComponent implements OnInit {
  status: boolean;
  menuStatus: boolean;
  @ViewChild('menu') menu: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onclick() {
    this.status = true;
  }

  @HostListener('window:resize', ['$event'])
  onRightClick($event) {
    if (window.innerWidth > 480) {
      this.menuStatus = true;
    } else {
      this.menuStatus = false;
    }
    return false;
  }

  refresh() {
    // @ts-ignore
    window.open(window.location, '_self');
  }

  onLeftClick() {
    this.menuStatus = false;
  }

}
