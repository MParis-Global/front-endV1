import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { NotFoundComponent } from '../Components/not-found/not-found.component';

/* Services */

/* ROUTES */
const routes: Routes = [
	{ path: '', loadChildren: '../Components/landing/landing.module#LandingModule'},
	{ path: '**', component: NotFoundComponent }

];

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(routes);
