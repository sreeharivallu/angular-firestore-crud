import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseServiceService } from '../services/firebase-service.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  skillInput;
  display='none';
  expertise =  ['E0','E1','E2','E3'];
  skills = ['nodejs', 'angularjs', 'angular 2', 'mongodb', 'html5', 'CSS3', 'sass', 'mysql', 'aws'];
  temp_skills:any;
  //@ViewChild('mymodal') public modal;

  constructor(private firebase_s:FirebaseServiceService) { }

  ngOnInit() {
  }

  onSubmit(formData:NgForm, modal:any){
    console.log(formData.value);
    this.skillInput = null;
    if(formData.value){
      this.firebase_s.postData(formData.value)
      .then(res => {
        console.log(res);
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

  search(myskill:any){
    console.log('myskill is', myskill);
    
    console.log('event.value is', myskill.value);
    
    this.temp_skills = this.skills.filter(skill => {
       if(skill.includes(myskill)){
         console.log('Yes',skill);
         return myskill;
       }
    });
    console.log(this.temp_skills);
  }

  selectItemFromDropDown(value){
    console.log('value is', value);
    this.skillInput = value;
  }
}

