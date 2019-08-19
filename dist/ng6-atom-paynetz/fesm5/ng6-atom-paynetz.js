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
        var top = '22%';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmc2LWF0b20tcGF5bmV0ei5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmc2LWF0b20tcGF5bmV0ei9saWIvUHJvY2Vzc1BheW1lbnQvUHJvY2Vzc1BheW1lbnQuY29tcG9uZW50LnRzIiwibmc6Ly9uZzYtYXRvbS1wYXluZXR6L2xpYi9uZzYtYXRvbS1wYXluZXR6Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgaGFzaCBmcm9tICdqcy1zaGE1MTInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY29uZmlnJyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgY29uZmlnIHdvcmtzIVxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvY2Vzc1BheW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgbG9naW5JZDogYW55O1xuICBwcml2YXRlIHBhc3N3b3JkOiBhbnk7XG4gIHByaXZhdGUgdXJsOiBhbnk7XG4gIHByaXZhdGUgY2xpZW50Q29kZTogYW55O1xuICBwcml2YXRlIHJlcXVlc3RIYXNoS2V5OiBhbnk7XG4gIHByaXZhdGUgcmVzcG9uc2VIYXNoS2V5OiBhbnk7XG4gIHByaXZhdGUgcHJvZGlkOiBhbnk7XG4gIHByaXZhdGUgc2lnbmF0dXJlOiBhbnk7XG4gIHByaXZhdGUgYW10OiBhbnk7XG4gIHByaXZhdGUgdHhuY3VycjogYW55O1xuICBwcml2YXRlIHR4bnR5cGU6IGFueTtcbiAgcHJpdmF0ZSB0eG5zY2FtdDogYW55O1xuICBwcml2YXRlIHR4bmlkOiBhbnk7XG4gIHByaXZhdGUgY3VzdGFjYzogYW55O1xuICBwcml2YXRlIHJldHVyblVSTDogYW55O1xuICBwcml2YXRlIHVkZjE6IGFueTtcbiAgcHJpdmF0ZSB1ZGYyOiBhbnk7XG4gIHByaXZhdGUgdWRmMzogYW55O1xuICBwcml2YXRlIHVkZjQ6IGFueTtcbiAgcHJpdmF0ZSBjaGlsZFdpbmRvdzogYW55O1xuICBwcml2YXRlIHJlc3BvbnNlOiBhbnk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNldExvZ2luaWQobG9naW46IHN0cmluZykge1xuICAgIHRoaXMubG9naW5JZCA9IGxvZ2luO1xuICB9XG5cbiAgc2V0UGFzc3dvcmQocGFzc3dvcmQ6IHN0cmluZykge1xuICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgfVxuXG4gIHNldFVSTCh1cmw6IHN0cmluZykge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICB9XG5cbiAgc2V0Q2xpZW50Q29kZShjbGllbnRDb2RlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNsaWVudENvZGUgPSBjbGllbnRDb2RlO1xuICB9XG5cbiAgc2V0UmVxdWVzdEhhc2tLZXkocmVxdWVzdEhhc2hLZXk6IHN0cmluZykge1xuICAgIHRoaXMucmVxdWVzdEhhc2hLZXkgPSByZXF1ZXN0SGFzaEtleTtcbiAgfVxuXG4gIHNldFJlc3BvbnNlSGFzaEtleShyZXNwb25zZUhhc2hLZXk6IHN0cmluZykge1xuICAgIHRoaXMucmVzcG9uc2VIYXNoS2V5ID0gcmVzcG9uc2VIYXNoS2V5O1xuICB9XG5cbiAgc2V0UHJvZElkKHByb2RpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5wcm9kaWQgPSBwcm9kaWQ7XG4gIH1cblxuICBzZXRUeG5JZCh0eG5pZDogc3RyaW5nKSB7XG4gICAgdGhpcy50eG5pZCA9IHR4bmlkO1xuICB9XG5cbiAgc2V0Q3VzdEFjYyhjdXN0YWNjOiBzdHJpbmcpIHtcbiAgICB0aGlzLmN1c3RhY2MgPSBjdXN0YWNjO1xuICB9XG5cbiAgc2V0QW1vdW50KGFtdDogc3RyaW5nKSB7XG4gICAgdGhpcy5hbXQgPSBhbXQ7XG4gIH1cblxuICBzZXRDdXJyZW5jeSh0eG5jdXJyOiBzdHJpbmcpIHtcbiAgICB0aGlzLnR4bmN1cnIgPSB0eG5jdXJyO1xuICB9XG5cbiAgc2V0VHhuVHlwZSh0eG50eXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnR4bnR5cGUgPSB0eG50eXBlO1xuICB9XG5cbiAgc2V0UmV0dXJuVXJsKHJldHVyblVSTDogc3RyaW5nKSB7XG4gICAgdGhpcy5yZXR1cm5VUkwgPSAnaHR0cHM6Ly93d3cuYXRvbXRlY2guaW4vYW5ndWxhci1raXQtaGFuZGxlL3BhcmFtc19yZXNwb25zZS5waHAnO1xuICB9XG5cbiAgc2V0VHhuc0NhbXQodHhuc2NhbXQ6IHN0cmluZykge1xuICAgIHRoaXMudHhuc2NhbXQgPSB0eG5zY2FtdDtcbiAgfVxuXG4gIHNldEN1c3RvbWVyTmFtZSh1ZGYxOiBzdHJpbmcpIHtcbiAgICB0aGlzLnVkZjEgPSB1ZGYxO1xuICB9XG5cbiAgc2V0Q3VzdG9tZXJFbWFpbCh1ZGYyOiBzdHJpbmcpIHtcbiAgICB0aGlzLnVkZjIgPSB1ZGYyO1xuICB9XG5cbiAgc2V0Q3VzdG9tZXJNb2JpbGUodWRmMzogc3RyaW5nKSB7XG4gICAgdGhpcy51ZGYzID0gdWRmMztcbiAgfVxuXG4gIHNldEN1c3RvbWVyQWRkcmVzcyh1ZGY0OiBzdHJpbmcpIHtcbiAgICB0aGlzLnVkZjQgPSB1ZGY0O1xuICB9XG5cbiAgZ2VuZXJhdGVDaGVja3N1bSgpIHtcbiAgICB0aGlzLnNpZ25hdHVyZSA9IHRoaXMubG9naW5JZCArIHRoaXMucGFzc3dvcmQgKyB0aGlzLnR4bnR5cGUgKyB0aGlzLnByb2RpZCArIHRoaXMudHhuaWQgKyB0aGlzLmFtdCArIHRoaXMudHhuY3VycjtcbiAgICByZXR1cm4gaGFzaC5zaGE1MTIuaG1hYyh0aGlzLnJlcXVlc3RIYXNoS2V5LCB0aGlzLnNpZ25hdHVyZSk7XG4gIH1cblxuXG5cbiAgcGF5Tm93KCkge1xuXG4gICAgbGV0IHVybFRvUGF5ID0gdGhpcy51cmw7XG4gICAgdXJsVG9QYXkgKz0gJz9sb2dpbj0nICsgdGhpcy5sb2dpbklkO1xuICAgIHVybFRvUGF5ICs9ICcmcGFzcz0nICsgdGhpcy5wYXNzd29yZDtcbiAgICB1cmxUb1BheSArPSAnJnR0eXBlPScgKyB0aGlzLnR4bnR5cGU7XG4gICAgdXJsVG9QYXkgKz0gJyZwcm9kaWQ9JyArIHRoaXMucHJvZGlkO1xuICAgIHVybFRvUGF5ICs9ICcmYW10PScgKyB0aGlzLmFtdDtcbiAgICB1cmxUb1BheSArPSAnJnR4bmN1cnI9JyArIHRoaXMudHhuY3VycjtcbiAgICB1cmxUb1BheSArPSAnJnR4bnNjYW10PScgKyB0aGlzLnR4bnNjYW10O1xuICAgIHVybFRvUGF5ICs9ICcmY2xpZW50Y29kZT0nICsgYnRvYSh0aGlzLmNsaWVudENvZGUpO1xuICAgIHVybFRvUGF5ICs9ICcmdHhuaWQ9JyArIHRoaXMudHhuaWQ7XG4gICAgdXJsVG9QYXkgKz0gJyZkYXRlPScgKyB0aGlzLmZvcm1hdERhdGUobmV3IERhdGUpO1xuICAgIHVybFRvUGF5ICs9ICcmY3VzdGFjYz0nICsgdGhpcy5jdXN0YWNjO1xuICAgIHVybFRvUGF5ICs9ICcmcnU9JyArIHRoaXMucmV0dXJuVVJMO1xuICAgIHVybFRvUGF5ICs9ICcmc2lnbmF0dXJlPScgKyB0aGlzLmdlbmVyYXRlQ2hlY2tzdW0oKTtcbiAgICB1cmxUb1BheSArPSAnJnVkZjE9JyArIHRoaXMudWRmMTtcbiAgICB1cmxUb1BheSArPSAnJnVkZjI9JyArIHRoaXMudWRmMjtcbiAgICB1cmxUb1BheSArPSAnJnVkZjM9JyArIHRoaXMudWRmMztcbiAgICB1cmxUb1BheSArPSAnJnVkZjQ9JyArIHRoaXMudWRmNDtcbiAgICBjb25zdCB1cmwgPSBlbmNvZGVVUkkodXJsVG9QYXkpO1xuICAgIGxldCByZXMgPSBudWxsO1xuXG4gICAgY29uc3QgbGVmdCA9ICh3aW5kb3cuc2NyZWVuLndpZHRoIC8gMikgLSAoKDEyMDAgLyAyKSArIDEwKTtcbiAgICBjb25zdCB0b3AgPSAnMjIlJztcblxuICAgIGNvbnN0IGNoaWxkV2luZG93ID0gd2luZG93Lm9wZW4odXJsLCAnQXRvbSBQYXluZXR6JywgJ3N0YXR1cz1ubyxoZWlnaHQ9NjAwLHdpZHRoPTEyMDAscmVzaXphYmxlPXllcyxsZWZ0PSdcbiAgICAgICsgbGVmdCArICcsdG9wPScgKyB0b3AgKyAnLHNjcmVlblg9JyArIGxlZnQgKyAnLHNjcmVlblk9J1xuICAgICAgKyB0b3AgKyAnLHRvb2xiYXI9bm8sbWVudWJhcj1ubyxzY3JvbGxiYXJzPW5vLGxvY2F0aW9uPW5vLGRpcmVjdG9yaWVzPW5vJyk7XG5cbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLm9yaWdpbiA9PT0gJ2h0dHBzOi8vd3d3LmF0b210ZWNoLmluJykge1xuICAgICAgICAgIHJlcyA9IGUuZGF0YTtcbiAgICAgICAgICBjaGlsZFdpbmRvdy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9LCBmYWxzZSk7XG4gICAgICBjb25zdCBpbnRlcnZhbElEID0gd2luZG93LnNldEludGVydmFsKGNoZWNrV2luZG93LCA1MDApO1xuICAgICAgZnVuY3Rpb24gY2hlY2tXaW5kb3coZTogYW55KSB7XG4gICAgICAgIGlmIChjaGlsZFdpbmRvdyAmJiBjaGlsZFdpbmRvdy5jbG9zZWQpIHtcbiAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlID0gcmVzO1xuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgICAgICAgICBkYXRhOiByZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICBzdGF0dXM6IGZhbHNlLFxuICAgICAgICAgICAgICBkYXRhOiAncGF5bWVudCBub3QgY29tcGxldGVkJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcblxuICB9XG5cbiAgdmFsaWRhdGVSZXNwb25zZShtbXBfdHhuOiBhbnksIG1lcl90eG46IGFueSwgZl9jb2RlOiBhbnksIHByb2Q6IGFueSwgZGlzY3JpbWluYXRvcjogYW55LCBhbXQ6IGFueSwgYmFua190eG46IGFueSwgc2lnbmF0dXJlOiBhbnkpIHtcbiAgICBjb25zdCBzdHJpbmdfdmVyaWZ5ID0gbW1wX3R4biArIG1lcl90eG4gKyBmX2NvZGUgKyBwcm9kICsgZGlzY3JpbWluYXRvciArIGFtdCArIGJhbmtfdHhuO1xuICAgIGNvbnN0IHNpZyA9IGhhc2guc2hhNTEyLmhtYWModGhpcy5yZXNwb25zZUhhc2hLZXksIHN0cmluZ192ZXJpZnkpO1xuXG4gICAgaWYgKHNpZ25hdHVyZSA9PT0gc2lnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnc3RhdHVzJzogdHJ1ZSxcbiAgICAgICAgJ21lc3NhZ2UnOiAnU2lnbmF0dXJlIG1hdGNoZWQgPSAnICsgc2lnICsgJyA9ICcgKyB0aGlzLnJlc3BvbnNlSGFzaEtleVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3N0YXR1cyc6IGZhbHNlLFxuICAgICAgICAnbWVzc2FnZSc6ICdTaWduYXR1cmUgbWlzbWF0Y2hlZCA9ICcgKyBzaWcgKyAnID0gJyArIHRoaXMucmVzcG9uc2VIYXNoS2V5XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZvcm1hdERhdGUoZGF0ZTogYW55KSB7XG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgbGV0IG1vbnRoSW5kZXggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3Qgc2Vjb25kID0gZGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgY29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgIGlmIChtb250aEluZGV4IDwgMTApIHtcbiAgICAgIG1vbnRoSW5kZXggPSAnMCcgKyBtb250aEluZGV4O1xuICAgIH1cbiAgICByZXR1cm4gZGF5ICsgJy8nICsgTnVtYmVyKG1vbnRoSW5kZXgpICsgJy8nICsgeWVhciArICcgJyArIGhvdXJzICsgJzonICsgbWludXRlcyArICc6JyArIHNlY29uZDtcbiAgfVxuXG59XG4iLCJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlck1vZHVsZSwgUm91dGVzfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUHJvY2Vzc1BheW1lbnRDb21wb25lbnQgfSBmcm9tICcuL1Byb2Nlc3NQYXltZW50L1Byb2Nlc3NQYXltZW50LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQcm9jZXNzUGF5bWVudENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtdXG59KVxuXG5leHBvcnQgY2xhc3MgTmc2QXRvbVBheW5ldHpNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiaGFzaC5zaGE1MTIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7SUFtQ0U7S0FDQzs7OztJQUdELDBDQUFROzs7SUFBUjtLQUNDOzs7OztJQUVELDRDQUFVOzs7O0lBQVYs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