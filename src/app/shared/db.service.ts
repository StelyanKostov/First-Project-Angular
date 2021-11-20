import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) { }


  addImages(name, path) {

    this.http.post('http://localhost:1000/api/images/post', { name: name, path }, { withCredentials: true }).subscribe(x => console.log(x));

  }

  getImagesByName(name: string) {

    let images;
    return this.http.get(`http://localhost:1000/api/images?name=${name}`, { withCredentials: true });


  }
}
