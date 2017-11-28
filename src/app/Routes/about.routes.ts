/* Modules */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { AboutComponent } from '../Components/about/about.component'

/* Librairies */
// import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
	{ path: '', component: AboutComponent }
];

export const ABOUT_ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
