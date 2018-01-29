import { Component, OnInit, ViewEncapsulation, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

/* Animations */
import { slideToggle } from '../../Animations/landing-animation';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [
		'./header.component.scss',
	],
	animations: [slideToggle]
})
export class HeaderComponent implements OnInit {

	isActive 	: number = 1
	slideState 	: string = 'initial'
	openNav 	: boolean = false
	// mobile 		: boolean = false

	constructor(private router: Router,
			@Inject(PLATFORM_ID) private platformId: Object) { 
		this.getRoute();
	}

	ngOnInit() {
		if (isPlatformBrowser(this.platformId)) {
	        // Client-only code: use localStorage
	        if ((window.innerWidth) < 736)
				this.openNav = false
			else
				this.openNav = true
	    }
	    if (isPlatformServer(this.platformId)) {
	        // Server-only code: do nothing
	        this.openNav = true
    	}
	}

	getRoute() {
		this.router.events.subscribe(event => {
			if(event instanceof NavigationEnd) {
				if (event.url === '/')
					this.isActive = 1;
				else if (event.url === '/services')
					this.isActive = 2;
				else if (event.url === '/about/products')
					this.isActive = 3;
				else if (event.url === '/about/mparis-global')
					this.isActive = 4;
				// else if (event.url === '/blog')
				// 	this.isActive = 5;
				else if (event.url === '/contact')
					this.isActive = 5;
			}
		});
	}

	switchActive(index) {
		// this.openNav = false;
		this.isActive = index;
	}

	slideDown() {
		this.openNav = this.openNav === true ? false: true;
	}

}
