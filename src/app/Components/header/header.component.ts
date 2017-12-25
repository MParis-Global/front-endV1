import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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

	constructor(private router: Router) { 
		this.getRoute();
	}

	ngOnInit() {
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
		this.isActive = index;
	}

	slideDown() {
		this.slideState = 'slideDown'
		console.log(this.slideState);
	}
}
