import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../services/firebase-service.service';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})
export class SkillsListComponent implements OnInit {

  skillData: any = [];
  editSkillData:any = {};
  editMode:boolean = false;
  constructor(private firebase_s: FirebaseServiceService) { }

  ngOnInit() {
    this.firebase_s.getData()
    .subscribe(res => {
      console.log('res', res);
      this.skillData = res;
    });
  }

  editUser(event,skill){
    this.editMode = !this.editMode;
  }


  updateUser(event){
    console.log('skill', this.editSkillData);
    this.editMode = !this.editMode;

  }

}
