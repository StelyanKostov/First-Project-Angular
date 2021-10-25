import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ITopWaman, TopWomanService } from '../top-woman.service';
@Component({
  selector: 'app-top-woman',
  templateUrl: './top-woman.component.html',
  styleUrls: ['./top-woman.component.css']
})
export class TopWomanComponent implements OnInit {

  dataimg: ITopWaman[];
  constructor(
    private topWomanService: TopWomanService,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    
    this.showImg()
  }
 
  showImg() {

    this.dataimg = this.topWomanService.getTopWoman();
  }

}
