import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { TokenGuard } from '../common/token.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: UsersComponent },
    { path: 'user-profile', component: UserProfileComponent, canActivate:[TokenGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, ReactiveFormsModule,],
  exports: [RouterModule, FormsModule, ReactiveFormsModule],
  providers:[

  ]
})
export class UsersRoutingModule { }