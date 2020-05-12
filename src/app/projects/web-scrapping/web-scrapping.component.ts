import { Component, OnInit, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-web-scrapping',
  templateUrl: './web-scrapping.component.html',
  styleUrls: ['./web-scrapping.component.css'],
})
export class WebScrappingComponent implements OnInit {
  constructor(
    private titleService: Title,
    @Inject(DOCUMENT) private _document: HTMLDocument
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Web Scrapping');
    this._document.getElementById('appFavicon').setAttribute('href', 'assets/images/web-logo.png');
    this.lazyLoading("web-scrapping-load.js").then((res) => {
      console.log(res);
    }).catch((e) => {
      console.log(e);
    })
  }

  private lazyLoading(styleUrl: string) {
    return new Promise((resolve, reject) => {
      const styleElement = document.createElement('script');
      styleElement.src = styleUrl;
      styleElement.onload = resolve;
      document.head.appendChild(styleElement);
    });
  }
}
