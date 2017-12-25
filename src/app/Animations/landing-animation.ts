import { trigger, state, animate, style, transition, keyframes, AnimationEntryMetadata } from '@angular/core';

/* Slide Right/Left dialog */
// export const fadeIn = trigger('fadeIn', [
// 			state('fadeIn', style({
// 				opacity: 1,
// 			})),
// 	    	state('fadeOut', style({
// 	    		opacity: 0,
// 	    	})),
// 	    	transition('fadeIn => fadeOut', animate('300ms')),
// 	    	transition('fadeOut => fadeIn', animate('300ms 200ms'))
// 	    ]);

export const slideToggle = trigger('slide', [
			state('initial', style({
				height: 'auto'
			})),
	    	state('slideDown', style({
	    		height: '350px'
	    	})),
	    	transition('initial => slideDown', animate('300ms')),
	    	transition('slideDown => initial', animate('300ms 200ms'))
	    ]);

// export const slideUp = trigger('slideUp', [
// 			state('fadeIn', style({
// 				opacity: 1,
// 			})),
// 	    	state('fadeOut', style({
// 	    		opacity: 0,
// 	    	})),
// 	    	transition('fadeIn => fadeOut', animate('300ms')),
// 	    	transition('fadeOut => fadeIn', animate('300ms 200ms'))
// 	    ]);