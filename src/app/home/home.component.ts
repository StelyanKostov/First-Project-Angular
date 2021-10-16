import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public titleService:Title,
    private http: HttpClient) {
    this.titleService.setTitle("Home")
   }

  ngOnInit(): void {

    
    }

   
  

}
