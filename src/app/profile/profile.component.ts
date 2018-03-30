import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile = {};
  display='none';
  expertise =  ['E0','E1','E2','E3'];
  skills = ['nodejs', 'angularjs', 'angular 2', 'mongodb', 'html5', 'CSS3', 'sass', 'mysql', 'aws']

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formData:NgForm){
    console.log(formData.value);
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
}
