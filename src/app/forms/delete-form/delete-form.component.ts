import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StarsImagesFirebaseService } from 'src/app/shared/firebase.service';

@Component({
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.css','../../../image-styles.css']
})
export class DeleteFormComponent implements OnInit {

  chekForSend: boolean = true;
  imgs: string[] = [];
  constructor(
    private fireBaseService: StarsImagesFirebaseService
  ) { }

  ngOnInit(): void {

  }


  async checkHandler(form: NgForm) {

    await this.fireBaseService.getStarsName(form.value.name).then(x => this.imgs = x);

    this.chekForSend = false;
  }
  submitHandler(form: NgForm) {

  }
}
