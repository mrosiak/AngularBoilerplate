import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';
import { User } from './users-model';
import { Pagination } from '../common/pagination-model';

import {UserService} from './user.service';
@Component({
  selector: 'app-users',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  ErroeMessage:string='';
  hasUsers:boolean= false;

  currentUserServiceData:Pagination<User> | undefined;
  constructor(private userService:UserService, private cdr: ChangeDetectorRef) { 
    
  }

  public trackItem(index:number , item:User)  {
    return item.id;
  }
  public get users():Array<User>|undefined{
    
    return this.currentUserServiceData?.data;
  };
  public get page(){return this.currentUserServiceData?.page;}
  public get per_page(){return this.currentUserServiceData?.per_page;}
  public get total(){return this.currentUserServiceData?.total;}
  public get total_pages(){return this.currentUserServiceData?.total_pages;}
  public pgHref='users?page=';
  ngOnInit(): void {
    this.userService.currentUserServiceData.subscribe(usData => 
      {
        console.log('logged in user has been updated');
        this.hasUsers=this.userService.HasUsers();
        this.ErroeMessage=this.userService.GetErrorMesage();
        this.currentUserServiceData=usData;
        //comment line below to test BehaviorSubject and change detection
        this.cdr.detectChanges();
      }
      );
  }

}
