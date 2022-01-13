import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

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
