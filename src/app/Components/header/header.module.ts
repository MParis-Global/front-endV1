import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* Components */
import { HeaderComponent } from './header.component';

/* Services */

/* Directive */

/* Librairies */

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
	],
	declarations: [
		HeaderComponent
	],
	exports:[
		HeaderComponent
	],
	providers: []
})
export class HeaderModule { }
