import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {

  img:string;
  constructor() { }

  ngOnInit(): void {
  }

  suggestionHandler(form:NgForm){

    this.img =form.value.link
    console.log(form.value.link)
  }
  shoImg(event:KeyboardEvent){

   this.img = (event.target as HTMLInputElement).value;
  }
}
