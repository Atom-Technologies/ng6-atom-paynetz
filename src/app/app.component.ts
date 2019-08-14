import { Component, OnInit, NgModule, Renderer2 } from '@angular/core';
import { ProcessPaymentComponent } from '../../dist/ng6-atom-paynetz';

@Component({
  selector: 'app-root',
  template: `<a href="/request">Make Payment</a><router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})




export class AppComponent {


}
