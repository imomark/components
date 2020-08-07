import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  openModal = false;
  items = [
    {title:'Why sky is blue?', content:'Because sky is blue'},
    {title:'Why orange is orange?', content:'Because orange is orange'},
    {title:'Why so silly?', content:'Because so silly'}
  ];

  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.openModal = !this.openModal;
  }

}
