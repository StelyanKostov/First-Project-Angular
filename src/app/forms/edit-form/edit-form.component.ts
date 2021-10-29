import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StarsImagesFirebaseService, IStars } from 'src/app/shared/firebase.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css', '../../../image-styles.css']
})
export class EditFormComponent implements OnInit {

  img: string;
  form: FormGroup;
  dataImg: IStars;
  constructor(
    private formBuilder: FormBuilder,
    private fireBaseService: StarsImagesFirebaseService
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


  async editFormSubmit() {

    let name = this.form.value.name;
    let path = this.form.get("path").value
    await this.fireBaseService.getStarsByPathAndName(name, path).then(x => this.dataImg = x)
    let id = this.dataImg.id;
    let newPath = this.form.value.newPath;
    let newName = this.form.value.newName;
    this.fireBaseService.updateStar(id ,newPath , newName)

  }

   checkImg() {

    let path = this.form.get("path").value
    this.img = path

  }
}
