import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';


const usersRoutes: Routes = [
  { path: 'users', redirectTo: '/superusers' },
  { path: 'hero/:id', redirectTo: '/superhero/:id' },
  { path: 'superusers',  component: UserListComponent, data: { animation: 'users' } },
 // { path: 'superhero/:id', component: HeroDetailComponent, data: { animation: 'hero' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRouting { }