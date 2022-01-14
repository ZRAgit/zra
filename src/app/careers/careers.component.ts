import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showModal = -1;

  show(index: number){
    this.showModal=index;
  }


close(){
this.showModal = -1;
}

}
