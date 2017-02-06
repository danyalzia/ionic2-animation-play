import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-web-api',
  templateUrl: 'web-api.html',
  animations: [
	
	trigger('bounce', [
      state('bouncing', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('* => bouncing', [
        animate('300ms ease-in', keyframes([
          style({transform: 'translate3d(0,0,0)', offset: 0}),
          style({transform: 'translate3d(0,-10px,0)', offset: 0.5}),
          style({transform: 'translate3d(0,0,0)', offset: 1}) 
        ]))
      ])
    ]),
	
	trigger('pulse', [
      state('first', style({
        transform: 'scale3d(1, 1, 1)', offset: 0 })),
		
	  state('second', style({
        transform: 'scale3d(1.3, 1.3, 1.3)', offset: 0.5
      })),
	  state('third', style({
        transform: 'scale3d(1, 1, 1)', offset: 1
      })),
      transition('first => second', animate('100ms linear')),
	  transition('second => third', animate('100ms linear')),
	  transition('third => first', animate('100ms linear'))
    ]),
	
	trigger('flip', [
      state('flipped', style({
        transform: 'rotate(180deg)'
      })),
      transition('* => flipped', animate('400ms ease'))
    ]),
	
	trigger('flash', [
      state('first', style({
        opacity: 1, offset: 0 })),
		
	  state('second', style({
         opacity: 0, offset: 0.25
      })),
	  state('third', style({
         opacity: 1, offset: 0.5
      })),
	  state('fourth', style({
         opacity: 0, offset: 0.75
      })),
	  state('fifth', style({
         opacity: 1, offset: 1
      })),
      transition('first => second', animate('100ms linear')),
	  transition('second => third', animate('100ms linear')),
	  transition('third => fourth', animate('100ms linear')),
	  transition('fourth => fifth', animate('100ms linear')),
	  transition('fifth => first', animate('100ms linear'))
    ]),

    trigger('fade', [
      state('visible', style({
        opacity: 1
      })),
      state('invisible', style({
        opacity: 0.1
      })),
      transition('visible <=> invisible', animate('200ms linear'))
    ]),

    
	
	trigger('contentVisibility', [
        state('shown', style({
            opacity: 1
        })),
        state('hidden', style({
            opacity: 0
        })),
        transition('* => *', animate('.5s'))
    ]),
	
	trigger('fadeVisibility', [
      state('true' , style({ opacity: 1, transform: 'scale(1.0)' })),
      state('false', style({ opacity: 0, transform: 'scale(0.0)'  })),
      transition('1 => 0', animate('300ms')),
      transition('0 => 1', animate('900ms'))
    ])

  ]
})
export class WebApiPage {

  showFader : boolean = true;
  
  // By default, our visibility is set to 'shown'
  contentVisibility = 'shown';
  
  fadeVisibility = true;
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad WebApiPage');
  }
  
  // Our states
  bounceState: String = 'noBounce';
  pulseState: String = 'first';
  flipState: String = 'notFlipped';
  flashState: String = 'first';
  fadeState: String = 'visible';
  
  constructor(public navCtrl: NavController) {

  }

  hideorShow() {
    return this.contentVisibility == 'shown' ? 'Hide' : 'Show';
  }
  
  // Our toggle buttons
  toggleVisibilityContent() {
    this.contentVisibility = this.contentVisibility == 'shown' ? 'hidden' : 'shown';
  }
  
  toggleVisibilityFade() {
    this.fadeVisibility = this.fadeVisibility == true ? false : true;
  }
  
  toggleBounce(){
    this.bounceState = (this.bounceState == 'noBounce') ? 'bouncing' : 'noBounce';   
  }
  
  togglePulse(){
	
    this.pulseState = 'first';

    setInterval(() => {
      this.pulseState = 'second';
    }, 500);
	
	setInterval(() => {
      this.pulseState = 'third';
    }, 500);
  }
  
  toggleFlip(){
    this.flipState = (this.flipState == 'notFlipped') ? 'flipped' : 'notFlipped';
  }

  toggleFlash(){
	  
    this.flashState = 'first';

    setInterval(() => {
      this.flashState = 'second';
    }, 300);
	
	setInterval(() => {
      this.flashState = 'third';
    }, 300);
	
	setInterval(() => {
      this.flashState = 'third';
    }, 300);
	
	setInterval(() => {
      this.flashState = 'fourth';
    }, 300);
	
	setInterval(() => {
      this.flashState = 'fifth';
    }, 300);
  }

  toggleFade() {
    this.fadeState = (this.fadeState == 'visible') ? 'invisible' : 'visible';    
  }
}
