import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* Components */
import { BlogComponent } from './blog.component';

/* Services */

/* Directive */

/* Librairies */

/* Routes */
import { BLOG_ROUTES } from '../../Routes/blog.routes';

@NgModule({
	imports: [
		BLOG_ROUTES,
		CommonModule,
		RouterModule,
		FormsModule
	],
	declarations: [
		BlogComponent
	],
	exports:[
		BlogComponent
	],
	providers: []
})
export class BlogModule { }
