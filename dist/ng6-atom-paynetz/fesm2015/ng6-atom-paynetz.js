import { Component, NgModule } from '@angular/core';
import { sha512 } from 'js-sha512';
import { BrowserModule } from '@angular/platform-browser';

class ProcessPaymentComponent {
    constructor() {
        this.mdd = null;
        this.bankId = null;
    }
    ngOnInit() {
    }
    setLoginid(login) {
        this.loginId = login;
    }
    setPassword(password) {
        this.password = password;
    }
    setURL(url) {
        this.url = url;
    }
    setClientCode(clientCode) {
        this.clientCode = clientCode;
    }
    setRequestHaskKey(requestHashKey) {
        this.requestHashKey = requestHashKey;
    }
    setResponseHashKey(responseHashKey) {
        this.responseHashKey = responseHashKey;
    }
    setProdId(prodid) {
        this.prodid = prodid;
    }
    setTxnId(txnid) {
        this.txnid = txnid;
    }
    setCustAcc(custacc) {
        this.custacc = custacc;
    }
    setAmount(amt) {
        this.amt = amt;
    }
    setCurrency(txncurr) {
        this.txncurr = txncurr;
    }
    setTxnType(txntype) {
        this.txntype = txntype;
    }
    setReturnUrl(returnURL) {
        this.returnURL = 'https://www.atomtech.in/angular-kit-handle/params_response.php';
    }
    setTxnsCamt(txnscamt) {
        this.txnscamt = txnscamt;
    }
    setCustomerName(udf1) {
        this.udf1 = udf1;
    }
    setCustomerEmail(udf2) {
        this.udf2 = udf2;
    }
    setCustomerMobile(udf3) {
        this.udf3 = udf3;
    }
    setCustomerAddress(udf4) {
        this.udf4 = udf4;
    }
    setMdd(mdd) {
        this.mdd = mdd;
    }
    setBankId(bankId) {
        this.bankId = bankId;
    }
    generateChecksum() {
        this.signature = this.loginId + this.password + this.txntype + this.prodid + this.txnid + this.amt + this.txncurr;
        return sha512.hmac(this.requestHashKey, this.signature);
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
            function checkWindow(e) {
                if (childWindow && childWindow.closed) {
                    if (res) {
                        this.response = res;
                        window.clearInterval(intervalID);
                        resolve({
                            status: true,
                            data: res,
                        });
                    }
                    else {
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
    validateResponse(mmp_txn, mer_txn, f_code, prod, discriminator, amt, bank_txn, signature) {
        const string_verify = mmp_txn + mer_txn + f_code + prod + discriminator + amt + bank_txn;
        const sig = sha512.hmac(this.responseHashKey, string_verify);
        if (signature === sig) {
            return {
                'status': true,
                'message': 'Signature matched = ' + sig + ' = ' + this.responseHashKey
            };
        }
        else {
            return {
                'status': false,
                'message': 'Signature mismatched = ' + sig + ' = ' + this.responseHashKey
            };
        }
    }
    formatDate(date) {
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
ProcessPaymentComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-config',
                template: `<p>
  config works!
</p>
`,
                styles: [``]
            },] },
];
ProcessPaymentComponent.ctorParameters = () => [];

class Ng6AtomPaynetzModule {
}
Ng6AtomPaynetzModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    BrowserModule,
                ],
                declarations: [ProcessPaymentComponent],
                exports: []
            },] },
];

/*
 * Public API Surface of ng6-atom-paynetz
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Ng6AtomPaynetzModule, ProcessPaymentComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmc2LWF0b20tcGF5bmV0ei5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmc2LWF0b20tcGF5bmV0ei9saWIvUHJvY2Vzc1BheW1lbnQvUHJvY2Vzc1BheW1lbnQuY29tcG9uZW50LnRzIiwibmc6Ly9uZzYtYXRvbS1wYXluZXR6L2xpYi9uZzYtYXRvbS1wYXluZXR6Lm1vZHVsZS50cyIsIm5nOi8vbmc2LWF0b20tcGF5bmV0ei9wdWJsaWNfYXBpLnRzIiwibmc6Ly9uZzYtYXRvbS1wYXluZXR6L25nNi1hdG9tLXBheW5ldHoudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgaGFzaCBmcm9tICdqcy1zaGE1MTInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItY29uZmlnJyxcclxuICB0ZW1wbGF0ZTogYDxwPlxyXG4gIGNvbmZpZyB3b3JrcyFcclxuPC9wPlxyXG5gLFxyXG4gIHN0eWxlczogW2BgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2Nlc3NQYXltZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcHJpdmF0ZSBsb2dpbklkOiBhbnk7XHJcbiAgcHJpdmF0ZSBwYXNzd29yZDogYW55O1xyXG4gIHByaXZhdGUgdXJsOiBhbnk7XHJcbiAgcHJpdmF0ZSBjbGllbnRDb2RlOiBhbnk7XHJcbiAgcHJpdmF0ZSByZXF1ZXN0SGFzaEtleTogYW55O1xyXG4gIHByaXZhdGUgcmVzcG9uc2VIYXNoS2V5OiBhbnk7XHJcbiAgcHJpdmF0ZSBwcm9kaWQ6IGFueTtcclxuICBwcml2YXRlIHNpZ25hdHVyZTogYW55O1xyXG4gIHByaXZhdGUgYW10OiBhbnk7XHJcbiAgcHJpdmF0ZSB0eG5jdXJyOiBhbnk7XHJcbiAgcHJpdmF0ZSB0eG50eXBlOiBhbnk7XHJcbiAgcHJpdmF0ZSB0eG5zY2FtdDogYW55O1xyXG4gIHByaXZhdGUgdHhuaWQ6IGFueTtcclxuICBwcml2YXRlIGN1c3RhY2M6IGFueTtcclxuICBwcml2YXRlIHJldHVyblVSTDogYW55O1xyXG4gIHByaXZhdGUgbWRkID0gbnVsbDtcclxuICBwcml2YXRlIGJhbmtJZCA9IG51bGw7XHJcbiAgcHJpdmF0ZSB1ZGYxOiBhbnk7XHJcbiAgcHJpdmF0ZSB1ZGYyOiBhbnk7XHJcbiAgcHJpdmF0ZSB1ZGYzOiBhbnk7XHJcbiAgcHJpdmF0ZSB1ZGY0OiBhbnk7XHJcbiAgcHJpdmF0ZSBjaGlsZFdpbmRvdzogYW55O1xyXG4gIHByaXZhdGUgcmVzcG9uc2U6IGFueTtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIHNldExvZ2luaWQobG9naW46IHN0cmluZykge1xyXG4gICAgdGhpcy5sb2dpbklkID0gbG9naW47XHJcbiAgfVxyXG5cclxuICBzZXRQYXNzd29yZChwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XHJcbiAgfVxyXG5cclxuICBzZXRVUkwodXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudXJsID0gdXJsO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2xpZW50Q29kZShjbGllbnRDb2RlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY2xpZW50Q29kZSA9IGNsaWVudENvZGU7XHJcbiAgfVxyXG5cclxuICBzZXRSZXF1ZXN0SGFza0tleShyZXF1ZXN0SGFzaEtleTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnJlcXVlc3RIYXNoS2V5ID0gcmVxdWVzdEhhc2hLZXk7XHJcbiAgfVxyXG5cclxuICBzZXRSZXNwb25zZUhhc2hLZXkocmVzcG9uc2VIYXNoS2V5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMucmVzcG9uc2VIYXNoS2V5ID0gcmVzcG9uc2VIYXNoS2V5O1xyXG4gIH1cclxuXHJcbiAgc2V0UHJvZElkKHByb2RpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnByb2RpZCA9IHByb2RpZDtcclxuICB9XHJcblxyXG4gIHNldFR4bklkKHR4bmlkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudHhuaWQgPSB0eG5pZDtcclxuICB9XHJcblxyXG4gIHNldEN1c3RBY2MoY3VzdGFjYzogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmN1c3RhY2MgPSBjdXN0YWNjO1xyXG4gIH1cclxuXHJcbiAgc2V0QW1vdW50KGFtdDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmFtdCA9IGFtdDtcclxuICB9XHJcblxyXG4gIHNldEN1cnJlbmN5KHR4bmN1cnI6IHN0cmluZykge1xyXG4gICAgdGhpcy50eG5jdXJyID0gdHhuY3VycjtcclxuICB9XHJcblxyXG4gIHNldFR4blR5cGUodHhudHlwZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnR4bnR5cGUgPSB0eG50eXBlO1xyXG4gIH1cclxuXHJcbiAgc2V0UmV0dXJuVXJsKHJldHVyblVSTDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnJldHVyblVSTCA9ICdodHRwczovL3d3dy5hdG9tdGVjaC5pbi9hbmd1bGFyLWtpdC1oYW5kbGUvcGFyYW1zX3Jlc3BvbnNlLnBocCc7XHJcbiAgfVxyXG5cclxuICBzZXRUeG5zQ2FtdCh0eG5zY2FtdDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnR4bnNjYW10ID0gdHhuc2NhbXQ7XHJcbiAgfVxyXG5cclxuICBzZXRDdXN0b21lck5hbWUodWRmMTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnVkZjEgPSB1ZGYxO1xyXG4gIH1cclxuXHJcbiAgc2V0Q3VzdG9tZXJFbWFpbCh1ZGYyOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudWRmMiA9IHVkZjI7XHJcbiAgfVxyXG5cclxuICBzZXRDdXN0b21lck1vYmlsZSh1ZGYzOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudWRmMyA9IHVkZjM7XHJcbiAgfVxyXG5cclxuICBzZXRDdXN0b21lckFkZHJlc3ModWRmNDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnVkZjQgPSB1ZGY0O1xyXG4gIH1cclxuXHJcbiAgc2V0TWRkKG1kZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm1kZCA9IG1kZDtcclxuICB9XHJcblxyXG4gIHNldEJhbmtJZChiYW5rSWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5iYW5rSWQgPSBiYW5rSWQ7XHJcbiAgfVxyXG4gIGdlbmVyYXRlQ2hlY2tzdW0oKSB7XHJcbiAgICB0aGlzLnNpZ25hdHVyZSA9IHRoaXMubG9naW5JZCArIHRoaXMucGFzc3dvcmQgKyB0aGlzLnR4bnR5cGUgKyB0aGlzLnByb2RpZCArIHRoaXMudHhuaWQgKyB0aGlzLmFtdCArIHRoaXMudHhuY3VycjtcclxuICAgIHJldHVybiBoYXNoLnNoYTUxMi5obWFjKHRoaXMucmVxdWVzdEhhc2hLZXksIHRoaXMuc2lnbmF0dXJlKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcGF5Tm93KCkge1xyXG5cclxuICAgIGxldCB1cmxUb1BheSA9IHRoaXMudXJsO1xyXG4gICAgdXJsVG9QYXkgKz0gJz9sb2dpbj0nICsgdGhpcy5sb2dpbklkO1xyXG4gICAgdXJsVG9QYXkgKz0gJyZwYXNzPScgKyB0aGlzLnBhc3N3b3JkO1xyXG4gICAgdXJsVG9QYXkgKz0gJyZ0dHlwZT0nICsgdGhpcy50eG50eXBlO1xyXG4gICAgdXJsVG9QYXkgKz0gJyZwcm9kaWQ9JyArIHRoaXMucHJvZGlkO1xyXG4gICAgdXJsVG9QYXkgKz0gJyZhbXQ9JyArIHRoaXMuYW10O1xyXG4gICAgdXJsVG9QYXkgKz0gJyZ0eG5jdXJyPScgKyB0aGlzLnR4bmN1cnI7XHJcbiAgICB1cmxUb1BheSArPSAnJnR4bnNjYW10PScgKyB0aGlzLnR4bnNjYW10O1xyXG4gICAgdXJsVG9QYXkgKz0gJyZjbGllbnRjb2RlPScgKyBidG9hKHRoaXMuY2xpZW50Q29kZSk7XHJcbiAgICB1cmxUb1BheSArPSAnJnR4bmlkPScgKyB0aGlzLnR4bmlkO1xyXG4gICAgdXJsVG9QYXkgKz0gJyZkYXRlPScgKyB0aGlzLmZvcm1hdERhdGUobmV3IERhdGUpO1xyXG4gICAgdXJsVG9QYXkgKz0gJyZjdXN0YWNjPScgKyB0aGlzLmN1c3RhY2M7XHJcbiAgICB1cmxUb1BheSArPSAnJnJ1PScgKyB0aGlzLnJldHVyblVSTDtcclxuICAgIHVybFRvUGF5ICs9ICcmc2lnbmF0dXJlPScgKyB0aGlzLmdlbmVyYXRlQ2hlY2tzdW0oKTtcclxuICAgIHVybFRvUGF5ICs9ICcmdWRmMT0nICsgdGhpcy51ZGYxO1xyXG4gICAgdXJsVG9QYXkgKz0gJyZ1ZGYyPScgKyB0aGlzLnVkZjI7XHJcbiAgICB1cmxUb1BheSArPSAnJnVkZjM9JyArIHRoaXMudWRmMztcclxuICAgIHVybFRvUGF5ICs9ICcmdWRmND0nICsgdGhpcy51ZGY0O1xyXG5cclxuICAgIGlmICh0aGlzLm1kZCAhPSBudWxsKSB7XHJcbiAgICAgIHVybFRvUGF5ICs9ICcmbWRkPScgKyB0aGlzLm1kZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5iYW5rSWQgIT0gbnVsbCkge1xyXG4gICAgICB1cmxUb1BheSArPSAnJmJhbmtpZD0nICsgdGhpcy5iYW5rSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXJsID0gZW5jb2RlVVJJKHVybFRvUGF5KTtcclxuICAgIGxldCByZXMgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IGxlZnQgPSAod2luZG93LnNjcmVlbi53aWR0aCAvIDIpIC0gKCgxMjAwIC8gMikgKyAxMCk7XHJcbiAgICBjb25zdCB0b3AgPSAnMjIlJztcclxuXHJcbiAgICBjb25zdCBjaGlsZFdpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCwgJ0F0b20gUGF5bmV0eicsICdzdGF0dXM9bm8saGVpZ2h0PTYwMCx3aWR0aD0xMjAwLHJlc2l6YWJsZT15ZXMsbGVmdD0nXHJcbiAgICAgICsgbGVmdCArICcsdG9wPScgKyB0b3AgKyAnLHNjcmVlblg9JyArIGxlZnQgKyAnLHNjcmVlblk9J1xyXG4gICAgICArIHRvcCArICcsdG9vbGJhcj1ubyxtZW51YmFyPW5vLHNjcm9sbGJhcnM9bm8sbG9jYXRpb249bm8sZGlyZWN0b3JpZXM9bm8nKTtcclxuXHJcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZS5vcmlnaW4gPT09ICdodHRwczovL3d3dy5hdG9tdGVjaC5pbicpIHtcclxuICAgICAgICAgIHJlcyA9IGUuZGF0YTtcclxuICAgICAgICAgIGNoaWxkV2luZG93LmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBmYWxzZSk7XHJcbiAgICAgIGNvbnN0IGludGVydmFsSUQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoY2hlY2tXaW5kb3csIDUwMCk7XHJcbiAgICAgIGZ1bmN0aW9uIGNoZWNrV2luZG93KGU6IGFueSkge1xyXG4gICAgICAgIGlmIChjaGlsZFdpbmRvdyAmJiBjaGlsZFdpbmRvdy5jbG9zZWQpIHtcclxuICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb25zZSA9IHJlcztcclxuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcclxuICAgICAgICAgICAgICBkYXRhOiByZXMsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsSUQpO1xyXG4gICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICBzdGF0dXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGRhdGE6ICdwYXltZW50IG5vdCBjb21wbGV0ZWQnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcHJvbWlzZTtcclxuXHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZVJlc3BvbnNlKG1tcF90eG46IGFueSwgbWVyX3R4bjogYW55LCBmX2NvZGU6IGFueSwgcHJvZDogYW55LCBkaXNjcmltaW5hdG9yOiBhbnksIGFtdDogYW55LCBiYW5rX3R4bjogYW55LCBzaWduYXR1cmU6IGFueSkge1xyXG4gICAgY29uc3Qgc3RyaW5nX3ZlcmlmeSA9IG1tcF90eG4gKyBtZXJfdHhuICsgZl9jb2RlICsgcHJvZCArIGRpc2NyaW1pbmF0b3IgKyBhbXQgKyBiYW5rX3R4bjtcclxuICAgIGNvbnN0IHNpZyA9IGhhc2guc2hhNTEyLmhtYWModGhpcy5yZXNwb25zZUhhc2hLZXksIHN0cmluZ192ZXJpZnkpO1xyXG5cclxuICAgIGlmIChzaWduYXR1cmUgPT09IHNpZykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICdzdGF0dXMnOiB0cnVlLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1NpZ25hdHVyZSBtYXRjaGVkID0gJyArIHNpZyArICcgPSAnICsgdGhpcy5yZXNwb25zZUhhc2hLZXlcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgJ3N0YXR1cyc6IGZhbHNlLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1NpZ25hdHVyZSBtaXNtYXRjaGVkID0gJyArIHNpZyArICcgPSAnICsgdGhpcy5yZXNwb25zZUhhc2hLZXlcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvcm1hdERhdGUoZGF0ZTogYW55KSB7XHJcbiAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuICAgIGxldCBtb250aEluZGV4ID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBzZWNvbmQgPSBkYXRlLmdldFNlY29uZHMoKTtcclxuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgY29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgaWYgKG1vbnRoSW5kZXggPCAxMCkge1xyXG4gICAgICBtb250aEluZGV4ID0gJzAnICsgbW9udGhJbmRleDtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXkgKyAnLycgKyBOdW1iZXIobW9udGhJbmRleCkgKyAnLycgKyB5ZWFyICsgJyAnICsgaG91cnMgKyAnOicgKyBtaW51dGVzICsgJzonICsgc2Vjb25kO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiXHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXJNb2R1bGUsIFJvdXRlc30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUHJvY2Vzc1BheW1lbnRDb21wb25lbnQgfSBmcm9tICcuL1Byb2Nlc3NQYXltZW50L1Byb2Nlc3NQYXltZW50LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtQcm9jZXNzUGF5bWVudENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOZzZBdG9tUGF5bmV0ek1vZHVsZSB7IH1cclxuIiwiLypcclxuICogUHVibGljIEFQSSBTdXJmYWNlIG9mIG5nNi1hdG9tLXBheW5ldHpcclxuICovXHJcblxyXG5leHBvcnQgKiBmcm9tICcuL2xpYi9uZzYtYXRvbS1wYXluZXR6Lm1vZHVsZSc7XHJcbi8vIGNvbXBvbmVudHNcclxuZXhwb3J0ICogZnJvbSAnLi9saWIvUHJvY2Vzc1BheW1lbnQvUHJvY2Vzc1BheW1lbnQuY29tcG9uZW50JztcclxuIiwiLyoqXG4gKiBHZW5lcmF0ZWQgYnVuZGxlIGluZGV4LiBEbyBub3QgZWRpdC5cbiAqL1xuXG5leHBvcnQgKiBmcm9tICcuL3B1YmxpY19hcGknO1xuIl0sIm5hbWVzIjpbImhhc2guc2hhNTEyIl0sIm1hcHBpbmdzIjoiOzs7OztJQXFDRTtRQVJRLFFBQUcsR0FBRyxJQUFJLENBQUM7UUFDWCxXQUFNLEdBQUcsSUFBSSxDQUFDO0tBUXJCO0lBR0QsUUFBUTtLQUNQO0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7S0FDdEI7SUFFRCxXQUFXLENBQUMsUUFBZ0I7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FDMUI7SUFFRCxNQUFNLENBQUMsR0FBVztRQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztLQUNoQjtJQUVELGFBQWEsQ0FBQyxVQUFrQjtRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztLQUM5QjtJQUVELGlCQUFpQixDQUFDLGNBQXNCO1FBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0tBQ3RDO0lBRUQsa0JBQWtCLENBQUMsZUFBdUI7UUFDeEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7S0FDeEM7SUFFRCxTQUFTLENBQUMsTUFBYztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztLQUN0QjtJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ3BCO0lBRUQsVUFBVSxDQUFDLE9BQWU7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDeEI7SUFFRCxTQUFTLENBQUMsR0FBVztRQUNuQixJQUFJ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