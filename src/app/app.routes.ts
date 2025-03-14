import { Routes } from '@angular/router';
import {MainComponent} from './core/components/main/main.component';
import {GestionTareasComponent} from './features/gestion-tareas/gestion-tareas.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children:[
      {
        path: 'gestion-tareas',
        loadComponent: ()=> import('./features/gestion-tareas/gestion-tareas.component').then(m => m.GestionTareasComponent),

      },
    ]
  },


];
