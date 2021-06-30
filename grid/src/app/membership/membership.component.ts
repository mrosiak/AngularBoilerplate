import { Component, OnInit, ViewEncapsulation ,Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder  } from '@angular/forms';
import {MemberService} from './member.service';
import { PostcodeAsyncValidatorFn } from './postcode-async-validator.directive';
@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MembershipComponent implements OnInit {
  @Output() sigInEvent = new EventEmitter<boolean>();
  isSignIn=false;
  hideSignIn=true;
  hideSignUp=true;
  hideSignupPopup=true;
  hideSigninPopup=true;
  errorMessage='';
  loginForm=this.fb.group({
    login:['', Validators.compose([Validators.required, Validators.email])],
    password:['', Validators.required]
  });
  registrationForm=this.fb.group({
    login:['', Validators.compose([Validators.required, Validators.email])],
    password:['', Validators.required],
    pointless: this.fb.group({
      name:['', Validators.required],
      surname:['', Validators.required],
      postcode:['',null,PostcodeAsyncValidatorFn()]
    })
  });

  constructor(private provider:MemberService, private fb: FormBuilder) {
    if(provider.hasValidToken()){
      this.isSignIn=true;
    }
    this.sigInEvent.emit(this.isSignIn);
   }
  ngOnInit(): void {
    this.provider.userTokenObservable.subscribe(user=>{
      try{
        if(user.token != undefined && user.token != ''){
          this.isSignIn=true;
          this.sigInEvent.emit(this.isSignIn);
          this.closePopup();
        }else{
          this.isSignIn=false;
          this.sigInEvent.emit(this.isSignIn);
          throw new Error('You are signed out');
        }
      }
      catch(error){
        console.error('Here is the error message', error);
        this.errorMessage='user token is empty'
      }
    });
    this.provider.errorObservable.subscribe(error=>{
      this.errorMessage=error;
    });
  }
  login(){
    this.provider.Login(this.loginForm.get('login')?.value, this.loginForm.get('password')?.value);
  }
  register(){
    this.provider.Register(this.registrationForm.get('login')?.value, this.registrationForm.get('password')?.value);
    
  }
  logout(){
    this.provider.LogOut();
    console.log('logiut button click');
  }
  populateLogin(){
    this.loginForm.patchValue({
      login:'eve.holt@reqres.in',
      password:'cityslicka'
    });
  }
  populateRegistration(){    
    this.registrationForm.patchValue({
      login:'eve.holt@reqres.in',
      password:'pistol',
      pointless:{postcode:'58-316',name:'jon',surname:'doe'}
    });
    this.registrationForm.get('pointless.postcode')?.updateValueAndValidity();
  }
  signInPopup(){
    this.closePopup();
    this.hideSigninPopup=false;  
    console.log('sigin button click');
  }
  signUpPopup(){
    this.closePopup();
    this.hideSignupPopup=false; 
    console.log('sigup button click');
  }
  closePopup(){
    this.hideSigninPopup=true;  
    this.hideSignupPopup=true;
  }
}
