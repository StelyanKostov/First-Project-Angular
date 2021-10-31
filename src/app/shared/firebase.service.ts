import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, doc, updateDoc, where, query, deleteDoc } from 'firebase/firestore/lite';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { WomenService } from '.././woman/women.service';



export interface IStars {
  id: string,
  name: string,
  path: string
}


@Injectable()
export class StarsImagesFirebaseService {

  db: any;
  constructor(private womanService: WomenService) {
    const app = initializeApp(environment.fireBase);
    this.db = getFirestore(app);
  }


  async addStars(name: string, arrayData: any[] , table) {

    const starsCol = collection(this.db, table);

    for (let index = 0; index < arrayData.length; index++) {

      await addDoc(starsCol, { name: name, path: arrayData[index] })

    }

  }
  async deleteStars(stringName:string){

    const starsCol = query(collection(this.db, 'stars'), where("name", "==", stringName));

    const starsSnapshot = await getDocs(starsCol);

    starsSnapshot.docs.map(doc => deleteDoc(doc.ref))
    
    // await deleteDoc(doc(this.db, "stars", starsCol));
  }

  async updateStar(id: string, newPath: string , newName) {

    const ref = doc(this.db, "stars", id);
    await updateDoc(ref, {
      path: newPath,
      name: newName
    });


  }
 
  public async getStarsByPathAndName(name: string, path: string): Promise<IStars> {

    let data: IStars;

    const starsCol = query(collection(this.db, 'stars'), where("name", "==", name), where("path", "==", path));
    const starsSnapshot = await getDocs(starsCol);
    const starsList = starsSnapshot.docs.map(doc => {
      data ={ id: doc.id, name: doc.data().name, path: doc.data().path }
    });


    return data;

  }
  public async getStarsName(name: string , table:string):Promise<string[]> {
    let data: string[] = [];

    const starsCol = query(collection(this.db, table), where("name", "==", name));
    const starsSnapshot = await getDocs(starsCol);
    const starsList = starsSnapshot.docs.map(doc => data.push(doc.data().path))
    return data;

  }


 
  public async getStarsForSearch(str: string , table:string):Promise<string[]> {

    let data:string[] =[];
    const starsCol = query(collection(this.db, table));

    const starsSnapshot = await getDocs(starsCol);
    const starsList = starsSnapshot.docs.map(doc =>{ 
      
      if ((doc.data().name as string).toLowerCase().includes(str.toLowerCase())) {
        data.push(doc.data().path)
      }
    
    })
 
    return data
  }

  public async getDataStarsFromDbAll(table:string):Promise<string[]> {
    let data: string[] = [];
    const starsCol = collection(this.db, table);
    const starsSnapshot = await getDocs(starsCol);
    const starsList = starsSnapshot.docs.map(doc => data.push(doc.data().path));
    return data;

  }
  public async getDataAll(table:string):Promise<IStars[]> {
    let data: IStars[] = [];
    
    const starsCol = collection(this.db, table);
    const starsSnapshot = await getDocs(starsCol);
    const starsList = starsSnapshot.docs.map(doc => data.push(doc.data() as IStars));
    return data;

  }

}
