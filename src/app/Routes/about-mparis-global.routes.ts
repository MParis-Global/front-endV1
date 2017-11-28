/* Modules */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { AboutMparisGlobalComponent } from '../Components/about-mparis-global/about-mparis-global.component'

/* Librairies */
// import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
	{ path: '', component: AboutMparisGlobalComponent }
];

export const ABOUT_MP_ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
