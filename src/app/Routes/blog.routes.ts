/* Modules */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { BlogComponent } from '../Components/blog/blog.component';

/* Librairies */
// import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
	{ path: '', component: BlogComponent }
];

export const BLOG_ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
