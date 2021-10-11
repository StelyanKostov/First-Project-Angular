import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WomenService } from '../woman/women.service';
import {tap, switchMap, map} from 'rxjs/operators'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  data:string[];
  isStartSearch = false;
  parametars:string;
  inputValue;
  constructor(private womenService:WomenService,
    private route:ActivatedRoute,
    private r :Router
    ) { 
     
     
    }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   this.parametars = params['searchString'];
    //   console.log(params['searchString']+ " here")
    // });

 
    if (!("/search"=== this.r.url)) {

      window.scroll(0,0);
      this.data = null
      const name = this.route.snapshot.params.name;
      this.data =  this.womenService.getAllImgWithString(name);

        console.log(name)
      // window.scroll(0,0);
      // this.route.params.pipe(
      //   tap(()=>this.data = null),
      //   map(({name})=> this.womenService.getAllImgWithString(name))
      // ).subscribe(data =>{
      //   console.log(data)
      //   this.data = data;
      //   // this.isStartSearch = !this.isStartSearch;
      // })
    }
     
   
  }

  startSearch(value:string){

   this.data  = this.womenService.getAllImgWithString(value);
   this.isStartSearch = !this.isStartSearch;
  }

  inputKeyup(event:KeyboardEvent):void{
    this.inputValue = (event.target as HTMLInputElement).value;
   
    if (this.inputValue === "") {
      this.data = null;
      return
     
    }
    
    this.startSearch(this.inputValue)
  
    }
}
