import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, Router, Location, RouteParams } from 'angular2/router';
import { Photo } from '../providers/providers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'photo',
  styles: [`
    img {
      width: 100% !important;
      height: auto !important;
    }

    #container {
      width: 100%;
      max-width: 1300px;
      margin: 2em auto;
    }

    .flexcontainer {
      -moz-column-count:5;
      -moz-column-gap: 3%;
      -moz-column-width: 30%;
      -webkit-column-count:5;
      -webkit-column-gap: 3%;
      -webkit-column-width: 30%;
      column-count: 5;
      column-gap: 3%;
      column-width: 30%;
    }
  `],
  template: `
    <div id="container" class="flexcontainer">
      <div *ngFor="#photo of photos" class="thumb" async>
        <img src="{{photo.images[0].url}}">
      </div>
     </div>
  `
})

export class Photos {

  photos: Observable<Array<String>>;

  constructor(private photo: Photo, routeParams: RouteParams) {
    this.photo
      .getPhotos(routeParams.get('category'))
      .subscribe(items => this.photos = items.photos);
  }
}
