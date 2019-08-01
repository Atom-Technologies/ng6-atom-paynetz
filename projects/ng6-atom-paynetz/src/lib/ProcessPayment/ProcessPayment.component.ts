import { Component, OnInit } from '@angular/core';
import * as hash from 'js-sha512';

@Component({
  selector: 'lib-config',
  templateUrl: './ProcessPayment.component.html',
  styleUrls: ['./ProcessPayment.component.scss']
})

export class ProcessPaymentComponent implements OnInit {

  private loginId = '';
  private password = '';
  private url = '';
  private clientCode = '';
  private requestHashKey = '';
  private responseHashKey = '';
  private prodid = '';
  private signature = '';
  private amt = '';
  private txncurr = '';
  private txntype = '';
  private txnscamt = '';
  private txnid = '';
  private custacc = '';
  private returnURL = '';
  private udf1 = '';
  private udf2 = '';
  private udf3 = '';
  private udf4 = '';


  constructor() { }

  ngOnInit() {
  }

  setLoginid (login: string) {
      this.loginId = login;
  }

  setPassword (password: string) {
      this.password = password;
  }

  setURL (url: string) {
      this.url = url;
  }

  setClientCode (clientCode: string) {
      this.clientCode = clientCode;
  }

  setRequestHaskKey (requestHashKey: string) {
      this.requestHashKey = requestHashKey;
  }

  setResponseHashKey (responseHashKey: string) {
    this.responseHashKey = responseHashKey;
  }

  setProdId (prodid: string) {
    this.prodid = prodid;
  }

  setTxnId (txnid: string) {
    this.txnid = txnid;
  }

  setCustAcc (custacc: string) {
    this.custacc = custacc;
  }

  setAmount (amt: string) {
    this.amt = amt;
  }

  setCurrency (txncurr: string) {
    this.txncurr = txncurr;
  }

  setTxnType (txntype: string) {
    this.txntype = txntype;
  }

  setReturnUrl (returnURL: string) {
    this.returnURL = 'https://www.atomtech.in/angular-kit-handle/params_response.php?myroute=' + returnURL;
  }

  setTxnsCamt (txnscamt: string) {
    this.txnscamt = txnscamt;
  }

  setCustomerName (udf1: string) {
    this.udf1 = udf1;
  }

  setCustomerEmail (udf2: string) {
    this.udf2 = udf2;
  }

  setCustomerMobile (udf3: string) {
    this.udf3 = udf3;
  }

  setCustomerAddress (udf4: string) {
    this.udf4 = udf4;
  }

 generateChecksum() {
   this.signature = this.loginId + this.password + this.txntype + this.prodid + this.txnid + this.amt + this.txncurr;
   return hash.sha512.hmac(this.requestHashKey, this.signature);
 }



 payNow() {

  let urlToPay = this.url;
  urlToPay += '?login=' + this.loginId;
  urlToPay += '&pass=' + this.password;
  urlToPay += '&ttype=' + this.txntype;
  urlToPay += '&prodid=' + this.prodid;
  urlToPay += '&amt=' + this.amt;
  urlToPay += '&txncurr=' + this.txncurr;
  urlToPay += '&txnscamt=' + this.txnscamt;
  urlToPay += '&clientcode=' + btoa(this.clientCode);
  urlToPay += '&txnid=' + this.txnid;
  urlToPay += '&date=' + this.formatDate(new Date);
  urlToPay += '&custacc=' + this.custacc;
  urlToPay += '&ru=' + this.returnURL;
  urlToPay += '&signature=' + this.generateChecksum();
  urlToPay += '&udf1=' + this.udf1;
  urlToPay += '&udf2=' + this.udf2;
  urlToPay += '&udf3=' + this.udf3;
  urlToPay += '&udf4=' + this.udf4;
  return encodeURI(urlToPay);
 }

 validateResponse (mmp_txn: any, mer_txn: any, f_code: any, prod: any, discriminator: any, amt: any, bank_txn: any, signature: any) {
   const string_verify = mmp_txn + mer_txn + f_code + prod + discriminator + amt + bank_txn;
   const sig = hash.sha512.hmac(this.responseHashKey, string_verify);

   if (signature === sig) {
      return {
        'status' : true,
        'message' : 'Signature matched = ' + sig + ' = ' + this.responseHashKey
      };
   } else {
     return {
      'status' : false,
      'message' : 'Signature mismatched = ' + sig + ' = ' + this.responseHashKey
    };
   }
 }

 formatDate(date: any) {
    const day = date.getDate();
    let monthIndex = date.getMonth() + 1;
    const year = date.getFullYear();
    const second = date.getSeconds();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    if  (monthIndex < 10 ) {
      monthIndex = '0' + monthIndex;
    }
    return day + '/' + Number(monthIndex) + '/' + year + ' ' + hours + ':' + minutes + ':' + second;
  }

}
