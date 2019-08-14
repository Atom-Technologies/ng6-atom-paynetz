import { Component, OnInit, NgModule, Renderer2 } from '@angular/core';
import { ProcessPaymentComponent } from '../../../dist/ng6-atom-paynetz';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})

export class RequestComponent {

  private response = '';
  private amount: any;
  private mmp_txn: any;
  private mer_txn: any;
  private prod: any;
  private date: any;
  private bank_txn: any;
  private f_code: any;
  private clientcode: any;
  private bank_name: any;
  private merchant_id: any;
  private discriminator: any;
  private desc: any;
  private udf9: any;
  private signature: any;


  constructor() {

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
    _atom.setReturnUrl('http://localhost:4200/response');
    _atom.setTxnId('234');
    _atom.setTxnType('NBFundTransfer');
    _atom.setResponseHashKey('KEYRESP123657234');
    _atom.setTxnsCamt('0');
    _atom.payNow().then((v) => {
      const data1 = v;
      if (data1['status']) {
        this.amount = data1['data'].amt;
        this.mmp_txn = data1['data'].mmp_txn;
        this.mer_txn = data1['data'].mer_txn;
        this.prod = data1['data'].prod;
        this.date = data1['data'].date;
        this.bank_txn = data1['data'].bank_txn;
        this.f_code = data1['data'].f_code;
        this.clientcode = data1['data'].clientcode;
        this.bank_name = data1['data'].bank_name;
        this.merchant_id = data1['data'].merchant_id;
        this.discriminator = data1['data'].discriminator;
        this.desc = data1['data'].desc;
        this.udf9 = data1['data'].udf9;
        this.signature = data1['data'].signature;

        const checkResponse = _atom.validateResponse(
          this.mmp_txn,
          this.mer_txn,
          this.f_code,
          this.prod,
          this.discriminator,
          this.amount,
          this.bank_txn,
          this.signature
        );
        console.log(checkResponse);
        if (checkResponse.status) {
          if (this.f_code === 'F') {
            this.response = 'Payment is Failed ';
          } else if (this.f_code === 'C') {
            this.response = 'Payment is cancelled by user ';
          } else if (this.f_code === 'Ok') {
            this.response = 'Payment is sucessfull';
          } else {
            this.response = 'Payment is Failed ';
          }
        } else {
          this.response = 'Payment validatio result is false, response is not proper';
        }
      } else {
        this.response = data1['data'];
      }

    }).catch((e) => {
      console.log(e);
    });


  }
}
