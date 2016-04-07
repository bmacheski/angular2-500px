import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, Router, Location } from 'angular2/router';

@Component({
  selector: 'navbar',
  directives: [ROUTER_DIRECTIVES],
  styles: [`
    div {
      font-family: Helvetica Neue,sans-serif;
      text-align: center;
    }
    a {
      text-transform: uppercase;
      padding: 15px;
      text-decoration: none;
      color: #2196F3;
    }
    h1 {
      text-align: center;
    }
  `],
  template: `
    <div>
      <h1>Angular2 500px</h1>
      <a [routerLink]="['Photos', { category: 'popular' }]">most popular</a>
      <a [routerLink]="['Photos', { category: 'editors' }]">editors picks</a>
      <a [routerLink]="['Photos', { category: 'upcoming' }]">upcoming</a>
      <a [routerLink]="['Photos', { category: 'fresh_today' }]">fresh today</a>
      <a [routerLink]="['Photos', { category: 'fresh_yesterday' }]">fresh yesterday</a>
      <a [routerLink]="['Photos', { category: 'fresh_week' }]">fresh this week</a>
    </div>
  `
})

export class Navbar {
  contructor() {}
}
