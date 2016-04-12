import { Component } from 'angular2/core';

@Component({
  selector: 'spinner',
  styles: [`
    .loader: {
      left: 50%;
      top: 50%;
      position: relative;
    }
  `],
  template: `
    <div class="loader">
      <h1>Loading...</h1>
    </div>
  `
})

export class Spinner {
  contructor () {}
}
