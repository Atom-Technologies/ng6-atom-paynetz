import { Component, OnInit } from '@angular/core';
import * as hash from 'js-sha512';

@Component({
  selector: 'lib-config',
  templateUrl: './ProcessPayment.component.html',
  styleUrls: ['./ProcessPayment.component.scss']
})

export class ProcessPaymentComponent implements OnInit {

  private loginId: any;
  private password: any;
  private url: any;
  private clientCode: any;
  private requestHashKey: any;
  private responseHashKey: any;
  private prodid: any;
  private signature: any;
  private amt: any;
  private txncurr: any;
  private txntype: any;
  private txnscamt: any;
  private txnid: any;
  private custacc: any;
  private returnURL: any;
  private mdd = null;
  private bankId = null;
  private udf1: any;
  private udf2: any;
  private udf3: any;
  private udf4: any;
  private childWindow: any;
  private response: any;
  constructor() {
  }


  ngOnInit() {
  }

  setLoginid(login: string) {
    this.loginId = login;
  }

  setPassword(password: string) {
    this.password = password;
  }

  setURL(url: string) {
    this.url = url;
  }

  setClientCode(clientCode: string) {
    this.clientCode = clientCode;
  }

  setRequestHaskKey(requestHashKey: string) {
    this.requestHashKey = requestHashKey;
  }

  setResponseHashKey(responseHashKey: string) {
    this.responseHashKey = responseHashKey;
  }

  setProdId(prodid: string) {
    this.prodid = prodid;
  }

  setTxnId(txnid: string) {
    this.txnid = txnid;
  }

  setCustAcc(custacc: string) {
    this.custacc = custacc;
  }

  setAmount(amt: string) {
    this.amt = amt;
  }

  setCurrency(txncurr: string) {
    this.txncurr = txncurr;
  }

  setTxnType(txntype: string) {
    this.txntype = txntype;
  }

  setReturnUrl(returnURL: string) {
    this.returnURL = 'https://www.atomtech.in/angular-kit-handle/params_response.php';
  }

  setTxnsCamt(txnscamt: string) {
    this.txnscamt = txnscamt;
  }

  setCustomerName(udf1: string) {
    this.udf1 = udf1;
  }

  setCustomerEmail(udf2: string) {
    this.udf2 = udf2;
  }

  setCustomerMobile(udf3: string) {
    this.udf3 = udf3;
  }

  setCustomerAddress(udf4: string) {
    this.udf4 = udf4;
  }

  setMdd(mdd: string) {
    this.mdd = mdd;
  }

  setBankId(bankId: string) {
    this.bankId = bankId;
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

    if (this.mdd != null) {
      urlToPay += '&mdd=' + this.mdd;
    }

    if (this.bankId != null) {
      urlToPay += '&bankid=' + this.bankId;
    }

    const url = encodeURI(urlToPay);
    let res = null;

    const left = (window.screen.width / 2) - ((1200 / 2) + 10);
    const top = '22%';

    const childWindow = window.open(url, 'Atom Paynetz', 'status=no,height=600,width=1200,resizable=yes,left='
      + left + ',top=' + top + ',screenX=' + left + ',screenY='
      + top + ',toolbar=no,menubar=no,scrollbars=no,location=no,directories=no');

    const promise = new Promise(resolve => {
      window.addEventListener('message', function (e) {
        if (e.origin === 'https://www.atomtech.in') {
          res = e.data;
          childWindow.close();
        }
      }, false);
      const intervalID = window.setInterval(checkWindow, 500);
      function checkWindow(e: any) {
        if (childWindow && childWindow.closed) {
          if (res) {
            this.response = res;
            window.clearInterval(intervalID);
            resolve({
              status: true,
              data: res,
            });
          } else {
            window.clearInterval(intervalID);
            window.clearInterval(intervalID);
            resolve({
              status: false,
              data: 'payment not completed',
            });
          }

        }
      }
    });

    return promise;

  }

  validateResponse(mmp_txn: any, mer_txn: any, f_code: any, prod: any, discriminator: any, amt: any, bank_txn: any, signature: any) {
    const string_verify = mmp_txn + mer_txn + f_code + prod + discriminator + amt + bank_txn;
    const sig = hash.sha512.hmac(this.responseHashKey, string_verify);

    if (signature === sig) {
      return {
        'status': true,
        'message': 'Signature matched = ' + sig + ' = ' + this.responseHashKey
      };
    } else {
      return {
        'status': false,
        'message': 'Signature mismatched = ' + sig + ' = ' + this.responseHashKey
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
    if (monthIndex < 10) {
      monthIndex = '0' + monthIndex;
    }
    return day + '/' + Number(monthIndex) + '/' + year + ' ' + hours + ':' + minutes + ':' + second;
  }

}
