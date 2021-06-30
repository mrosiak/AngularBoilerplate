import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { interval, of, timer } from "rxjs";
import { takeUntil,tap,finalize,catchError, take, map } from "rxjs/operators";
import { ResourceService } from "./resource.service";
import { Resource } from "./resource-model";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ResourceService]
})
export class HomeComponent implements OnInit {
  userName='';
  resources:Array<Resource>;
  activeResource=1;
  loading='0';
  stopLoading=false;
  public readonly number$ = interval(1000).pipe(map(x=>++x),take(20));
  constructor(private api:ResourceService) { 
    this.resources=new Array<Resource>();
    api.GetResource(this.activeResource).subscribe(o=>this.resources.push(o.data));
  }

  ngOnInit(): void {
    const source = interval(1000);
    const timer$ = timer(20000);
    source.pipe(
      tap(s=> {
        //load next resource indicator update
        interval(90).pipe(takeUntil(timer(1000))).subscribe(m=>{
          if(m==0){
            this.loading='0';
          }else{
            this.loading=(m/10).toPrecision(2);
          }
        });
      }),
      takeUntil(timer$),
      catchError((err)=> { console.log('that should never suppose to happen ', err); return of(1);}),
      finalize(()=>console.log('rotation of 20 resources on carousel has been finished'))
    ).subscribe(o=> 
      this.next()
      );
  }

prev(){
  if(this.activeResource==1){
    this.activeResource=this.resources.length;
  }else{
    this.activeResource--;
  }
}
next(){
    if(this.activeResource==this.resources.length && !this.stopLoading){
      this.api.GetResource(this.activeResource+1).subscribe({
        next:(o)=>{
        this.resources.push(o.data); 
        this.activeResource++;
        },
        error:(err: HttpErrorResponse)=>{
          let errorMesage=''
          if(err.error instanceof Error){
            errorMesage='critical error loading resources: ' + err.error.message;
          }else{
            errorMesage='End of resources';
          }
          this.stopLoading=true;
          console.log(errorMesage);
        }, 
        complete:()=> console.log('resource has been retreived')
      });
    }else{
      this.activeResource++;
      this.activeResource%=this.resources.length;
    }
  }
}
