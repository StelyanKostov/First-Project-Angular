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

  getAllImages() {

    return this.http.get(`http://localhost:1000/api/images/all`, { withCredentials: true });
  }

  getImagesByString(string: string) {

    return this.http.get(`http://localhost:1000/api/images/search?string=${string}`, { withCredentials: true });
  }
  updateStar(id:string ,name: string, path: string) {

    return this.http.post('http://localhost:1000/api/images/edit', {id:id, name: name, path: path }, { withCredentials: true })
  }
  getImageByPathAndName(name: string, path: string) {
    return this.http.get(`http://localhost:1000/api/images/getByPathAndName?name=${name}&path=${path}`, { withCredentials: true })
  }
  
  deleteManyImagesByName(name:string){
    return this.http.get(`http://localhost:1000/api/images/delete?name=${name}`, { withCredentials: true })
  }
}


