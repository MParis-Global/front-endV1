import { Component, OnInit } from '@angular/core';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	browser : boolean = false
	title 	: string = 'Google Maps Addeed Successfully';
	lat 	: number = 21.010497;
	lng 	: number = 105.935602;

	constructor() {}

	ngOnInit() {
	}
}
