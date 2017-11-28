import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* Components */
import { ContactComponent } from './contact.component';

/* Services */

/* Directive */

/* Librairies */
import { AgmCoreModule, AgmDataLayer } from '@agm/core';

/* Routes */
import { CONTACT_ROUTES } from '../../Routes/contact.routes';

@NgModule({
	imports: [
		CONTACT_ROUTES,
		CommonModule,
		RouterModule,
		FormsModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyAljfwWIIw8n2LhC2gZdRLC3JKCS1Y-V8M'
		})
	],
	declarations: [
		ContactComponent
	],
	exports:[
		ContactComponent
	],
	providers: []
})
export class ContactModule { }
