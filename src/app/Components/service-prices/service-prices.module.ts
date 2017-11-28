import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* Components */
import { ServicePricesComponent } from './service-prices.component';

/* Services */

/* Directive */

/* Librairies */

/* Routes */
import { SERVICES_ROUTES } from '../../Routes/service-prices.routes';

@NgModule({
	imports: [
		SERVICES_ROUTES,
		CommonModule,
		RouterModule,
		FormsModule
	],
	declarations: [
		ServicePricesComponent
	],
	exports:[
		ServicePricesComponent
	],
	providers: []
})
export class ServicePricesModule { }
