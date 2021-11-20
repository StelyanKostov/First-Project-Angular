import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) {}


  public uploadImage(image: File) {
    const formData = new FormData();

    formData.append('image', image);

    console.log(image)

    this.http.post('http://localhost:1000/api/images/post',{file:image},{ withCredentials: true }).subscribe(x=> console.log(x));
    

  }
}
