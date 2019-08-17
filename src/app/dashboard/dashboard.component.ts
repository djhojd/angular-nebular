import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <nb-layout-column> Page Content <button nbButton>Hello World</button> </nb-layout-column>
  `,
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
