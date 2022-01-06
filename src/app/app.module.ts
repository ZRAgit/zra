import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TeamComponent } from './team/team.component';
import { ErrorComponent } from './error/error.component';
import {  HttpClientModule} from '@angular/common/http';

import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MatStepperModule } from '@angular/material/stepper';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule} from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ContractComponent } from './contract/contract.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CareersComponent,
    ContactComponent,
    NotFoundComponent,
    TeamComponent,
    ErrorComponent,
    ContractComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    MessageModule,
    MessagesModule,
    MatStepperModule,
    MatListModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule,
    MatDividerModule,
    MatTableModule,
    DragDropModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    RouterModule,
    FlexLayoutModule,
    MatFormFieldModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    GoogleMapsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
