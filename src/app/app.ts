import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig, Route } from 'angular2/router';
import { Navbar } from './components/navbar';
import { Photos } from './components/photo';

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES, Navbar],
  template: `
    <navbar></navbar>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})

@RouteConfig([
  new Route({ path: '/', component: Photos, name: 'Photos' })
])

export class AppComponent {}
