import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home-component/home-component.component';


const mainroutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => 
    import('./component/home-component/home.module').then((m) => m.HomeModule),

  }
];

@NgModule({
  imports:[
    RouterModule.forRoot(mainroutes)
  ],
  exports: [RouterModule]
})
export class AppRountingModule{}
