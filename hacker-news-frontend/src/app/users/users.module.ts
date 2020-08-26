// #docplaster
// #docregion
// #docregion v1
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserListComponent } from './user-list/user-list.component';

//import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// #enddocregion v1
import { UsersRouting } from './users.routing';

// #docregion v1
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRouting
// #docregion v1
  ],
  declarations: [
    UserListComponent
  ]
})
export class UsersModule {}