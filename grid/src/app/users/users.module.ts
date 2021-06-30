import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import {UserService} from './user.service';
import { PaginationComponent } from '../pagination/pagination.component';
import { RepeatDirective } from '../common/repeat.directive';

@NgModule({
  declarations: [
    UsersComponent,
    UserProfileComponent, 
    PaginationComponent,
    RepeatDirective
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers:[
    UserService, {provide: APP_INITIALIZER, useFactory:usersProviderFactory, deps:[UserService, UsersComponent], multi:true}
  ]
})
export class UsersModule { }

export function usersProviderFactory(provider: UserService){
  return ()=>provider.load();
}