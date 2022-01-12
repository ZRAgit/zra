import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { ErrorComponent } from './error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { ContractComponent } from './contract/contract.component';

const routes: Routes = [
  { path: 'contract', component: ContractComponent},
  { path: 'careers', component: CareersComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'team', component: TeamComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'ignore'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
