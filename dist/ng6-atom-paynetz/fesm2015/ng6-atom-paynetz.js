import { Component, NgModule } from '@angular/core';
import { sha512 } from 'js-sha512';
import { BrowserModule } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ProcessPaymentComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} login
     * @return {?}
     */
    setLoginid(login) {
        this.loginId = login;
    }
    /**
     * @param {?} password
     * @return {?}
     */
    setPassword(password) {
        this.password = password;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    setURL(url) {
        this.url = url;
    }
    /**
     * @param {?} clientCode
     * @return {?}
     */
    setClientCode(clientCode) {
        this.clientCode = clientCode;
    }
    /**
     * @param {?} requestHashKey
     * @return {?}
     */
    setRequestHaskKey(requestHashKey) {
        this.requestHashKey = requestHashKey;
    }
    /**
     * @param {?} responseHashKey
     * @return {?}
     */
    setResponseHashKey(responseHashKey) {
        this.responseHashKey = responseHashKey;
    }
    /**
     * @param {?} prodid
     * @return {?}
     */
    setProdId(prodid) {
        this.prodid = prodid;
    }
    /**
     * @param {?} txnid
     * @return {?}
     */
    setTxnId(txnid) {
        this.txnid = txnid;
    }
    /**
     * @param {?} custacc
     * @return {?}
     */
    setCustAcc(custacc) {
        this.custacc = custacc;
    }
    /**
     * @param {?} amt
     * @return {?}
     */
    setAmount(amt) {
        this.amt = amt;
    }
    /**
     * @param {?} txncurr
     * @return {?}
     */
    setCurrency(txncurr) {
        this.txncurr = txncurr;
    }
    /**
     * @param {?} txntype
     * @return {?}
     */
    setTxnType(txntype) {
        this.txntype = txntype;
    }
    /**
     * @param {?} returnURL
     * @return {?}
     */
    setReturnUrl(returnURL) {
        this.returnURL = 'https://www.atomtech.in/angular-kit-handle/params_response.php';
    }
    /**
     * @param {?} txnscamt
     * @return {?}
     */
    setTxnsCamt(txnscamt) {
        this.txnscamt = txnscamt;
    }
    /**
     * @param {?} udf1
     * @return {?}
     */
    setCustomerName(udf1) {
        this.udf1 = udf1;
    }
    /**
     * @param {?} udf2
     * @return {?}
     */
    setCustomerEmail(udf2) {
        this.udf2 = udf2;
    }
    /**
     * @param {?} udf3
     * @return {?}
     */
    setCustomerMobile(udf3) {
        this.udf3 = udf3;
    }
    /**
     * @param {?} udf4
     * @return {?}
     */
    setCustomerAddress(udf4) {
        this.udf4 = udf4;
    }
    /**
     * @return {?}
     */
    generateChecksum() {
        this.signature = this.loginId + this.password + this.txntype + this.prodid + this.txnid + this.amt + this.txncurr;
        return sha512.hmac(this.requestHashKey, this.signature);
    }
    /**
     * @return {?}
     */
    payNow() {
        /** @type {?} */
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
        /** @type {?} */
        const url = encodeURI(urlToPay);
        /** @type {?} */
        let res = null;
        /** @type {?} */
        const left = (window.screen.width / 2) - ((1200 / 2) + 10);
        /** @type {?} */
        const top = (window.screen.height / 2) - ((850 / 2) + 10);
        /** @type {?} */
        const childWindow = window.open(url, 'Atom Paynetz', 'status=no,height=600,width=1200,resizable=yes,left='
            + left + ',top=' + top + ',screenX=' + left + ',screenY='
            + top + ',toolbar=no,menubar=no,scrollbars=no,location=no,directories=no');
        /** @type {?} */
        const promise = new Promise(resolve => {
            window.addEventListener('message', function (e) {
                if (e.origin === 'https://www.atomtech.in') {
                    res = e.data;
                    childWindow.close();
                }
            }, false);
            /** @type {?} */
            const intervalID = window.setInterval(checkWindow, 500);
            /**
             * @param {?} e
             * @return {?}
             */
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
    /**
     * @param {?} mmp_txn
     * @param {?} mer_txn
     * @param {?} f_code
     * @param {?} prod
     * @param {?} discriminator
     * @param {?} amt
     * @param {?} bank_txn
     * @param {?} signature
     * @return {?}
     */
    validateResponse(mmp_txn, mer_txn, f_code, prod, discriminator, amt, bank_txn, signature) {
        /** @type {?} */
        const string_verify = mmp_txn + mer_txn + f_code + prod + discriminator + amt + bank_txn;
        /** @type {?} */
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
    /**
     * @param {?} date
     * @return {?}
     */
    formatDate(date) {
        /** @type {?} */
        const day = date.getDate();
        /** @type {?} */
        let monthIndex = date.getMonth() + 1;
        /** @type {?} */
        const year = date.getFullYear();
        /** @type {?} */
        const second = date.getSeconds();
        /** @type {?} */
        const hours = date.getHours();
        /** @type {?} */
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
/** @nocollapse */
ProcessPaymentComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { Ng6AtomPaynetzModule, ProcessPaymentComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmc2LWF0b20tcGF5bmV0ei5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmc2LWF0b20tcGF5bmV0ei9saWIvUHJvY2Vzc1BheW1lbnQvUHJvY2Vzc1BheW1lbnQuY29tcG9uZW50LnRzIiwibmc6Ly9uZzYtYXRvbS1wYXluZXR6L2xpYi9uZzYtYXRvbS1wYXluZXR6Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgaGFzaCBmcm9tICdqcy1zaGE1MTInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY29uZmlnJyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgY29uZmlnIHdvcmtzIVxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvY2Vzc1BheW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgbG9naW5JZDogYW55O1xuICBwcml2YXRlIHBhc3N3b3JkOiBhbnk7XG4gIHByaXZhdGUgdXJsOiBhbnk7XG4gIHByaXZhdGUgY2xpZW50Q29kZTogYW55O1xuICBwcml2YXRlIHJlcXVlc3RIYXNoS2V5OiBhbnk7XG4gIHByaXZhdGUgcmVzcG9uc2VIYXNoS2V5OiBhbnk7XG4gIHByaXZhdGUgcHJvZGlkOiBhbnk7XG4gIHByaXZhdGUgc2lnbmF0dXJlOiBhbnk7XG4gIHByaXZhdGUgYW10OiBhbnk7XG4gIHByaXZhdGUgdHhuY3VycjogYW55O1xuICBwcml2YXRlIHR4bnR5cGU6IGFueTtcbiAgcHJpdmF0ZSB0eG5zY2FtdDogYW55O1xuICBwcml2YXRlIHR4bmlkOiBhbnk7XG4gIHByaXZhdGUgY3VzdGFjYzogYW55O1xuICBwcml2YXRlIHJldHVyblVSTDogYW55O1xuICBwcml2YXRlIHVkZjE6IGFueTtcbiAgcHJpdmF0ZSB1ZGYyOiBhbnk7XG4gIHByaXZhdGUgdWRmMzogYW55O1xuICBwcml2YXRlIHVkZjQ6IGFueTtcbiAgcHJpdmF0ZSBjaGlsZFdpbmRvdzogYW55O1xuICBwcml2YXRlIHJlc3BvbnNlOiBhbnk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNldExvZ2luaWQobG9naW46IHN0cmluZykge1xuICAgIHRoaXMubG9naW5JZCA9IGxvZ2luO1xuICB9XG5cbiAgc2V0UGFzc3dvcmQocGFzc3dvcmQ6IHN0cmluZykge1xuICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgfVxuXG4gIHNldFVSTCh1cmw6IHN0cmluZykge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICB9XG5cbiAgc2V0Q2xpZW50Q29kZShjbGllbnRDb2RlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNsaWVudENvZGUgPSBjbGllbnRDb2RlO1xuICB9XG5cbiAgc2V0UmVxdWVzdEhhc2tLZXkocmVxdWVzdEhhc2hLZXk6IHN0cmluZykge1xuICAgIHRoaXMucmVxdWVzdEhhc2hLZXkgPSByZXF1ZXN0SGFzaEtleTtcbiAgfVxuXG4gIHNldFJlc3BvbnNlSGFzaEtleShyZXNwb25zZUhhc2hLZXk6IHN0cmluZykge1xuICAgIHRoaXMucmVzcG9uc2VIYXNoS2V5ID0gcmVzcG9uc2VIYXNoS2V5O1xuICB9XG5cbiAgc2V0UHJvZElkKHByb2RpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5wcm9kaWQgPSBwcm9kaWQ7XG4gIH1cblxuICBzZXRUeG5JZCh0eG5pZDogc3RyaW5nKSB7XG4gICAgdGhpcy50eG5pZCA9IHR4bmlkO1xuICB9XG5cbiAgc2V0Q3VzdEFjYyhjdXN0YWNjOiBzdHJpbmcpIHtcbiAgICB0aGlzLmN1c3RhY2MgPSBjdXN0YWNjO1xuICB9XG5cbiAgc2V0QW1vdW50KGFtdDogc3RyaW5nKSB7XG4gICAgdGhpcy5hbXQgPSBhbXQ7XG4gIH1cblxuICBzZXRDdXJyZW5jeSh0eG5jdXJyOiBzdHJpbmcpIHtcbiAgICB0aGlzLnR4bmN1cnIgPSB0eG5jdXJyO1xuICB9XG5cbiAgc2V0VHhuVHlwZSh0eG50eXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnR4bnR5cGUgPSB0eG50eXBlO1xuICB9XG5cbiAgc2V0UmV0dXJuVXJsKHJldHVyblVSTDogc3RyaW5nKSB7XG4gICAgdGhpcy5yZXR1cm5VUkwgPSAnaHR0cHM6Ly93d3cuYXRvbXRlY2guaW4vYW5ndWxhci1raXQtaGFuZGxlL3BhcmFtc19yZXNwb25zZS5waHAnO1xuICB9XG5cbiAgc2V0VHhuc0NhbXQodHhuc2NhbXQ6IHN0cmluZykge1xuICAgIHRoaXMudHhuc2NhbXQgPSB0eG5zY2FtdDtcbiAgfVxuXG4gIHNldEN1c3RvbWVyTmFtZSh1ZGYxOiBzdHJpbmcpIHtcbiAgICB0aGlzLnVkZjEgPSB1ZGYxO1xuICB9XG5cbiAgc2V0Q3VzdG9tZXJFbWFpbCh1ZGYyOiBzdHJpbmcpIHtcbiAgICB0aGlzLnVkZjIgPSB1ZGYyO1xuICB9XG5cbiAgc2V0Q3VzdG9tZXJNb2JpbGUodWRmMzogc3RyaW5nKSB7XG4gICAgdGhpcy51ZGYzID0gdWRmMztcbiAgfVxuXG4gIHNldEN1c3RvbWVyQWRkcmVzcyh1ZGY0OiBzdHJpbmcpIHtcbiAgICB0aGlzLnVkZjQgPSB1ZGY0O1xuICB9XG5cbiAgZ2VuZXJhdGVDaGVja3N1bSgpIHtcbiAgICB0aGlzLnNpZ25hdHVyZSA9IHRoaXMubG9naW5JZCArIHRoaXMucGFzc3dvcmQgKyB0aGlzLnR4bnR5cGUgKyB0aGlzLnByb2RpZCArIHRoaXMudHhuaWQgKyB0aGlzLmFtdCArIHRoaXMudHhuY3VycjtcbiAgICByZXR1cm4gaGFzaC5zaGE1MTIuaG1hYyh0aGlzLnJlcXVlc3RIYXNoS2V5LCB0aGlzLnNpZ25hdHVyZSk7XG4gIH1cblxuXG5cbiAgcGF5Tm93KCkge1xuXG4gICAgbGV0IHVybFRvUGF5ID0gdGhpcy51cmw7XG4gICAgdXJsVG9QYXkgKz0gJz9sb2dpbj0nICsgdGhpcy5sb2dpbklkO1xuICAgIHVybFRvUGF5ICs9ICcmcGFzcz0nICsgdGhpcy5wYXNzd29yZDtcbiAgICB1cmxUb1BheSArPSAnJnR0eXBlPScgKyB0aGlzLnR4bnR5cGU7XG4gICAgdXJsVG9QYXkgKz0gJyZwcm9kaWQ9JyArIHRoaXMucHJvZGlkO1xuICAgIHVybFRvUGF5ICs9ICcmYW10PScgKyB0aGlzLmFtdDtcbiAgICB1cmxUb1BheSArPSAnJnR4bmN1cnI9JyArIHRoaXMudHhuY3VycjtcbiAgICB1cmxUb1BheSArPSAnJnR4bnNjYW10PScgKyB0aGlzLnR4bnNjYW10O1xuICAgIHVybFRvUGF5ICs9ICcmY2xpZW50Y29kZT0nICsgYnRvYSh0aGlzLmNsaWVudENvZGUpO1xuICAgIHVybFRvUGF5ICs9ICcmdHhuaWQ9JyArIHRoaXMudHhuaWQ7XG4gICAgdXJsVG9QYXkgKz0gJyZkYXRlPScgKyB0aGlzLmZvcm1hdERhdGUobmV3IERhdGUpO1xuICAgIHVybFRvUGF5ICs9ICcmY3VzdGFjYz0nICsgdGhpcy5jdXN0YWNjO1xuICAgIHVybFRvUGF5ICs9ICcmcnU9JyArIHRoaXMucmV0dXJuVVJMO1xuICAgIHVybFRvUGF5ICs9ICcmc2lnbmF0dXJlPScgKyB0aGlzLmdlbmVyYXRlQ2hlY2tzdW0oKTtcbiAgICB1cmxUb1BheSArPSAnJnVkZjE9JyArIHRoaXMudWRmMTtcbiAgICB1cmxUb1BheSArPSAnJnVkZjI9JyArIHRoaXMudWRmMjtcbiAgICB1cmxUb1BheSArPSAnJnVkZjM9JyArIHRoaXMudWRmMztcbiAgICB1cmxUb1BheSArPSAnJnVkZjQ9JyArIHRoaXMudWRmNDtcbiAgICBjb25zdCB1cmwgPSBlbmNvZGVVUkkodXJsVG9QYXkpO1xuICAgIGxldCByZXMgPSBudWxsO1xuXG4gICAgY29uc3QgbGVmdCA9ICh3aW5kb3cuc2NyZWVuLndpZHRoIC8gMikgLSAoKDEyMDAgLyAyKSArIDEwKTtcbiAgICBjb25zdCB0b3AgPSAod2luZG93LnNjcmVlbi5oZWlnaHQgLyAyKSAtICgoODUwIC8gMikgKyAxMCk7XG5cbiAgICBjb25zdCBjaGlsZFdpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCwgJ0F0b20gUGF5bmV0eicsICdzdGF0dXM9bm8saGVpZ2h0PTYwMCx3aWR0aD0xMjAwLHJlc2l6YWJsZT15ZXMsbGVmdD0nXG4gICAgICArIGxlZnQgKyAnLHRvcD0nICsgdG9wICsgJyxzY3JlZW5YPScgKyBsZWZ0ICsgJyxzY3JlZW5ZPSdcbiAgICAgICsgdG9wICsgJyx0b29sYmFyPW5vLG1lbnViYXI9bm8sc2Nyb2xsYmFycz1ubyxsb2NhdGlvbj1ubyxkaXJlY3Rvcmllcz1ubycpO1xuXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5vcmlnaW4gPT09ICdodHRwczovL3d3dy5hdG9tdGVjaC5pbicpIHtcbiAgICAgICAgICByZXMgPSBlLmRhdGE7XG4gICAgICAgICAgY2hpbGRXaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSwgZmFsc2UpO1xuICAgICAgY29uc3QgaW50ZXJ2YWxJRCA9IHdpbmRvdy5zZXRJbnRlcnZhbChjaGVja1dpbmRvdywgNTAwKTtcbiAgICAgIGZ1bmN0aW9uIGNoZWNrV2luZG93KGU6IGFueSkge1xuICAgICAgICBpZiAoY2hpbGRXaW5kb3cgJiYgY2hpbGRXaW5kb3cuY2xvc2VkKSB7XG4gICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgdGhpcy5yZXNwb25zZSA9IHJlcztcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgICAgICAgZGF0YTogcmVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgc3RhdHVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgZGF0YTogJ3BheW1lbnQgbm90IGNvbXBsZXRlZCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG5cbiAgfVxuXG4gIHZhbGlkYXRlUmVzcG9uc2UobW1wX3R4bjogYW55LCBtZXJfdHhuOiBhbnksIGZfY29kZTogYW55LCBwcm9kOiBhbnksIGRpc2NyaW1pbmF0b3I6IGFueSwgYW10OiBhbnksIGJhbmtfdHhuOiBhbnksIHNpZ25hdHVyZTogYW55KSB7XG4gICAgY29uc3Qgc3RyaW5nX3ZlcmlmeSA9IG1tcF90eG4gKyBtZXJfdHhuICsgZl9jb2RlICsgcHJvZCArIGRpc2NyaW1pbmF0b3IgKyBhbXQgKyBiYW5rX3R4bjtcbiAgICBjb25zdCBzaWcgPSBoYXNoLnNoYTUxMi5obWFjKHRoaXMucmVzcG9uc2VIYXNoS2V5LCBzdHJpbmdfdmVyaWZ5KTtcblxuICAgIGlmIChzaWduYXR1cmUgPT09IHNpZykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3N0YXR1cyc6IHRydWUsXG4gICAgICAgICdtZXNzYWdlJzogJ1NpZ25hdHVyZSBtYXRjaGVkID0gJyArIHNpZyArICcgPSAnICsgdGhpcy5yZXNwb25zZUhhc2hLZXlcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdzdGF0dXMnOiBmYWxzZSxcbiAgICAgICAgJ21lc3NhZ2UnOiAnU2lnbmF0dXJlIG1pc21hdGNoZWQgPSAnICsgc2lnICsgJyA9ICcgKyB0aGlzLnJlc3BvbnNlSGFzaEtleVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBmb3JtYXREYXRlKGRhdGU6IGFueSkge1xuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIGxldCBtb250aEluZGV4ID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IHNlY29uZCA9IGRhdGUuZ2V0U2Vjb25kcygpO1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgICBpZiAobW9udGhJbmRleCA8IDEwKSB7XG4gICAgICBtb250aEluZGV4ID0gJzAnICsgbW9udGhJbmRleDtcbiAgICB9XG4gICAgcmV0dXJuIGRheSArICcvJyArIE51bWJlcihtb250aEluZGV4KSArICcvJyArIHllYXIgKyAnICcgKyBob3VycyArICc6JyArIG1pbnV0ZXMgKyAnOicgKyBzZWNvbmQ7XG4gIH1cblxufVxuIiwiXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGUsIFJvdXRlc30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFByb2Nlc3NQYXltZW50Q29tcG9uZW50IH0gZnJvbSAnLi9Qcm9jZXNzUGF5bWVudC9Qcm9jZXNzUGF5bWVudC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUHJvY2Vzc1BheW1lbnRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbXVxufSlcblxuZXhwb3J0IGNsYXNzIE5nNkF0b21QYXluZXR6TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbImhhc2guc2hhNTEyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0lBbUNFO0tBQ0M7Ozs7SUFHRCxR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