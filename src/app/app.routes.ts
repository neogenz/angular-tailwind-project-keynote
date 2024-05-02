import { Routes } from '@angular/router';
import { DeparturesComponent } from './departures/departures.component';

export const routes: Routes = [
    { path: 'departures', component: DeparturesComponent },
    { path: '', redirectTo: 'departures', pathMatch: 'full' },
    { path: '**', redirectTo: 'departures' },
];
