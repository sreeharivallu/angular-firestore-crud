import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FirebaseServiceService } from '../services/firebase-service.service';
import {LoadingIndicatorComponent } from '../helpers/loading-indicator/loading-indicator.component';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})
export class SkillsListComponent implements OnInit {

  @ViewChild(LoadingIndicatorComponent)
  private loadingIndicator : LoadingIndicatorComponent;

  myVar:boolean;
  expertise =  ['L0','L1','L2','L3'];
  skillData: any = [];
  editSkillData:any = {};
  editMode:boolean = false;
  
  constructor(private firebase_s: FirebaseServiceService) { }

  ngOnInit() {
    this.loadingIndicator.show();    
    this.firebase_s.getData()
    .subscribe(res => {
      console.log('res', res);
      this.skillData = res;
      this.loadingIndicator.hide();
      //this.myVar = true;
    });
  }

  editUser(i){    
    console.log(this.skillData);
    this.skillData[i].editMode = true;
    this.editSkillData = this.skillData[i];
  }

  updateUser(i){
    console.log('skill', this.editSkillData);    
    delete this.skillData[i].editMode;
    this.editSkillData = {};

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

  deleteUser(i){
    console.log('delete User');
    this.firebase_s.deleteData(this.skillData[i])
    .then(res => {
      console.log(res);

    })
    .catch(err => {
      console.log(err);
    })
  }


}
