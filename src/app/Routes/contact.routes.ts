/* Modules */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { ContactComponent } from '../Components/contact/contact.component'

/* Librairies */
// import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
	{ path: '', component: ContactComponent }
];

export const CONTACT_ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
