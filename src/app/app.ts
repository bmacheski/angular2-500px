import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig, Route } from 'angular2/router';
import { Navbar } from './components/navbar';
import { Home } from './components/home';
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
  new Route({ path: '/', component: Home, name: 'Home' }),
  new Route({ path: '/photos/:category', component: Photos, name: 'Photos' })
])

export class AppComponent {}
