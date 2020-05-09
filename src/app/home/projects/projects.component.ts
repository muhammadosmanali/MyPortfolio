import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', '../common.css']
})
export class ProjectsComponent implements OnInit {
  arr = ['Web Scraping'];
  isModalActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onDetail() {
    this.isModalActive = !this.isModalActive;
  }

  onModalClose() {
    this.isModalActive = false;
  }

}
