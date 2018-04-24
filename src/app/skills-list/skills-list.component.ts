import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../services/firebase-service.service';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})
export class SkillsListComponent implements OnInit {

  myVar:boolean;
  skillData: any = [];
  editSkillData:any = {};
  editMode:boolean = false;
  constructor(private firebase_s: FirebaseServiceService) { }

  ngOnInit() {
    this.firebase_s.getData()
    .subscribe(res => {
      console.log('res', res);
      this.skillData = res;
      //this.myVar = true;
    });
  }

  editUser(event,skill){
    console.log('skill is', skill);
    console.log(this.skillData);
    this.skillData[skill].editMode = true;
  }


  updateUser(event,i){
    console.log('skill', this.editSkillData);
    console.log('update event', event);
    delete this.skillData[i].editMode;

    for(let key of Object.keys(this.editSkillData)){

      console.log(this.editSkillData[key]);
      console.log(this.skillData[i].key);
      this.skillData[i][key] = this.editSkillData[key];
    }
    
    console.log(this.skillData[i]);
    this.firebase_s.updateData(this.skillData[i])
    .then(res => {
      console.log(res);

    })
    .catch(err => {
      console.log(err);
    });
  }

  deleteUser(event, i){
    console.log('delete User');
    this.firebase_s.deleteData(this.skillData[i])
    .then(res => {
      console.log(res);

    })
    .catch(err => {
      console.log(err);
    }

    )
  }

}
