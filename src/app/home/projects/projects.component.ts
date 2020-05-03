import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', '../common.css']
})
export class ProjectsComponent implements OnInit {
  arr = ['Post One', 'Post Two', 'Post Three', 'Post Four', 'Post Five', 'Post Six'];
  constructor() { }

  ngOnInit(): void {

  }

}
