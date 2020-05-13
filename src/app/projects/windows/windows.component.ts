import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.css']
})
export class WindowsComponent implements OnInit, OnDestroy {

  constructor(private titleService: Title,
    @Inject(DOCUMENT) private _document: HTMLDocument) { }

  ngOnInit(): void {
    this.titleService.setTitle('Windows');
    this._document.getElementById('appFavicon').setAttribute('href', 'assets/images/logo-windows.png');

    //Adding styles
    this._document.getElementsByTagName("body")[0].style.backgroundImage = "url(assets/logos/windows/background.png)";
    this._document.getElementsByTagName("body")[0].style.backgroundSize = "cover";
    this._document.getElementsByTagName("body")[0].style.backgroundPosition = "center";
    this._document.getElementsByTagName("body")[0].style.backgroundAttachment = "fixed";
    this._document.getElementsByTagName("body")[0].style.height = "100vh";
  }

  ngOnDestroy() {
    this._document.getElementsByTagName("body")[0].style.backgroundImage = "none";
    this._document.getElementsByTagName("body")[0].style.height = "auto";
  }

}
