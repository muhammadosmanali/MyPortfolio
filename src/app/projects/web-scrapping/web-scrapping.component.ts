import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-web-scrapping',
  templateUrl: './web-scrapping.component.html',
  styleUrls: ['./web-scrapping.component.css']
})
export class WebScrappingComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Web Scrapping');
  }

}
