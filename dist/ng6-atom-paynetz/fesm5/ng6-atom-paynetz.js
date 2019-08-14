import { Component, NgModule } from '@angular/core';
import { sha512 } from 'js-sha512';
import { BrowserModule } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ProcessPaymentComponent = /** @class */ (function () {
    function ProcessPaymentComponent() {
    }
    /**
     * @return {?}
     */
    ProcessPaymentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} login
     * @return {?}
     */
    ProcessPaymentComponent.prototype.setLoginid = /**
     * @param {?} login
     * @return {?}
     */
    function (login) {
        this.loginId = login;
    };
    /**
     * @param {?} password
     * @return {?}
     */
    ProcessPaymentComponent.prototype.setPassword = /**
     * @param {?} password
     * @return {?}
     */
    function (password) {
        this.password = password;
    };
    /**
     * @param {?} url
     * @return {?}
     */
    ProcessPaymentComponent.prototype.setURL = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this.url = url;
    };
    /**
     * @param {?} clientCode
     * @return {?}
     */
    ProcessPaymentComponent.prototype.setClientCode = /**
     * @param {?} clientCode
     * @return {?}
     */
    function (clientCode) {
        this.clientCode = clientCode;
    };
    /**
     * @param {?} requestHashKey
     * @return {?}
     */
    ProcessPaymentComponent.prototype.setRequestHaskKey = /**
     * @param {?} requestHashKey
     * @return {?}
     */
    function (requestHashKey) {
        this.requestHashKey = requestHashKey;
    };
    /**
     * @param {?} responseHashKey
     * @return {?}
     */
    ProcessPaymentComponent.prototype.setResponseHashKey = /**
     * @param {?} responseHashKey
     * @return {?}
     */
    function (responseHashKey) {
        this.responseHashKey = responseHashKey;
    };
    /**
     * @param {?} prodid
     * @return {?}
     */
    ProcessPaymentComponent.prototype.setProdId = /**
     * @param {?} prodid
     * @return {?}
     */
    function (prodid) {
        this.prodid = prodid;
    };
    /**
     * @param {?} txnid
     * @return {?}
     */
    ProcessPaymentComponent.prototype.setTxnId = /**
     * @param {?} txnid
     * @return {?}
     */
    function (txnid) {
        this.txnid = txnid;
    };
    /**
     * @param {?} custacc
     * @return {?}
     */
    ProcessPaymentComponent.prototype.setCustAcc = /**
     * @param {?} custacc
     * @return {?}
     */
    function (custacc) {
        this.custacc = custacc;
    };
    /**
     * @param {?} amt
     * @return {?}
     */
    ProcessPaymentComponent.prototype.setAmount = /**
     * @param {?} amt
     * @return {?}
     */
    function (amt) {
        this.amt = amt;
    };
    /**
     * @param {?} txncurr
     * @return {?}
     */
    ProcessPaymentComponent.prototype.setCurrency = /**
     * @param {?} txncurr
     * @return {?}
     */
    function (txncurr) {
        this.txncurr = txncurr;
    };
    /**
     * @param {?} txntype
     * @return {?}
     */
    ProcessPaymentComponent.prototype.setTxnType = /**
     * @param {?} txntype
     * @return {?}
     */
    function (txntype) {
        this.txntype = txntype;
    };
    /**
     * @param {?} returnURL
     * @return {?}
     */
    ProcessPaymentComponent.prototype.setReturnUrl = /**
     * @param {?} returnURL
     * @return {?}
     */
    function (returnURL) {
        this.returnURL = 'https://www.atomtech.in/angular-kit-handle/params_response.php';
    };
    /**
     * @param {?} txnscamt
     * @return {?}
     */
    ProcessPaymentComponent.prototype.setTxnsCamt = /**
     * @param {?} txnscamt
     * @return {?}
     */
    function (txnscamt) {
        this.txnscamt = txnscamt;
    };
    /**
     * @param {?} udf1
     * @return {?}
     */
    ProcessPaymentComponent.prototype.setCustomerName = /**
     * @param {?} udf1
     * @return {?}
     */
    function (udf1) {
        this.udf1 = udf1;
    };
    /**
     * @param {?} udf2
     * @return {?}
     */
    ProcessPaymentComponent.prototype.setCustomerEmail = /**
     * @param {?} udf2
     * @return {?}
     */
    function (udf2) {
        this.udf2 = udf2;
    };
    /**
     * @param {?} udf3
     * @return {?}
     */
    ProcessPaymentComponent.prototype.setCustomerMobile = /**
     * @param {?} udf3
     * @return {?}
     */
    function (udf3) {
        this.udf3 = udf3;
    };
    /**
     * @param {?} udf4
     * @return {?}
     */
    ProcessPaymentComponent.prototype.setCustomerAddress = /**
     * @param {?} udf4
     * @return {?}
     */
    function (udf4) {
        this.udf4 = udf4;
    };
    /**
     * @return {?}
     */
    ProcessPaymentComponent.prototype.generateChecksum = /**
     * @return {?}
     */
    function () {
        this.signature = this.loginId + this.password + this.txntype + this.prodid + this.txnid + this.amt + this.txncurr;
        return sha512.hmac(this.requestHashKey, this.signature);
    };
    /**
     * @return {?}
     */
    ProcessPaymentComponent.prototype.payNow = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var urlToPay = this.url;
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
        var url = encodeURI(urlToPay);
        /** @type {?} */
        var res = null;
        /** @type {?} */
        var left = (window.screen.width / 2) - ((1200 / 2) + 10);
        /** @type {?} */
        var top = (window.screen.height / 2) - ((850 / 2) + 10);
        /** @type {?} */
        var childWindow = window.open(url, 'Atom Paynetz', 'status=no,height=600,width=1200,resizable=yes,left='
            + left + ',top=' + top + ',screenX=' + left + ',screenY='
            + top + ',toolbar=no,menubar=no,scrollbars=no,location=no,directories=no');
        /** @type {?} */
        var promise = new Promise(function (resolve) {
            window.addEventListener('message', function (e) {
                if (e.origin === 'https://www.atomtech.in') {
                    res = e.data;
                    childWindow.close();
                }
            }, false);
            /** @type {?} */
            var intervalID = window.setInterval(checkWindow, 500);
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
    };
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
    ProcessPaymentComponent.prototype.validateResponse = /**
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
    function (mmp_txn, mer_txn, f_code, prod, discriminator, amt, bank_txn, signature) {
        /** @type {?} */
        var string_verify = mmp_txn + mer_txn + f_code + prod + discriminator + amt + bank_txn;
        /** @type {?} */
        var sig = sha512.hmac(this.responseHashKey, string_verify);
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
    };
    /**
     * @param {?} date
     * @return {?}
     */
    ProcessPaymentComponent.prototype.formatDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var day = date.getDate();
        /** @type {?} */
        var monthIndex = date.getMonth() + 1;
        /** @type {?} */
        var year = date.getFullYear();
        /** @type {?} */
        var second = date.getSeconds();
        /** @type {?} */
        var hours = date.getHours();
        /** @type {?} */
        var minutes = date.getMinutes();
        if (monthIndex < 10) {
            monthIndex = '0' + monthIndex;
        }
        return day + '/' + Number(monthIndex) + '/' + year + ' ' + hours + ':' + minutes + ':' + second;
    };
    ProcessPaymentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-config',
                    template: "<p>\n  config works!\n</p>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ProcessPaymentComponent.ctorParameters = function () { return []; };
    return ProcessPaymentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Ng6AtomPaynetzModule = /** @class */ (function () {
    function Ng6AtomPaynetzModule() {
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
    return Ng6AtomPaynetzModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { Ng6AtomPaynetzModule, ProcessPaymentComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmc2LWF0b20tcGF5bmV0ei5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmc2LWF0b20tcGF5bmV0ei9saWIvUHJvY2Vzc1BheW1lbnQvUHJvY2Vzc1BheW1lbnQuY29tcG9uZW50LnRzIiwibmc6Ly9uZzYtYXRvbS1wYXluZXR6L2xpYi9uZzYtYXRvbS1wYXluZXR6Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgaGFzaCBmcm9tICdqcy1zaGE1MTInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY29uZmlnJyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgY29uZmlnIHdvcmtzIVxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvY2Vzc1BheW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgbG9naW5JZDogYW55O1xuICBwcml2YXRlIHBhc3N3b3JkOiBhbnk7XG4gIHByaXZhdGUgdXJsOiBhbnk7XG4gIHByaXZhdGUgY2xpZW50Q29kZTogYW55O1xuICBwcml2YXRlIHJlcXVlc3RIYXNoS2V5OiBhbnk7XG4gIHByaXZhdGUgcmVzcG9uc2VIYXNoS2V5OiBhbnk7XG4gIHByaXZhdGUgcHJvZGlkOiBhbnk7XG4gIHByaXZhdGUgc2lnbmF0dXJlOiBhbnk7XG4gIHByaXZhdGUgYW10OiBhbnk7XG4gIHByaXZhdGUgdHhuY3VycjogYW55O1xuICBwcml2YXRlIHR4bnR5cGU6IGFueTtcbiAgcHJpdmF0ZSB0eG5zY2FtdDogYW55O1xuICBwcml2YXRlIHR4bmlkOiBhbnk7XG4gIHByaXZhdGUgY3VzdGFjYzogYW55O1xuICBwcml2YXRlIHJldHVyblVSTDogYW55O1xuICBwcml2YXRlIHVkZjE6IGFueTtcbiAgcHJpdmF0ZSB1ZGYyOiBhbnk7XG4gIHByaXZhdGUgdWRmMzogYW55O1xuICBwcml2YXRlIHVkZjQ6IGFueTtcbiAgcHJpdmF0ZSBjaGlsZFdpbmRvdzogYW55O1xuICBwcml2YXRlIHJlc3BvbnNlOiBhbnk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNldExvZ2luaWQobG9naW46IHN0cmluZykge1xuICAgIHRoaXMubG9naW5JZCA9IGxvZ2luO1xuICB9XG5cbiAgc2V0UGFzc3dvcmQocGFzc3dvcmQ6IHN0cmluZykge1xuICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgfVxuXG4gIHNldFVSTCh1cmw6IHN0cmluZykge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICB9XG5cbiAgc2V0Q2xpZW50Q29kZShjbGllbnRDb2RlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNsaWVudENvZGUgPSBjbGllbnRDb2RlO1xuICB9XG5cbiAgc2V0UmVxdWVzdEhhc2tLZXkocmVxdWVzdEhhc2hLZXk6IHN0cmluZykge1xuICAgIHRoaXMucmVxdWVzdEhhc2hLZXkgPSByZXF1ZXN0SGFzaEtleTtcbiAgfVxuXG4gIHNldFJlc3BvbnNlSGFzaEtleShyZXNwb25zZUhhc2hLZXk6IHN0cmluZykge1xuICAgIHRoaXMucmVzcG9uc2VIYXNoS2V5ID0gcmVzcG9uc2VIYXNoS2V5O1xuICB9XG5cbiAgc2V0UHJvZElkKHByb2RpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5wcm9kaWQgPSBwcm9kaWQ7XG4gIH1cblxuICBzZXRUeG5JZCh0eG5pZDogc3RyaW5nKSB7XG4gICAgdGhpcy50eG5pZCA9IHR4bmlkO1xuICB9XG5cbiAgc2V0Q3VzdEFjYyhjdXN0YWNjOiBzdHJpbmcpIHtcbiAgICB0aGlzLmN1c3RhY2MgPSBjdXN0YWNjO1xuICB9XG5cbiAgc2V0QW1vdW50KGFtdDogc3RyaW5nKSB7XG4gICAgdGhpcy5hbXQgPSBhbXQ7XG4gIH1cblxuICBzZXRDdXJyZW5jeSh0eG5jdXJyOiBzdHJpbmcpIHtcbiAgICB0aGlzLnR4bmN1cnIgPSB0eG5jdXJyO1xuICB9XG5cbiAgc2V0VHhuVHlwZSh0eG50eXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnR4bnR5cGUgPSB0eG50eXBlO1xuICB9XG5cbiAgc2V0UmV0dXJuVXJsKHJldHVyblVSTDogc3RyaW5nKSB7XG4gICAgdGhpcy5yZXR1cm5VUkwgPSAnaHR0cHM6Ly93d3cuYXRvbXRlY2guaW4vYW5ndWxhci1raXQtaGFuZGxlL3BhcmFtc19yZXNwb25zZS5waHAnO1xuICB9XG5cbiAgc2V0VHhuc0NhbXQodHhuc2NhbXQ6IHN0cmluZykge1xuICAgIHRoaXMudHhuc2NhbXQgPSB0eG5zY2FtdDtcbiAgfVxuXG4gIHNldEN1c3RvbWVyTmFtZSh1ZGYxOiBzdHJpbmcpIHtcbiAgICB0aGlzLnVkZjEgPSB1ZGYxO1xuICB9XG5cbiAgc2V0Q3VzdG9tZXJFbWFpbCh1ZGYyOiBzdHJpbmcpIHtcbiAgICB0aGlzLnVkZjIgPSB1ZGYyO1xuICB9XG5cbiAgc2V0Q3VzdG9tZXJNb2JpbGUodWRmMzogc3RyaW5nKSB7XG4gICAgdGhpcy51ZGYzID0gdWRmMztcbiAgfVxuXG4gIHNldEN1c3RvbWVyQWRkcmVzcyh1ZGY0OiBzdHJpbmcpIHtcbiAgICB0aGlzLnVkZjQgPSB1ZGY0O1xuICB9XG5cbiAgZ2VuZXJhdGVDaGVja3N1bSgpIHtcbiAgICB0aGlzLnNpZ25hdHVyZSA9IHRoaXMubG9naW5JZCArIHRoaXMucGFzc3dvcmQgKyB0aGlzLnR4bnR5cGUgKyB0aGlzLnByb2RpZCArIHRoaXMudHhuaWQgKyB0aGlzLmFtdCArIHRoaXMudHhuY3VycjtcbiAgICByZXR1cm4gaGFzaC5zaGE1MTIuaG1hYyh0aGlzLnJlcXVlc3RIYXNoS2V5LCB0aGlzLnNpZ25hdHVyZSk7XG4gIH1cblxuXG5cbiAgcGF5Tm93KCkge1xuXG4gICAgbGV0IHVybFRvUGF5ID0gdGhpcy51cmw7XG4gICAgdXJsVG9QYXkgKz0gJz9sb2dpbj0nICsgdGhpcy5sb2dpbklkO1xuICAgIHVybFRvUGF5ICs9ICcmcGFzcz0nICsgdGhpcy5wYXNzd29yZDtcbiAgICB1cmxUb1BheSArPSAnJnR0eXBlPScgKyB0aGlzLnR4bnR5cGU7XG4gICAgdXJsVG9QYXkgKz0gJyZwcm9kaWQ9JyArIHRoaXMucHJvZGlkO1xuICAgIHVybFRvUGF5ICs9ICcmYW10PScgKyB0aGlzLmFtdDtcbiAgICB1cmxUb1BheSArPSAnJnR4bmN1cnI9JyArIHRoaXMudHhuY3VycjtcbiAgICB1cmxUb1BheSArPSAnJnR4bnNjYW10PScgKyB0aGlzLnR4bnNjYW10O1xuICAgIHVybFRvUGF5ICs9ICcmY2xpZW50Y29kZT0nICsgYnRvYSh0aGlzLmNsaWVudENvZGUpO1xuICAgIHVybFRvUGF5ICs9ICcmdHhuaWQ9JyArIHRoaXMudHhuaWQ7XG4gICAgdXJsVG9QYXkgKz0gJyZkYXRlPScgKyB0aGlzLmZvcm1hdERhdGUobmV3IERhdGUpO1xuICAgIHVybFRvUGF5ICs9ICcmY3VzdGFjYz0nICsgdGhpcy5jdXN0YWNjO1xuICAgIHVybFRvUGF5ICs9ICcmcnU9JyArIHRoaXMucmV0dXJuVVJMO1xuICAgIHVybFRvUGF5ICs9ICcmc2lnbmF0dXJlPScgKyB0aGlzLmdlbmVyYXRlQ2hlY2tzdW0oKTtcbiAgICB1cmxUb1BheSArPSAnJnVkZjE9JyArIHRoaXMudWRmMTtcbiAgICB1cmxUb1BheSArPSAnJnVkZjI9JyArIHRoaXMudWRmMjtcbiAgICB1cmxUb1BheSArPSAnJnVkZjM9JyArIHRoaXMudWRmMztcbiAgICB1cmxUb1BheSArPSAnJnVkZjQ9JyArIHRoaXMudWRmNDtcbiAgICBjb25zdCB1cmwgPSBlbmNvZGVVUkkodXJsVG9QYXkpO1xuICAgIGxldCByZXMgPSBudWxsO1xuXG4gICAgY29uc3QgbGVmdCA9ICh3aW5kb3cuc2NyZWVuLndpZHRoIC8gMikgLSAoKDEyMDAgLyAyKSArIDEwKTtcbiAgICBjb25zdCB0b3AgPSAod2luZG93LnNjcmVlbi5oZWlnaHQgLyAyKSAtICgoODUwIC8gMikgKyAxMCk7XG5cbiAgICBjb25zdCBjaGlsZFdpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCwgJ0F0b20gUGF5bmV0eicsICdzdGF0dXM9bm8saGVpZ2h0PTYwMCx3aWR0aD0xMjAwLHJlc2l6YWJsZT15ZXMsbGVmdD0nXG4gICAgICArIGxlZnQgKyAnLHRvcD0nICsgdG9wICsgJyxzY3JlZW5YPScgKyBsZWZ0ICsgJyxzY3JlZW5ZPSdcbiAgICAgICsgdG9wICsgJyx0b29sYmFyPW5vLG1lbnViYXI9bm8sc2Nyb2xsYmFycz1ubyxsb2NhdGlvbj1ubyxkaXJlY3Rvcmllcz1ubycpO1xuXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5vcmlnaW4gPT09ICdodHRwczovL3d3dy5hdG9tdGVjaC5pbicpIHtcbiAgICAgICAgICByZXMgPSBlLmRhdGE7XG4gICAgICAgICAgY2hpbGRXaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSwgZmFsc2UpO1xuICAgICAgY29uc3QgaW50ZXJ2YWxJRCA9IHdpbmRvdy5zZXRJbnRlcnZhbChjaGVja1dpbmRvdywgNTAwKTtcbiAgICAgIGZ1bmN0aW9uIGNoZWNrV2luZG93KGU6IGFueSkge1xuICAgICAgICBpZiAoY2hpbGRXaW5kb3cgJiYgY2hpbGRXaW5kb3cuY2xvc2VkKSB7XG4gICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgdGhpcy5yZXNwb25zZSA9IHJlcztcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgICAgICAgZGF0YTogcmVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgc3RhdHVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgZGF0YTogJ3BheW1lbnQgbm90IGNvbXBsZXRlZCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG5cbiAgfVxuXG4gIHZhbGlkYXRlUmVzcG9uc2UobW1wX3R4bjogYW55LCBtZXJfdHhuOiBhbnksIGZfY29kZTogYW55LCBwcm9kOiBhbnksIGRpc2NyaW1pbmF0b3I6IGFueSwgYW10OiBhbnksIGJhbmtfdHhuOiBhbnksIHNpZ25hdHVyZTogYW55KSB7XG4gICAgY29uc3Qgc3RyaW5nX3ZlcmlmeSA9IG1tcF90eG4gKyBtZXJfdHhuICsgZl9jb2RlICsgcHJvZCArIGRpc2NyaW1pbmF0b3IgKyBhbXQgKyBiYW5rX3R4bjtcbiAgICBjb25zdCBzaWcgPSBoYXNoLnNoYTUxMi5obWFjKHRoaXMucmVzcG9uc2VIYXNoS2V5LCBzdHJpbmdfdmVyaWZ5KTtcblxuICAgIGlmIChzaWduYXR1cmUgPT09IHNpZykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3N0YXR1cyc6IHRydWUsXG4gICAgICAgICdtZXNzYWdlJzogJ1NpZ25hdHVyZSBtYXRjaGVkID0gJyArIHNpZyArICcgPSAnICsgdGhpcy5yZXNwb25zZUhhc2hLZXlcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdzdGF0dXMnOiBmYWxzZSxcbiAgICAgICAgJ21lc3NhZ2UnOiAnU2lnbmF0dXJlIG1pc21hdGNoZWQgPSAnICsgc2lnICsgJyA9ICcgKyB0aGlzLnJlc3BvbnNlSGFzaEtleVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBmb3JtYXREYXRlKGRhdGU6IGFueSkge1xuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIGxldCBtb250aEluZGV4ID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IHNlY29uZCA9IGRhdGUuZ2V0U2Vjb25kcygpO1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgICBpZiAobW9udGhJbmRleCA8IDEwKSB7XG4gICAgICBtb250aEluZGV4ID0gJzAnICsgbW9udGhJbmRleDtcbiAgICB9XG4gICAgcmV0dXJuIGRheSArICcvJyArIE51bWJlcihtb250aEluZGV4KSArICcvJyArIHllYXIgKyAnICcgKyBob3VycyArICc6JyArIG1pbnV0ZXMgKyAnOicgKyBzZWNvbmQ7XG4gIH1cblxufVxuIiwiXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGUsIFJvdXRlc30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFByb2Nlc3NQYXltZW50Q29tcG9uZW50IH0gZnJvbSAnLi9Qcm9jZXNzUGF5bWVudC9Qcm9jZXNzUGF5bWVudC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUHJvY2Vzc1BheW1lbnRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbXVxufSlcblxuZXhwb3J0IGNsYXNzIE5nNkF0b21QYXluZXR6TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbImhhc2guc2hhNTEyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0lBbUNFO0tBQ0M7Ozs7SUFHRCww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