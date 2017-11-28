import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-service-prices',
	templateUrl: './service-prices.component.html',
	styleUrls: ['./service-prices.component.scss']
})
export class ServicePricesComponent implements OnInit {

	list1: Object[] = [
		{ name: 'Make Me Skinny', price: '20.00', old_price: '12.20' }, 
		{ name: 'Revitalize Facial', price: '55.60', old_price: '12.20' }, 
		{ name: 'Aroma Stone Massage', price: '20.00', old_price: '12.20' }, 
		{ name: 'Bamboo Fusion', price: '20.00', old_price: '12.20' }, 
		{ name: 'After Sun Treatment', price: '20.00', old_price: '12.20' }
	]

	constructor() { }

	ngOnInit() {
	}

}
