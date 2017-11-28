/* Modules */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { ServicePricesComponent } from '../Components/service-prices/service-prices.component'

/* Librairies */
// import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
	{ path: '', component: ServicePricesComponent }
];

export const SERVICES_ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
