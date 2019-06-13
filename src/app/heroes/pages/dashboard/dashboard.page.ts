import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard.page',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.css']
})
export class DashboardPageComponent implements OnInit {

  TILES_NUMBER = 4;

  constructor() { }

  ngOnInit() {
  }

}

