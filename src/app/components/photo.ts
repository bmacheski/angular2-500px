import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, Router, Location, RouteParams } from 'angular2/router';
import { Photo } from '../providers/providers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'photo',
  styles: [`
    li {
      display: inline-block;
      list-style: none;
      width: 20%;
    }
    img {
      min-width: 8rem;
      min-height: 8rem;
      width: 100%;
    }
  `],
  template: `
    <ul>
      <li *ngFor="#photo of photos">
        <img src="{{photo.images[0].url}}">
      </li>
     </ul>
  `
})

export class Photos {

  photos: Observable<Array<String>>;

  constructor(private photo: Photo) {
     this.photo.getPhotos().subscribe(items => this.photos = items.photos);
  }
}
