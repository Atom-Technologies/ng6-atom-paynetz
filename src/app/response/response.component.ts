import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProcessPaymentComponent } from '../../../dist/ng6-atom-paynetz';
import * as hash from 'js-sha512';
@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  private amount: any ;
  private mmp_txn: any ;
  private mer_txn: any ;
  private prod: any ;
  private date: any ;
  private bank_txn: any ;
  private f_code: any ;
  private clientcode: any ;
  private bank_name: any ;
  private merchant_id: any ;
  private discriminator: any ;
  private desc: any ;
  private udf9: any ;
  private signature: any ;
  private response: any ;
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.amount = this.route.snapshot.queryParamMap.get('amt');
    this.mmp_txn = this.route.snapshot.queryParamMap.get('mmp_txn');
    this.mer_txn = this.route.snapshot.queryParamMap.get('mer_txn');
    this.prod = this.route.snapshot.queryParamMap.get('prod');
    this.date = this.route.snapshot.queryParamMap.get('date');
    this.bank_txn = this.route.snapshot.queryParamMap.get('bank_txn');
    this.f_code = this.route.snapshot.queryParamMap.get('f_code');
    this.clientcode = this.route.snapshot.queryParamMap.get('clientcode');
    this.bank_name = this.route.snapshot.queryParamMap.get('bank_name');
    this.merchant_id = this.route.snapshot.queryParamMap.get('merchant_id');
    this.discriminator = this.route.snapshot.queryParamMap.get('discriminator');
    this.desc = this.route.snapshot.queryParamMap.get('desc');
    this.udf9 = this.route.snapshot.queryParamMap.get('udf9');
    this.signature = this.route.snapshot.queryParamMap.get('signature');

    const _atom = new ProcessPaymentComponent();
    _atom.setResponseHashKey('KEYRESP123657234');
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
      this.response = 'Response is Proper';
    } else {
      this.response = 'Response is not proper';
    }
  }

}
