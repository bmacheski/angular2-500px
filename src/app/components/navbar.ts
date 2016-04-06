import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, Router, Location } from 'angular2/router';

@Component({
  selector: 'navbar',
  styles: [`
    div {
      font-family: Helvetica Neue,sans-serif;
      text-align: center;
    }
    a {
      text-transform: uppercase;
      padding: 15px;
    }
    h1 {
      text-align: center;
    }
  `],
  template: `
    <div>
      <h1>Angular2 500px</h1>
      <a>most popular</a>
      <a>highest rated</a>
      <a>editors picks</a>
      <a>fresh today</a>
      <a>fresh yesterday</a>
      <a>fresh this week</a>
    </div>
  `
})

export class Navbar {
  contructor() {}
}
