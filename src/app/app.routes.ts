import { Routes } from '@angular/router';
import { PlansComponent } from './pages/plans/plans.component';
import { CardFormComponent } from './pages/card-form/card-form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'plans', pathMatch: 'full' },
    { path: 'plans', component: PlansComponent },
    { path: 'add-card', component: CardFormComponent }
];
