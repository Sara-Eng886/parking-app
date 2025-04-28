import { Routes } from '@angular/router';
import { ParkingSlotsComponent } from './parking-slots/parking-slots.component';


export const routes: Routes = [
  { path: 'park', component: ParkingSlotsComponent },

  { path: '', redirectTo: '/park', pathMatch: 'full' }
];
