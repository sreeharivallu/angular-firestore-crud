import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseServiceService } from '../services/firebase-service.service';
import {LoadingIndicatorComponent } from '../helpers/loading-indicator/loading-indicator.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild(LoadingIndicatorComponent)
  private loadingIndicator : LoadingIndicatorComponent;

  skillInput;
  display='none';
  expertise =  ['L0','L1','L2','L3']; 
  temp_skills:any;
  //@ViewChild('mymodal') public modal;

  constructor(private firebase_s:FirebaseServiceService) { }

  ngOnInit() {
  }

  onSubmit(formData:NgForm, modal:any){
    console.log(formData.value);
    this.skillInput = null;
    if(formData.value){
      this.loadingIndicator.show();
      this.firebase_s.postData(formData.value)
      .then(res => {
        console.log(res);
        this.loadingIndicator.hide();
        modal.hide();
      })
      .catch(err => {
        console.log(err);
      });
    }else{
      console.log('no data formData');
    }    
  }

  addSkill(){
    console.log('ADD SKILL');
  }

  editSkill(){
    console.log('EDIT SKILL');
  }

  addNewAchievement(){      
    this.display='block'; 
  }

  editAchivement(){
    console.log("EDIT ACHIEVEMENT");
  }

  onCloseHandled(){
    this.display='none'; 
  }

  selectItemFromDropDown(value){
    console.log('value is', value);
    this.skillInput = value;
  }
}

