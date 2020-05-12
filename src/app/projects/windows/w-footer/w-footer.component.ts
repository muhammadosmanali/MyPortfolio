import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-w-footer',
  templateUrl: './w-footer.component.html',
  styleUrls: ['./w-footer.component.css']
})
export class WFooterComponent implements OnInit {
  date: number = Date.now();
  status: boolean = false;
  link: string = '/';

  constructor() { }

  ngOnInit(): void {
  }

  onclick() {
    this.status = !this.status;
  }

}
