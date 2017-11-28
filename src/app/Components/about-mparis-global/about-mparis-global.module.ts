import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* Components */
import { AboutMparisGlobalComponent } from './about-mparis-global.component';

/* Services */

/* Directive */

/* Librairies */

/* Routes */
import { ABOUT_MP_ROUTES } from '../../Routes/about-mparis-global.routes';

@NgModule({
	imports: [
		ABOUT_MP_ROUTES,
		CommonModule,
		RouterModule,
		FormsModule
	],
	declarations: [
		AboutMparisGlobalComponent
	],
	exports:[
		AboutMparisGlobalComponent
	],
	providers: []
})
export class AboutMparisGlobalModule { }
