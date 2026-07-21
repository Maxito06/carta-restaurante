import { Routes } from '@angular/router';
import { Menu } from './components/menu/menu';
import { PlatoDetalle } from './components/plato-detalle/plato-detalle';

export const routes: Routes = [
  { path: '', component: Menu },
  { path: 'plato/:id', component: PlatoDetalle },
];
