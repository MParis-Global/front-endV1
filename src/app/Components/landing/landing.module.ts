import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* Components */
import { LandingComponent } from './landing.component';

/* Services */

/* Directive */

/* Librairies */

/* Routes */
import { LANDING_ROUTES } from '../../Routes/landing.routes';

@NgModule({
	imports: [
		LANDING_ROUTES,
		CommonModule,
		RouterModule,
		FormsModule,
	],
	declarations: [
		LandingComponent
	],
	exports:[
		LandingComponent
	],
	providers: []
})
export class LandingModule { }
