/* Core Module */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Modules */
import { HeaderModule } from './header/header.module';

/* Components */
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';

/* Routes */
import { APP_ROUTES } from '../Routes/app.routes';

/* Librairies */
import { AgmCoreModule } from '@agm/core';

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		NotFoundComponent,
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'MParis' }),
		APP_ROUTES,
		HeaderModule,
		BrowserAnimationsModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyAljfwWIIw8n2LhC2gZdRLC3JKCS1Y-V8M'
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
