import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css', '../common.css']
})
export class NavComponent implements OnInit {
  isNav: boolean = false;
  isCheck: boolean;

  isContentload: boolean = false;
  logo: string;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isContentload = true;
    }, 1500);
  }

  onHamburgerClick() {
    this.isNav = !this.isNav;
  }

  onHamburgerClicks() {
    this.isCheck = !this.isCheck;
  }

}
