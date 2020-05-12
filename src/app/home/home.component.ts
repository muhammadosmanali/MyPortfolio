import { Component, OnInit, Inject } from '@angular/core';
import * as AOS from 'aos';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private titleService: Title,
    @Inject(DOCUMENT) private _document: HTMLDocument
  ) {}

  ngOnInit(): void {
    AOS.init();
    this.titleService.setTitle('Muhammad Usman ALi');
    this._document
      .getElementById('appFavicon')
      .setAttribute('href', 'assets/images/logo.png');
    this._document
  }
}
