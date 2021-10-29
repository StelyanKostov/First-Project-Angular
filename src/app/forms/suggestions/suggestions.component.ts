import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StarsImagesFirebaseService } from '../../shared/firebase.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {

  img:string;
  constructor(
    private fireBaseService:StarsImagesFirebaseService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  suggestionHandler(form:NgForm){

    let imgName = form.value.name;
    let imgLink =form.value.link;
    let table = form.value.table;

    console.log(imgName + imgLink + table)

    if (table === "videos") {
      
      imgLink = `assets/videos/${imgLink}.mp4`
    }
    this.fireBaseService.addStars(imgName , [imgLink], table)
    // this.router.navigate(['woman'])
  }
  shoImg(event:KeyboardEvent){

   this.img = (event.target as HTMLInputElement).value;
  }
}
