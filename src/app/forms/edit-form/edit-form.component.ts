import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FirebaseService, IStars } from 'src/app/shared/firebase.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  img: string;
  form: FormGroup;
  dataImg: IStars;
  constructor(
    private formBuilder: FormBuilder,
    private fireBaseService: FirebaseService
  ) {

    this.form = formBuilder.group({
      name: [],
      path: [],
      newName: [],
      newPath: []
    })
  }

  ngOnInit(): void {
  }


  editFormSubmit() {


    let name = this.form.value.name;
    let path = this.form.get("path").value
    // this.dataImg =  this.fireBaseService.getStarsByPathAndName(name ,path)
    let id = this.dataImg.id;
    let newPath = this.form.value.newPath;

    console.log("name " + name);
    console.log("id " + id);
    console.log("path " + path);
    console.log("newPath " + newPath);



    this.fireBaseService.updateStar(id ,newPath)

  }

  async checkImg() {

    let name = this.form.value.name;
    let path = this.form.get("path").value
    this.img = path
    await this.fireBaseService.getStarsByPathAndName(name, path).then(x => this.dataImg = x)

    // const {id , name , path} = this.dataImg;


    console.log(this.dataImg)

  }
}
