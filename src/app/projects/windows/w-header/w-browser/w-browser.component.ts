import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-w-browser',
  templateUrl: './w-browser.component.html',
  styleUrls: ['./w-browser.component.css', '../w-header-common.css']
})
export class WBrowserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onclose() {
    this.router.navigate(['/windows']);
  }
}
