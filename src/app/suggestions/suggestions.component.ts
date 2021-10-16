import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseService } from '../shared/firebase.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {

  img:string;
  constructor(private fireBaseService:FirebaseService) { }

  ngOnInit(): void {
  }

  suggestionHandler(form:NgForm){

    let imgName = form.value.name;
    let imgLink =form.value.link;
    this.fireBaseService.addStars(imgName , [imgLink])
    console.log(imgName  +" " +imgLink)
  }
  shoImg(event:KeyboardEvent){

   this.img = (event.target as HTMLInputElement).value;
  }
}
