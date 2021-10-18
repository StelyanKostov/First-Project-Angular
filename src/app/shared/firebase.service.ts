import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, doc, updateDoc, where, query } from 'firebase/firestore/lite';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { WomenService } from '.././woman/women.service';



export interface IStars {
  id: string,
  name: string,
  path: string
}


@Injectable()
export class FirebaseService {

  db: any;
  constructor(private womanService: WomenService) {
    const app = initializeApp(environment.fireBase);
    this.db = getFirestore(app);
  }


  async addStars(name: string, arrayData: any[]) {

    const starsCol = collection(this.db, 'stars');

    for (let index = 0; index < arrayData.length; index++) {

      await addDoc(starsCol, { name: name, path: arrayData[index] })

    }

  }

  async updateStar(id: string, newPath: string) {

    const ref = doc(this.db, "stars", id);
    await updateDoc(ref, {
      path: newPath
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
  public async getStarsName(name: string):Promise<string[]> {
    let data: string[] = [];

    const starsCol = query(collection(this.db, 'stars'), where("name", "==", name));
    const starsSnapshot = await getDocs(starsCol);
    const starsList = starsSnapshot.docs.map(doc => data.push(doc.data().path))
    return data;

  }


 
  public async getStarsForSearch(str: string):Promise<string[]> {

    let data:string[] =[];
    const starsCol = query(collection(this.db, 'stars'));

    const starsSnapshot = await getDocs(starsCol);
    const starsList = starsSnapshot.docs.map(doc =>{ 
      
      if ((doc.data().name as string).toLowerCase().includes(str.toLowerCase())) {
        data.push(doc.data().path)
      }
    
    })
 
    return data
  }

  public async getDataStarsFromDbAll():Promise<string[]> {
    let data: string[] = [];
    const starsCol = collection(this.db, 'stars');
    const starsSnapshot = await getDocs(starsCol);
    const starsList = starsSnapshot.docs.map(doc => data.push(doc.data().path));
    return data;

  }

}
