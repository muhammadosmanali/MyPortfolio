import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css', '../common.css']
})
export class SocialsComponent implements OnInit {
  style: string;
  constructor() { }

  ngOnInit(): void {
  }

  changeStyle($event) {
    this.style = $event.type = 'mouseover' ? 'fadeIn' : '';
  }

}
