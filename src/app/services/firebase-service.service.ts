import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';


import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseServiceService {

  private userDoc: AngularFirestoreDocument<any>;

  users: Observable<any>;
  user: Observable<any>;

  constructor(private http: HttpClient,
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore) {

      this.userDoc = afs.doc<any>('users/1');
      this.user = this.userDoc.valueChanges();
      console.log('userDoc is', this.userDoc);
      console.log('user is', this.user);

      this.user.subscribe(d=> {console.log('d is', d)})

  }
  
  getData():Observable<any>{
      
    this.users = this.afs.collection('users').snapshotChanges()
    console.log('users are', this.users);
    let userData = this.users.map(actions =>{      
      return actions.map(a => {        
        let data = a.payload.doc.data();
        let id = a.payload.doc.id;        
        return  {id, ...data};
      })
    })

    return userData;
 }
 
  postData(data){    
    let collectionRef = this.afs.collection('users');
    console.log(collectionRef);
    return collectionRef.add(data);
  }

  updateData(data){
    let docRef = this.afs.doc('users/' + data.id);
    return docRef.update(data);
  }

  deleteData(data){

  }

}
