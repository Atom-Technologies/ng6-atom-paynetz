import { Component, NgModule } from '@angular/core';
import { sha512 } from 'js-sha512';
import { BrowserModule } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ProcessPaymentComponent = /** @class */ (function () {
    function ProcessPaymentComponent() {
        var _this = this;
        this.loginId = '';
        this.password = '';
        this.url = '';
        this.clientCode = '';
        this.requestHashKey = '';
        this.responseHashKey = '';
        this.prodid = '';
        this.signature = '';
        this.amt = '';
        this.txncurr = '';
        this.txntype = '';
        this.txnscamt = '';
        this.txnid = '';
        this.custacc = '';
        this.returnURL = '';
        this.udf1 = '';
        this.udf2 = '';
        this.udf3 = '';
        this.udf4 = '';
        this.get_response = function () {
            return _this.response;
        };
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmc2LWF0b20tcGF5bmV0ei5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmc2LWF0b20tcGF5bmV0ei9saWIvUHJvY2Vzc1BheW1lbnQvUHJvY2Vzc1BheW1lbnQuY29tcG9uZW50LnRzIiwibmc6Ly9uZzYtYXRvbS1wYXluZXR6L2xpYi9uZzYtYXRvbS1wYXluZXR6Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgaGFzaCBmcm9tICdqcy1zaGE1MTInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY29uZmlnJyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgY29uZmlnIHdvcmtzIVxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuXG5cblxuZXhwb3J0IGNsYXNzIFByb2Nlc3NQYXltZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIGxvZ2luSWQgPSAnJztcbiAgcHJpdmF0ZSBwYXNzd29yZCA9ICcnO1xuICBwcml2YXRlIHVybCA9ICcnO1xuICBwcml2YXRlIGNsaWVudENvZGUgPSAnJztcbiAgcHJpdmF0ZSByZXF1ZXN0SGFzaEtleSA9ICcnO1xuICBwcml2YXRlIHJlc3BvbnNlSGFzaEtleSA9ICcnO1xuICBwcml2YXRlIHByb2RpZCA9ICcnO1xuICBwcml2YXRlIHNpZ25hdHVyZSA9ICcnO1xuICBwcml2YXRlIGFtdCA9ICcnO1xuICBwcml2YXRlIHR4bmN1cnIgPSAnJztcbiAgcHJpdmF0ZSB0eG50eXBlID0gJyc7XG4gIHByaXZhdGUgdHhuc2NhbXQgPSAnJztcbiAgcHJpdmF0ZSB0eG5pZCA9ICcnO1xuICBwcml2YXRlIGN1c3RhY2MgPSAnJztcbiAgcHJpdmF0ZSByZXR1cm5VUkwgPSAnJztcbiAgcHJpdmF0ZSB1ZGYxID0gJyc7XG4gIHByaXZhdGUgdWRmMiA9ICcnO1xuICBwcml2YXRlIHVkZjMgPSAnJztcbiAgcHJpdmF0ZSB1ZGY0ID0gJyc7XG4gIHByaXZhdGUgY2hpbGRXaW5kb3c6IGFueTtcbiAgcHJpdmF0ZSByZXNwb25zZTogYW55O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBzZXRMb2dpbmlkKGxvZ2luOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvZ2luSWQgPSBsb2dpbjtcbiAgfVxuXG4gIHNldFBhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gIH1cblxuICBzZXRVUkwodXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIHNldENsaWVudENvZGUoY2xpZW50Q29kZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jbGllbnRDb2RlID0gY2xpZW50Q29kZTtcbiAgfVxuXG4gIHNldFJlcXVlc3RIYXNrS2V5KHJlcXVlc3RIYXNoS2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlcXVlc3RIYXNoS2V5ID0gcmVxdWVzdEhhc2hLZXk7XG4gIH1cblxuICBzZXRSZXNwb25zZUhhc2hLZXkocmVzcG9uc2VIYXNoS2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlc3BvbnNlSGFzaEtleSA9IHJlc3BvbnNlSGFzaEtleTtcbiAgfVxuXG4gIHNldFByb2RJZChwcm9kaWQ6IHN0cmluZykge1xuICAgIHRoaXMucHJvZGlkID0gcHJvZGlkO1xuICB9XG5cbiAgc2V0VHhuSWQodHhuaWQ6IHN0cmluZykge1xuICAgIHRoaXMudHhuaWQgPSB0eG5pZDtcbiAgfVxuXG4gIHNldEN1c3RBY2MoY3VzdGFjYzogc3RyaW5nKSB7XG4gICAgdGhpcy5jdXN0YWNjID0gY3VzdGFjYztcbiAgfVxuXG4gIHNldEFtb3VudChhbXQ6IHN0cmluZykge1xuICAgIHRoaXMuYW10ID0gYW10O1xuICB9XG5cbiAgc2V0Q3VycmVuY3kodHhuY3Vycjogc3RyaW5nKSB7XG4gICAgdGhpcy50eG5jdXJyID0gdHhuY3VycjtcbiAgfVxuXG4gIHNldFR4blR5cGUodHhudHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy50eG50eXBlID0gdHhudHlwZTtcbiAgfVxuXG4gIHNldFJldHVyblVybChyZXR1cm5VUkw6IHN0cmluZykge1xuICAgIHRoaXMucmV0dXJuVVJMID0gJ2h0dHBzOi8vd3d3LmF0b210ZWNoLmluL2FuZ3VsYXIta2l0LWhhbmRsZS9wYXJhbXNfcmVzcG9uc2UucGhwJztcbiAgfVxuXG4gIHNldFR4bnNDYW10KHR4bnNjYW10OiBzdHJpbmcpIHtcbiAgICB0aGlzLnR4bnNjYW10ID0gdHhuc2NhbXQ7XG4gIH1cblxuICBzZXRDdXN0b21lck5hbWUodWRmMTogc3RyaW5nKSB7XG4gICAgdGhpcy51ZGYxID0gdWRmMTtcbiAgfVxuXG4gIHNldEN1c3RvbWVyRW1haWwodWRmMjogc3RyaW5nKSB7XG4gICAgdGhpcy51ZGYyID0gdWRmMjtcbiAgfVxuXG4gIHNldEN1c3RvbWVyTW9iaWxlKHVkZjM6IHN0cmluZykge1xuICAgIHRoaXMudWRmMyA9IHVkZjM7XG4gIH1cblxuICBzZXRDdXN0b21lckFkZHJlc3ModWRmNDogc3RyaW5nKSB7XG4gICAgdGhpcy51ZGY0ID0gdWRmNDtcbiAgfVxuXG4gIGdlbmVyYXRlQ2hlY2tzdW0oKSB7XG4gICAgdGhpcy5zaWduYXR1cmUgPSB0aGlzLmxvZ2luSWQgKyB0aGlzLnBhc3N3b3JkICsgdGhpcy50eG50eXBlICsgdGhpcy5wcm9kaWQgKyB0aGlzLnR4bmlkICsgdGhpcy5hbXQgKyB0aGlzLnR4bmN1cnI7XG4gICAgcmV0dXJuIGhhc2guc2hhNTEyLmhtYWModGhpcy5yZXF1ZXN0SGFzaEtleSwgdGhpcy5zaWduYXR1cmUpO1xuICB9XG5cblxuXG4gIHBheU5vdygpIHtcblxuICAgIGxldCB1cmxUb1BheSA9IHRoaXMudXJsO1xuICAgIHVybFRvUGF5ICs9ICc/bG9naW49JyArIHRoaXMubG9naW5JZDtcbiAgICB1cmxUb1BheSArPSAnJnBhc3M9JyArIHRoaXMucGFzc3dvcmQ7XG4gICAgdXJsVG9QYXkgKz0gJyZ0dHlwZT0nICsgdGhpcy50eG50eXBlO1xuICAgIHVybFRvUGF5ICs9ICcmcHJvZGlkPScgKyB0aGlzLnByb2RpZDtcbiAgICB1cmxUb1BheSArPSAnJmFtdD0nICsgdGhpcy5hbXQ7XG4gICAgdXJsVG9QYXkgKz0gJyZ0eG5jdXJyPScgKyB0aGlzLnR4bmN1cnI7XG4gICAgdXJsVG9QYXkgKz0gJyZ0eG5zY2FtdD0nICsgdGhpcy50eG5zY2FtdDtcbiAgICB1cmxUb1BheSArPSAnJmNsaWVudGNvZGU9JyArIGJ0b2EodGhpcy5jbGllbnRDb2RlKTtcbiAgICB1cmxUb1BheSArPSAnJnR4bmlkPScgKyB0aGlzLnR4bmlkO1xuICAgIHVybFRvUGF5ICs9ICcmZGF0ZT0nICsgdGhpcy5mb3JtYXREYXRlKG5ldyBEYXRlKTtcbiAgICB1cmxUb1BheSArPSAnJmN1c3RhY2M9JyArIHRoaXMuY3VzdGFjYztcbiAgICB1cmxUb1BheSArPSAnJnJ1PScgKyB0aGlzLnJldHVyblVSTDtcbiAgICB1cmxUb1BheSArPSAnJnNpZ25hdHVyZT0nICsgdGhpcy5nZW5lcmF0ZUNoZWNrc3VtKCk7XG4gICAgdXJsVG9QYXkgKz0gJyZ1ZGYxPScgKyB0aGlzLnVkZjE7XG4gICAgdXJsVG9QYXkgKz0gJyZ1ZGYyPScgKyB0aGlzLnVkZjI7XG4gICAgdXJsVG9QYXkgKz0gJyZ1ZGYzPScgKyB0aGlzLnVkZjM7XG4gICAgdXJsVG9QYXkgKz0gJyZ1ZGY0PScgKyB0aGlzLnVkZjQ7XG4gICAgY29uc3QgdXJsID0gZW5jb2RlVVJJKHVybFRvUGF5KTtcbiAgICBsZXQgcmVzID0gbnVsbDtcblxuICAgIGNvbnN0IGxlZnQgPSAod2luZG93LnNjcmVlbi53aWR0aCAvIDIpIC0gKCgxMjAwIC8gMikgKyAxMCk7XG4gICAgY29uc3QgdG9wID0gKHdpbmRvdy5zY3JlZW4uaGVpZ2h0IC8gMikgLSAoKDg1MCAvIDIpICsgMTApO1xuXG4gICAgY29uc3QgY2hpbGRXaW5kb3cgPSB3aW5kb3cub3Blbih1cmwsICdBdG9tIFBheW5ldHonLCAnc3RhdHVzPW5vLGhlaWdodD02MDAsd2lkdGg9MTIwMCxyZXNpemFibGU9eWVzLGxlZnQ9J1xuICAgICAgKyBsZWZ0ICsgJyx0b3A9JyArIHRvcCArICcsc2NyZWVuWD0nICsgbGVmdCArICcsc2NyZWVuWT0nXG4gICAgICArIHRvcCArICcsdG9vbGJhcj1ubyxtZW51YmFyPW5vLHNjcm9sbGJhcnM9bm8sbG9jYXRpb249bm8sZGlyZWN0b3JpZXM9bm8nKTtcbiAgICAvLyBjb25zdCBjaGlsZFdpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCwgJ0F0b20gUGF5bmV0eicsICd3aWR0aD0xMTAwLCBoZWlnaHQ9OTAwJyk7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5vcmlnaW4gPT09ICdodHRwczovL3d3dy5hdG9tdGVjaC5pbicpIHtcbiAgICAgICAgICByZXMgPSBlLmRhdGE7XG4gICAgICAgICAgY2hpbGRXaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSwgZmFsc2UpO1xuICAgICAgY29uc3QgaW50ZXJ2YWxJRCA9IHdpbmRvdy5zZXRJbnRlcnZhbChjaGVja1dpbmRvdywgNTAwKTtcbiAgICAgIGZ1bmN0aW9uIGNoZWNrV2luZG93KGU6IGFueSkge1xuICAgICAgICBpZiAoY2hpbGRXaW5kb3cgJiYgY2hpbGRXaW5kb3cuY2xvc2VkKSB7XG4gICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgdGhpcy5yZXNwb25zZSA9IHJlcztcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgICAgICAgZGF0YTogcmVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgc3RhdHVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgZGF0YTogJ3BheW1lbnQgbm90IGNvbXBsZXRlZCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG5cbiAgfVxuXG4gIGdldF9yZXNwb25zZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5yZXNwb25zZTtcbiAgfVxuXG5cbiAgdmFsaWRhdGVSZXNwb25zZShtbXBfdHhuOiBhbnksIG1lcl90eG46IGFueSwgZl9jb2RlOiBhbnksIHByb2Q6IGFueSwgZGlzY3JpbWluYXRvcjogYW55LCBhbXQ6IGFueSwgYmFua190eG46IGFueSwgc2lnbmF0dXJlOiBhbnkpIHtcbiAgICBjb25zdCBzdHJpbmdfdmVyaWZ5ID0gbW1wX3R4biArIG1lcl90eG4gKyBmX2NvZGUgKyBwcm9kICsgZGlzY3JpbWluYXRvciArIGFtdCArIGJhbmtfdHhuO1xuICAgIGNvbnN0IHNpZyA9IGhhc2guc2hhNTEyLmhtYWModGhpcy5yZXNwb25zZUhhc2hLZXksIHN0cmluZ192ZXJpZnkpO1xuXG4gICAgaWYgKHNpZ25hdHVyZSA9PT0gc2lnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnc3RhdHVzJzogdHJ1ZSxcbiAgICAgICAgJ21lc3NhZ2UnOiAnU2lnbmF0dXJlIG1hdGNoZWQgPSAnICsgc2lnICsgJyA9ICcgKyB0aGlzLnJlc3BvbnNlSGFzaEtleVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3N0YXR1cyc6IGZhbHNlLFxuICAgICAgICAnbWVzc2FnZSc6ICdTaWduYXR1cmUgbWlzbWF0Y2hlZCA9ICcgKyBzaWcgKyAnID0gJyArIHRoaXMucmVzcG9uc2VIYXNoS2V5XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZvcm1hdERhdGUoZGF0ZTogYW55KSB7XG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgbGV0IG1vbnRoSW5kZXggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3Qgc2Vjb25kID0gZGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgY29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgIGlmIChtb250aEluZGV4IDwgMTApIHtcbiAgICAgIG1vbnRoSW5kZXggPSAnMCcgKyBtb250aEluZGV4O1xuICAgIH1cbiAgICByZXR1cm4gZGF5ICsgJy8nICsgTnVtYmVyKG1vbnRoSW5kZXgpICsgJy8nICsgeWVhciArICcgJyArIGhvdXJzICsgJzonICsgbWludXRlcyArICc6JyArIHNlY29uZDtcbiAgfVxuXG59XG4iLCJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlck1vZHVsZSwgUm91dGVzfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUHJvY2Vzc1BheW1lbnRDb21wb25lbnQgfSBmcm9tICcuL1Byb2Nlc3NQYXltZW50L1Byb2Nlc3NQYXltZW50LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQcm9jZXNzUGF5bWVudENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtdXG59KVxuXG5leHBvcnQgY2xhc3MgTmc2QXRvbVBheW5ldHpNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiaGFzaC5zaGE1MTIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7SUFxQ0U7UUFBQSxpQkFDQzt1QkF0QmlCLEVBQUU7d0JBQ0QsRUFBRTttQkFDUCxFQUFFOzBCQUNLLEVBQUU7OEJBQ0UsRUFBRTsrQkFDRCxFQUFFO3NCQUNYLEVBQUU7eUJBQ0MsRUFBRTttQkFDUixFQUFFO3VCQUNFLEVBQUU7dUJBQ0YsRUFBRTt3QkFDRCxFQUFFO3FCQUNMLEVBQUU7dUJBQ0EsRUFBRTt5QkFDQSxFQUFFO29CQUNQLEVBQUU7b0JBQ0YsRUFBRTtvQkFDRixFQUFFO29CQUNGLEVBQUU7NEJBeUpGO1lBQ2IsT0FBTyxLQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3RCO0tBdkpBOzs7O0lBR0QsMENBQVE7OztJQUFSO0tBQ0M7Ozs7O0lBRUQsNENBQVU7Ozs7SUFBVixVQUFXLEtBQWE7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7S0FDdEI7Ozs7O0lBRUQsNkNBQVc7Ozs7SUFBWCxVQUFZLFFBQWdCO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBQzFCOzs7OztJQUVELHdDQUFNOzs7O0lBQU4sVUFBTyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0tBQ2hCOzs7OztJQUVELCtDQUFhOzs7O0lBQWIsVUFBYyxVQUFrQjtRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztLQUM5Qjs7Ozs7SUFFRCxtREFBaUI7Ozs7SUFBakIsVUFBa0IsY0FBc0I7UUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7S0FDdEM7Ozs7O0lBRUQsb0RBQWtCOzs7O0lBQWxCLFVBQW1CLGVBQXVCO1FBQ3hDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0tBQ3hDOzs7OztJ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