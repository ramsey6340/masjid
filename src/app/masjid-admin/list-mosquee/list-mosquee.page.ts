import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-mosquee',
  templateUrl: './list-mosquee.page.html',
  styleUrls: ['./list-mosquee.page.scss'],
})
export class ListMosqueePage implements OnInit {
  showAdd = false;
  showAddAn = false;
  showAddAd = true;
  constructor() { }

  ngOnInit() {
  }

}
