import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Photo {

  static API_URL: string = 'https://api.500px.com/v1';
  static KEY: string = 'GqAHJcjzaZUqVrxFftGHOm9QpWCOvQaGeIf9UXbM';

  constructor(public http: Http) {}

  getPhotos(category: string): Observable<any> {
   return this.http
      .get(`${Photo.API_URL}/photos?feature=${category}&image_size=4&consumer_key=${Photo.KEY}`)
      .map((res: any) => res.json());
  }
}
