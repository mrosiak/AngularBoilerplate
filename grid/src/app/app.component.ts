import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grid';
  constructor(){

  }
  updateHome(signedIn:boolean){
    console.log('output event from membership to app root ',signedIn);
  }
}
