import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent implements OnInit {

  displayValue:string;
  constructor() { }

  ngOnInit() {
    this.displayValue = 'none';
  }

  @Input()
  show(){
    this.displayValue = 'block';
  }

  @Input() hide(){
    this.displayValue = 'none';
  }
}
