/*
============================================
; Title:  app.component.ts
; Author: Angular CLI
; Date: 17 Sep 2021
; Description: App component file
;===========================================
*/

import { Component } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zra';
  assignment: string;
  

  constructor() {
    this.assignment = 'Welcome to ZRA'
  }
}
