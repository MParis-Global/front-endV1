/* Core Module */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/* Modules */
import { HeaderModule } from './header/header.module';

/* Components */
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

/* Routes */
import { APP_ROUTES } from '../Routes/app.routes';

@NgModule({
	declarations: [
		AppComponent,
		NotFoundComponent
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'MParis' }),
		APP_ROUTES,
		HeaderModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { 
	constructor(@Inject(PLATFORM_ID) private platformId: Object,
    			@Inject(APP_ID) private appId: string) {

		const platform = isPlatformBrowser(platformId) ? 'on the server' : 'in the browser';
		
    	console.log(`Running ${platform} with appId=${appId}`);
	}
}
