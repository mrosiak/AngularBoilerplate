import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Token } from '../common/token-model';
import { BehaviorSubject, from, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  readonly endpoint='https://reqres.in/api/';
  public ErrorMesage:string='';
  public token:string;
  public userId:number;
  private errorSubject =  new BehaviorSubject<string>('');
  public errorObservable = from(this.errorSubject);

  private userTokenSubject =  new Subject<Token>();
  public userTokenObservable = from(this.userTokenSubject);
  constructor(private http:HttpClient) {
    this.userId=4;
    this.token='';
    const storageToken = localStorage.getItem('token');
    storageToken !== undefined && storageToken !== null ? this.token=storageToken : '';
   }
   hasValidToken():boolean{
    const storageToken = localStorage.getItem('token');
    return storageToken !== undefined && storageToken !== null && storageToken !== '';
   }
   public Login(login:string, password:string){
     this.http.post<Token>(this.endpoint+'login', {email:login, password:password})
     .subscribe(
       {
         next: (data)=>{
          localStorage.setItem('token',data.token);
           this.token=data.token;
           this.userTokenSubject.next(data);
           console.log(data.token);
         },
         error:(err: HttpErrorResponse)=>{
           if(err.error instanceof Error){
             this.ErrorMesage='critical error : ' + err.error.message;
           }else{
             this.ErrorMesage='critical error '+ err.error.error;
           }
           this.errorSubject.next(this.ErrorMesage);
           console.log(this.ErrorMesage);
         }
       }
     );
    }
    public LogOut(){
      const clearToken={token:'',id:-1};
      localStorage.setItem('token',clearToken.token);
      this.userTokenSubject.next(clearToken);
    }
    public Register(login:string, password:string){
      this.http.post<Token>(this.endpoint+'register', {email:login, password:password})
      .subscribe(
        {
          next: (data)=>{
            localStorage.setItem('token',data.token);
            this.token=data.token;
            this.userTokenSubject.next(data);
            console.log(data.token);
          },
          error:(err: HttpErrorResponse)=>{
            if(err.error instanceof Error){
              this.ErrorMesage='critical error : ' + err.error.message;
            }else{
              this.ErrorMesage='critical error '+ err.error.error;
            }
            this.errorSubject.next(this.ErrorMesage);
            console.log(this.ErrorMesage);
          }
        }
      );
     }
     
}
