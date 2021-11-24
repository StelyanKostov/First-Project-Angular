import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbVideosService {

  constructor(private http: HttpClient) { }


  addVideo(name: string, path: string) {

    this.http.post(`http://localhost:1000/api/videos/add`, { name: name, path: path }, { withCredentials: true }).subscribe()
  }

  getAllVideos() {

    return this.http.get(`http://localhost:1000/api/videos/get`, { withCredentials: true })
  }
  getVideosByName(name:string){

    return this.http.get(`http://localhost:1000/api/videos/getByName?name=${name}`, { withCredentials: true })

  }
  searchByString(string:string){

    return this.http.get(`http://localhost:1000/api/videos/searchByString?string=${string}`, { withCredentials: true })

  }
}
