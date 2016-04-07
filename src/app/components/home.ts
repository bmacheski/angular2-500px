import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, Router, Location } from 'angular2/router';

@Component({
  selector: 'home',
  styles: [`
    h1 {
      text-align: center;
    }
  `
  ],
  template: `
    <div>
      <h1>Welcome. Select a topic to view photos.</h1>
    </div>
  `
})

export class Home {
  contructor() {}
}
