import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  //Complementing lazy loading with preloading, 
  //the module loader waits for a period of inactivity after the initial 
  //page load to start downloading the rest of the modules. 
  //Which means downloading only occurs in the background, 
  //when the user isn’t requiring those resources.
 }
