import { Component } from '@angular/core';
import { ProcessPaymentComponent } from '../../dist/ng6-atom-paynetz';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor () {
    const _atom = new ProcessPaymentComponent();
    _atom.setURL('https://paynetzuat.atomtech.in/paynetz/epi/fts');
    _atom.setLoginid('197');
    _atom.setPassword('Test@123');
    _atom.setClientCode('NAVIN');
    _atom.setCurrency('INR');
    _atom.setAmount('50.00');
    _atom.setCustomerAddress('Address');
    _atom.setCustomerEmail('ankit@gmail.com');
    _atom.setCustomerMobile('1234567890');
    _atom.setCustomerName('Ankit');
    _atom.setProdId('NSE');
    _atom.setCustAcc('000000');
    _atom.setRequestHaskKey('KEY123657234');
    _atom.setResponseHashKey('KEYRESP123657234');
    _atom.setReturnUrl('https://paynetzuat.atomtech.in/paynetzclient/ResponseParam.jsp');
    _atom.setTxnId('234');
    _atom.setTxnType('NBFundTransfer');
    _atom.setTxnsCamt('0');
    const url = _atom.payNow();
    console.log(url);
  }

}
