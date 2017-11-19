/* Modules */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { LandingComponent } from '../Components/landing/landing.component'

/* Librairies */
// import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
	{ path: '', canActivate: [], component: LandingComponent,
		// data: {
		// 	meta: {
		// 		title 		: 'Wittycircle | Networking for the entrepreneurial world',
		// 		description	: 'We give exposure to all the ideas, projects and startups from around the world and connect them to the people they need, instantly',
		// 		'og:url' 	: 'https://www.wittycircle.com',
		// 		'og:image'	: 'http://res.cloudinary.com/dqpkpmrgk/image/upload/v1503093167/Share_banner_cover/Banner_Meta_Facebook-01.png',
		// 		'og:type'	: 'website',
		// 		'og:locale'	: 'en_US',
		// 	}
		// }
	}
];

export const LANDING_ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
