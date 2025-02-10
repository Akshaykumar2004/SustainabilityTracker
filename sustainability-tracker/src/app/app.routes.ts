import { Routes } from '@angular/router';
// import { SustainabilityTrackerComponent } from './sustainability-tracker.component';
// import { SustainabilityTrackerComponent } from './app.component';
import { SustainabilityTrackerComponent } from './sustainability.component';

export const routes: Routes = [
  { path: '', redirectTo: '/actions', pathMatch: 'full' },
  { path: 'actions', component: SustainabilityTrackerComponent }
];