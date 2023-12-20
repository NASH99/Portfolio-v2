import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ProyectsComponent } from './views/proyects/proyects.component';

export const routes: Routes = [
  {path: '',component:HomeComponent, title:'Home'}

];
