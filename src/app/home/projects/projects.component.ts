import { Component, OnInit } from '@angular/core';

interface ProjectsData {
  title: string;
  link: string;
  imageUrl: string;
  detail: string;
}


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', '../common.css']
})
export class ProjectsComponent implements OnInit {
  projects: ProjectsData[];
  projectDetail: string;
  isModalActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.projects = [
      {
        title: "Web Scraping",
        link: "/web-scrapping",
        imageUrl: "assets/images/web-scraping.png",
        detail: "Web Scraping Project"
      },
      {
        title: "Windows",
        link: "/windows",
        imageUrl: "assets/logos/windows/background.png",
        detail: "Windows Project"
      },
      {
        title: "HMS",
        link: "https://github.com/2016CS107/Hospital-Management-System",
        imageUrl: "assets/images/hms.png",
        detail: "Hospital Management System"
      }
    ];
  }

  onDetail(detail: string) {
    this.isModalActive = !this.isModalActive;
    this.projectDetail = detail;
  }

  onModalClose() {
    this.isModalActive = false;
  }

}
