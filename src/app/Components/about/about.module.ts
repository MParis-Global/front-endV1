import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* Components */
import { AboutComponent } from './about.component';

/* Services */

/* Directive */

/* Librairies */

/* Routes */
import { ABOUT_ROUTES } from '../../Routes/about.routes';

@NgModule({
	imports: [
		ABOUT_ROUTES,
		CommonModule,
		RouterModule,
		FormsModule
	],
	declarations: [
		AboutComponent
	],
	exports:[
		AboutComponent
	],
	providers: []
})
export class AboutModule { }
