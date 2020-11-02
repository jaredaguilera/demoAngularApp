import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonComponent } from './components/person/person.component';

const routes: Routes = [
  { path: 'person', component: PersonComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'person' }
];



@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
