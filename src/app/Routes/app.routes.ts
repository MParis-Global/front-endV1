import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { NotFoundComponent } from '../Components/not-found/not-found.component';

/* Services */

/* ROUTES */
const routes: Routes = [
	{ path: '', loadChildren: '../Components/landing/landing.module#LandingModule'},
	{ path: 'services', loadChildren: '../Components/service-prices/service-prices.module#ServicePricesModule'},
	{ path: 'about/products', loadChildren: '../Components/about/about.module#AboutModule'},
	{ path: 'about/mparis-global', loadChildren: '../Components/about-mparis-global/about-mparis-global.module#AboutMparisGlobalModule'},
	{ path: 'blog', loadChildren: '../Components/blog/blog.module#BlogModule'},
	{ path: 'contact', loadChildren: '../Components/contact/contact.module#ContactModule'},
	{ path: '**', component: NotFoundComponent }

];

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(routes);
