import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Pagination, SinglePage } from '../common/pagination-model';
import { Role } from "../common/role-enum";
import { User } from './users-model';
import { BehaviorSubject } from 'rxjs';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly endpoint='https://reqres.in/api/users/';
  private users!: Pagination<User>;
  private ErrorMesage:string='';
  private page=1;

  private userServiceData =  new BehaviorSubject<Pagination<User>>(
      {
        page: 1,
        per_page: 0,
        total: 0,
        total_pages: 0,
        data:[{id:0, email: '', first_name: 'Jon', last_name: 'Doe', avatar: '', role: Role.NoAccess, job:'',updatedAt:'',name:'Jon Doe'}],
        support:{url:'',text:''}
      }
    );
    currentUserServiceData = from(this.userServiceData);

  constructor(private http:HttpClient, private route: ActivatedRoute) {
    console.log('start users');
    this.ErrorMesage='loading users';
    this.load();
   }
  load(){
    console.log('preloading users');
    this.ErrorMesage='preloading users';
    this.route.queryParams.subscribe(params =>{
      if(params['page'] !== undefined){
        this.page = params['page'];
      }else{
        this.route.paramMap.subscribe((paramsMap:ParamMap)=>{
          if(paramsMap.has('page')){
            const p = paramsMap.get('page');
            this.page =  p != null ? +p : this.page;
          }
        })
      }
    });
    this.GetPage(this.page);
  }
  public HasUsers(){
    return this.users!==undefined && this.users.data !==undefined;
  }

  public GetUsers(){
    if(this.HasUsers())
    {
      return this.users.data;
    }
    else{
      return null;
    }
  }
  public GetErrorMesage(){
    return this.ErrorMesage;
  }
  public GetPage(page:number){
    this.http.get<Pagination<User>>(this.endpoint+'?page='+page)
    .subscribe(
      {
        next: (data)=>{
          console.log(data);
          this.users=data;
          this.ErrorMesage='users data has been loaded';
          this.userServiceData.next(this.users);
        },
        error:(err: HttpErrorResponse)=>{
          if(err.error instanceof Error){
            this.ErrorMesage='critical error loading users: ' + err.error.message;
          }else{
            this.ErrorMesage='critical error', err.error.error;
          }
          console.log(this.ErrorMesage);
        }
      }
    );
   }
     
   public GetProfile(id:number){
    return this.http.get<SinglePage<User>>(this.endpoint+id);
   }
   public UpdateProfile(id:number, user:User){
    return this.http.put<User>(this.endpoint+id, user);
   }
}
