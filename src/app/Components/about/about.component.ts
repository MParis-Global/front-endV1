import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	list1: Object[] = [
		{ name: 'Make Me Skinny', price: '20.00', old_price: '12.20' }, 
		{ name: 'Revitalize Facial', price: '55.60', old_price: '12.20' }, 
		{ name: 'Aroma Stone Massage', price: '20.00', old_price: '12.20' }
	]

	constructor() { }

	ngOnInit() {
	}

}
