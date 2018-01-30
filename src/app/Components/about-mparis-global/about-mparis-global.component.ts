import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-mparis-global',
  templateUrl: './about-mparis-global.component.html',
  styleUrls: ['./about-mparis-global.component.scss']
})
export class AboutMparisGlobalComponent implements OnInit {

	openingPictures: Object[] = [
		'public/images/mparis-opening/IMG_01.JPG',
		'public/images/mparis-opening/IMG_02.JPG',
		'public/images/mparis-opening/IMG_04.JPG',
		// 'public/images/mparis-opening/IMG_05.JPG',
		// 'public/images/mparis-opening/IMG_06.JPG',
		// 'public/images/mparis-opening/IMG_07.JPG',
		// 'public/images/mparis-opening/IMG_08.JPG',
		// 'public/images/mparis-opening/IMG_09.JPG',
		// 'public/images/mparis-opening/IMG_10.JPG',
		// 'public/images/mparis-opening/IMG_11.JPG',
		'public/images/mparis-opening/IMG_12.JPG',
		// 'public/images/mparis-opening/IMG_13.JPG',
		// 'public/images/mparis-opening/IMG_14.JPG',
		// 'public/images/mparis-opening/IMG_15.JPG',
		// 'public/images/mparis-opening/IMG_17.JPG',
		// 'public/images/mparis-opening/IMG_18.JPG',
		// 'public/images/mparis-opening/IMG_19.JPG',
		// 'public/images/mparis-opening/IMG_20.JPG',
		// 'public/images/mparis-opening/IMG_21.JPG'
	]

  constructor() { }

  ngOnInit() {
  }

}
