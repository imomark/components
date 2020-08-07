import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() items = [];
  oitem = 0;
  constructor() { }

  ngOnInit() {
  }

  onClick(index: number){
    if (index === this.oitem){
      this.oitem = -1;
    }
    else{
      this.oitem = index;
    }
  }
}
