(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('js-sha512'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('ng6-atom-paynetz', ['exports', '@angular/core', 'js-sha512', '@angular/platform-browser'], factory) :
    (factory((global['ng6-atom-paynetz'] = {}),global.ng.core,null,global.ng.platformBrowser));
}(this, (function (exports,core,hash,platformBrowser) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ProcessPaymentComponent = (function () {
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
                return hash.sha512.hmac(this.requestHashKey, this.signature);
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
                var sig = hash.sha512.hmac(this.responseHashKey, string_verify);
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
            { type: core.Component, args: [{
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
    var Ng6AtomPaynetzModule = (function () {
        function Ng6AtomPaynetzModule() {
        }
        Ng6AtomPaynetzModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            platformBrowser.BrowserModule,
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

    exports.Ng6AtomPaynetzModule = Ng6AtomPaynetzModule;
    exports.ProcessPaymentComponent = ProcessPaymentComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmc2LWF0b20tcGF5bmV0ei51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nNi1hdG9tLXBheW5ldHovbGliL1Byb2Nlc3NQYXltZW50L1Byb2Nlc3NQYXltZW50LmNvbXBvbmVudC50cyIsIm5nOi8vbmc2LWF0b20tcGF5bmV0ei9saWIvbmc2LWF0b20tcGF5bmV0ei5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGhhc2ggZnJvbSAnanMtc2hhNTEyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNvbmZpZycsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGNvbmZpZyB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcblxuZXhwb3J0IGNsYXNzIFByb2Nlc3NQYXltZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIGxvZ2luSWQ6IGFueTtcbiAgcHJpdmF0ZSBwYXNzd29yZDogYW55O1xuICBwcml2YXRlIHVybDogYW55O1xuICBwcml2YXRlIGNsaWVudENvZGU6IGFueTtcbiAgcHJpdmF0ZSByZXF1ZXN0SGFzaEtleTogYW55O1xuICBwcml2YXRlIHJlc3BvbnNlSGFzaEtleTogYW55O1xuICBwcml2YXRlIHByb2RpZDogYW55O1xuICBwcml2YXRlIHNpZ25hdHVyZTogYW55O1xuICBwcml2YXRlIGFtdDogYW55O1xuICBwcml2YXRlIHR4bmN1cnI6IGFueTtcbiAgcHJpdmF0ZSB0eG50eXBlOiBhbnk7XG4gIHByaXZhdGUgdHhuc2NhbXQ6IGFueTtcbiAgcHJpdmF0ZSB0eG5pZDogYW55O1xuICBwcml2YXRlIGN1c3RhY2M6IGFueTtcbiAgcHJpdmF0ZSByZXR1cm5VUkw6IGFueTtcbiAgcHJpdmF0ZSB1ZGYxOiBhbnk7XG4gIHByaXZhdGUgdWRmMjogYW55O1xuICBwcml2YXRlIHVkZjM6IGFueTtcbiAgcHJpdmF0ZSB1ZGY0OiBhbnk7XG4gIHByaXZhdGUgY2hpbGRXaW5kb3c6IGFueTtcbiAgcHJpdmF0ZSByZXNwb25zZTogYW55O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBzZXRMb2dpbmlkKGxvZ2luOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvZ2luSWQgPSBsb2dpbjtcbiAgfVxuXG4gIHNldFBhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gIH1cblxuICBzZXRVUkwodXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIHNldENsaWVudENvZGUoY2xpZW50Q29kZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jbGllbnRDb2RlID0gY2xpZW50Q29kZTtcbiAgfVxuXG4gIHNldFJlcXVlc3RIYXNrS2V5KHJlcXVlc3RIYXNoS2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlcXVlc3RIYXNoS2V5ID0gcmVxdWVzdEhhc2hLZXk7XG4gIH1cblxuICBzZXRSZXNwb25zZUhhc2hLZXkocmVzcG9uc2VIYXNoS2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlc3BvbnNlSGFzaEtleSA9IHJlc3BvbnNlSGFzaEtleTtcbiAgfVxuXG4gIHNldFByb2RJZChwcm9kaWQ6IHN0cmluZykge1xuICAgIHRoaXMucHJvZGlkID0gcHJvZGlkO1xuICB9XG5cbiAgc2V0VHhuSWQodHhuaWQ6IHN0cmluZykge1xuICAgIHRoaXMudHhuaWQgPSB0eG5pZDtcbiAgfVxuXG4gIHNldEN1c3RBY2MoY3VzdGFjYzogc3RyaW5nKSB7XG4gICAgdGhpcy5jdXN0YWNjID0gY3VzdGFjYztcbiAgfVxuXG4gIHNldEFtb3VudChhbXQ6IHN0cmluZykge1xuICAgIHRoaXMuYW10ID0gYW10O1xuICB9XG5cbiAgc2V0Q3VycmVuY3kodHhuY3Vycjogc3RyaW5nKSB7XG4gICAgdGhpcy50eG5jdXJyID0gdHhuY3VycjtcbiAgfVxuXG4gIHNldFR4blR5cGUodHhudHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy50eG50eXBlID0gdHhudHlwZTtcbiAgfVxuXG4gIHNldFJldHVyblVybChyZXR1cm5VUkw6IHN0cmluZykge1xuICAgIHRoaXMucmV0dXJuVVJMID0gJ2h0dHBzOi8vd3d3LmF0b210ZWNoLmluL2FuZ3VsYXIta2l0LWhhbmRsZS9wYXJhbXNfcmVzcG9uc2UucGhwJztcbiAgfVxuXG4gIHNldFR4bnNDYW10KHR4bnNjYW10OiBzdHJpbmcpIHtcbiAgICB0aGlzLnR4bnNjYW10ID0gdHhuc2NhbXQ7XG4gIH1cblxuICBzZXRDdXN0b21lck5hbWUodWRmMTogc3RyaW5nKSB7XG4gICAgdGhpcy51ZGYxID0gdWRmMTtcbiAgfVxuXG4gIHNldEN1c3RvbWVyRW1haWwodWRmMjogc3RyaW5nKSB7XG4gICAgdGhpcy51ZGYyID0gdWRmMjtcbiAgfVxuXG4gIHNldEN1c3RvbWVyTW9iaWxlKHVkZjM6IHN0cmluZykge1xuICAgIHRoaXMudWRmMyA9IHVkZjM7XG4gIH1cblxuICBzZXRDdXN0b21lckFkZHJlc3ModWRmNDogc3RyaW5nKSB7XG4gICAgdGhpcy51ZGY0ID0gdWRmNDtcbiAgfVxuXG4gIGdlbmVyYXRlQ2hlY2tzdW0oKSB7XG4gICAgdGhpcy5zaWduYXR1cmUgPSB0aGlzLmxvZ2luSWQgKyB0aGlzLnBhc3N3b3JkICsgdGhpcy50eG50eXBlICsgdGhpcy5wcm9kaWQgKyB0aGlzLnR4bmlkICsgdGhpcy5hbXQgKyB0aGlzLnR4bmN1cnI7XG4gICAgcmV0dXJuIGhhc2guc2hhNTEyLmhtYWModGhpcy5yZXF1ZXN0SGFzaEtleSwgdGhpcy5zaWduYXR1cmUpO1xuICB9XG5cblxuXG4gIHBheU5vdygpIHtcblxuICAgIGxldCB1cmxUb1BheSA9IHRoaXMudXJsO1xuICAgIHVybFRvUGF5ICs9ICc/bG9naW49JyArIHRoaXMubG9naW5JZDtcbiAgICB1cmxUb1BheSArPSAnJnBhc3M9JyArIHRoaXMucGFzc3dvcmQ7XG4gICAgdXJsVG9QYXkgKz0gJyZ0dHlwZT0nICsgdGhpcy50eG50eXBlO1xuICAgIHVybFRvUGF5ICs9ICcmcHJvZGlkPScgKyB0aGlzLnByb2RpZDtcbiAgICB1cmxUb1BheSArPSAnJmFtdD0nICsgdGhpcy5hbXQ7XG4gICAgdXJsVG9QYXkgKz0gJyZ0eG5jdXJyPScgKyB0aGlzLnR4bmN1cnI7XG4gICAgdXJsVG9QYXkgKz0gJyZ0eG5zY2FtdD0nICsgdGhpcy50eG5zY2FtdDtcbiAgICB1cmxUb1BheSArPSAnJmNsaWVudGNvZGU9JyArIGJ0b2EodGhpcy5jbGllbnRDb2RlKTtcbiAgICB1cmxUb1BheSArPSAnJnR4bmlkPScgKyB0aGlzLnR4bmlkO1xuICAgIHVybFRvUGF5ICs9ICcmZGF0ZT0nICsgdGhpcy5mb3JtYXREYXRlKG5ldyBEYXRlKTtcbiAgICB1cmxUb1BheSArPSAnJmN1c3RhY2M9JyArIHRoaXMuY3VzdGFjYztcbiAgICB1cmxUb1BheSArPSAnJnJ1PScgKyB0aGlzLnJldHVyblVSTDtcbiAgICB1cmxUb1BheSArPSAnJnNpZ25hdHVyZT0nICsgdGhpcy5nZW5lcmF0ZUNoZWNrc3VtKCk7XG4gICAgdXJsVG9QYXkgKz0gJyZ1ZGYxPScgKyB0aGlzLnVkZjE7XG4gICAgdXJsVG9QYXkgKz0gJyZ1ZGYyPScgKyB0aGlzLnVkZjI7XG4gICAgdXJsVG9QYXkgKz0gJyZ1ZGYzPScgKyB0aGlzLnVkZjM7XG4gICAgdXJsVG9QYXkgKz0gJyZ1ZGY0PScgKyB0aGlzLnVkZjQ7XG4gICAgY29uc3QgdXJsID0gZW5jb2RlVVJJKHVybFRvUGF5KTtcbiAgICBsZXQgcmVzID0gbnVsbDtcblxuICAgIGNvbnN0IGxlZnQgPSAod2luZG93LnNjcmVlbi53aWR0aCAvIDIpIC0gKCgxMjAwIC8gMikgKyAxMCk7XG4gICAgY29uc3QgdG9wID0gJzIyJSc7XG5cbiAgICBjb25zdCBjaGlsZFdpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCwgJ0F0b20gUGF5bmV0eicsICdzdGF0dXM9bm8saGVpZ2h0PTYwMCx3aWR0aD0xMjAwLHJlc2l6YWJsZT15ZXMsbGVmdD0nXG4gICAgICArIGxlZnQgKyAnLHRvcD0nICsgdG9wICsgJyxzY3JlZW5YPScgKyBsZWZ0ICsgJyxzY3JlZW5ZPSdcbiAgICAgICsgdG9wICsgJyx0b29sYmFyPW5vLG1lbnViYXI9bm8sc2Nyb2xsYmFycz1ubyxsb2NhdGlvbj1ubyxkaXJlY3Rvcmllcz1ubycpO1xuXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5vcmlnaW4gPT09ICdodHRwczovL3d3dy5hdG9tdGVjaC5pbicpIHtcbiAgICAgICAgICByZXMgPSBlLmRhdGE7XG4gICAgICAgICAgY2hpbGRXaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSwgZmFsc2UpO1xuICAgICAgY29uc3QgaW50ZXJ2YWxJRCA9IHdpbmRvdy5zZXRJbnRlcnZhbChjaGVja1dpbmRvdywgNTAwKTtcbiAgICAgIGZ1bmN0aW9uIGNoZWNrV2luZG93KGU6IGFueSkge1xuICAgICAgICBpZiAoY2hpbGRXaW5kb3cgJiYgY2hpbGRXaW5kb3cuY2xvc2VkKSB7XG4gICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgdGhpcy5yZXNwb25zZSA9IHJlcztcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgICAgICAgZGF0YTogcmVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgc3RhdHVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgZGF0YTogJ3BheW1lbnQgbm90IGNvbXBsZXRlZCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG5cbiAgfVxuXG4gIHZhbGlkYXRlUmVzcG9uc2UobW1wX3R4bjogYW55LCBtZXJfdHhuOiBhbnksIGZfY29kZTogYW55LCBwcm9kOiBhbnksIGRpc2NyaW1pbmF0b3I6IGFueSwgYW10OiBhbnksIGJhbmtfdHhuOiBhbnksIHNpZ25hdHVyZTogYW55KSB7XG4gICAgY29uc3Qgc3RyaW5nX3ZlcmlmeSA9IG1tcF90eG4gKyBtZXJfdHhuICsgZl9jb2RlICsgcHJvZCArIGRpc2NyaW1pbmF0b3IgKyBhbXQgKyBiYW5rX3R4bjtcbiAgICBjb25zdCBzaWcgPSBoYXNoLnNoYTUxMi5obWFjKHRoaXMucmVzcG9uc2VIYXNoS2V5LCBzdHJpbmdfdmVyaWZ5KTtcblxuICAgIGlmIChzaWduYXR1cmUgPT09IHNpZykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3N0YXR1cyc6IHRydWUsXG4gICAgICAgICdtZXNzYWdlJzogJ1NpZ25hdHVyZSBtYXRjaGVkID0gJyArIHNpZyArICcgPSAnICsgdGhpcy5yZXNwb25zZUhhc2hLZXlcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdzdGF0dXMnOiBmYWxzZSxcbiAgICAgICAgJ21lc3NhZ2UnOiAnU2lnbmF0dXJlIG1pc21hdGNoZWQgPSAnICsgc2lnICsgJyA9ICcgKyB0aGlzLnJlc3BvbnNlSGFzaEtleVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBmb3JtYXREYXRlKGRhdGU6IGFueSkge1xuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIGxldCBtb250aEluZGV4ID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IHNlY29uZCA9IGRhdGUuZ2V0U2Vjb25kcygpO1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgICBpZiAobW9udGhJbmRleCA8IDEwKSB7XG4gICAgICBtb250aEluZGV4ID0gJzAnICsgbW9udGhJbmRleDtcbiAgICB9XG4gICAgcmV0dXJuIGRheSArICcvJyArIE51bWJlcihtb250aEluZGV4KSArICcvJyArIHllYXIgKyAnICcgKyBob3VycyArICc6JyArIG1pbnV0ZXMgKyAnOicgKyBzZWNvbmQ7XG4gIH1cblxufVxuIiwiXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGUsIFJvdXRlc30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFByb2Nlc3NQYXltZW50Q29tcG9uZW50IH0gZnJvbSAnLi9Qcm9jZXNzUGF5bWVudC9Qcm9jZXNzUGF5bWVudC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUHJvY2Vzc1BheW1lbnRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbXVxufSlcblxuZXhwb3J0IGNsYXNzIE5nNkF0b21QYXluZXR6TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbImhhc2guc2hhNTEyIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiLCJCcm93c2VyTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFtQ0U7U0FDQzs7OztRQUdELDBDQUFROzs7WUFBUjthQUNDOzs7OztRQUVELDRDQUFVOzs7O1lBQVYsVUFBVyxLQUFhO2dCQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN0Qjs7Ozs7UUFFRCw2Q0FBVzs7OztZQUFYLFVBQVksUUFBZ0I7Z0JBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2FBQzFCOzs7OztRQUVELHdDQUFNOzs7O1lBQU4sVUFBTyxHQUFXO2dCQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzthQUNoQjs7Ozs7UUFFRCwrQ0FBYTs7OztZQUFiLFVBQWMsVUFBa0I7Z0JBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO2FBQzlCOzs7OztRQUVELG1EQUFpQjs7OztZQUFqQixVQUFrQixjQUFzQjtnQkFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7YUFDdEM7Ozs7O1FBRUQsb0RBQWtCOzs7O1lBQWxCLFVBQW1CLGVBQXVCO2dCQUN4QyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQzthQUN4Qzs7Ozs7UUFFRCwyQ0FBUzs7OztZQUFULFVBQVUsTUFBYztnQkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7YUFDdEI7Ozs7O1FBRUQsMENBQVE7Ozs7WUFBUixVQUFTLEtBQWE7Z0JBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQ3BCOzs7OztRQUVELDRDQUFVOzs7O1lBQVYsVUFBVyxPQUFlO2dCQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzthQUN4Qjs7Ozs7UUFFRCwyQ0FBUzs7OztZQUFULFVBQVUsR0FBVztnQkFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7YUFDaEI7Ozs7O1FBRUQsNkNBQVc7Ozs7WUFBWCxVQUFZLE9BQWU7Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2FBQ3hCOzs7OztRQUVELDRDQUFVOzs7O1lBQVYsVUFBVyxPQUFlO2dCQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzthQUN4Qjs7Ozs7UUFFRCw4Q0FBWTs7OztZQUFaLFVBQWEsU0FBaUI7Z0JBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsZ0VBQWdFLENBQUM7YUFDbkY7Ozs7O1FBRUQsNkNBQVc7Ozs7WUFBWCxVQUFZLFFBQWdCO2dCQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzthQUMxQjs7Ozs7UUFFRCxpREFBZTs7OztZQUFmLFVBQWdCLElBQVk7Z0JBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ2xCOzs7OztRQUVELGtEQUFnQjs7OztZQUFoQixVQUFpQixJQUFZO2dCQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzthQUNsQjs7Ozs7UUFFRCxtREFBaUI7Ozs7WUFBakIsVUFBa0IsSUFBWTtnQkFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7YUFDbEI7Ozs7O1FBRUQsb0RBQWtCOzs7O1lBQWxCLFVBQW1CLElBQVk7Z0JBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ2xCOzs7O1FBRUQsa0RBQWdCOzs7WUFBaEI7Z0JBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNsSCxPQUFPQSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzlEOzs7O1FBSUQsd0NBQU07OztZQUFOOztnQkFFRSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUN4QixRQUFRLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3JDLFFBQVEsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDckMsUUFBUSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNyQyxRQUFRLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ3JDLFFBQVEsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDL0IsUUFBUSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUN2QyxRQUFRLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3pDLFFBQVEsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbkQsUUFBUSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNuQyxRQUFRLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztnQkFDakQsUUFBUSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUN2QyxRQUFRLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ3BDLFFBQVEsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQ3BELFFBQVEsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDakMsUUFBUSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNqQyxRQUFRLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ2pDLFFBQVEsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzs7Z0JBQ2pDLElBQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Z0JBQ2hDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQzs7Z0JBRWYsSUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDOztnQkFDM0QsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDOztnQkFFbEIsSUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsY0FBYyxFQUFFLHFEQUFxRDtzQkFDdEcsSUFBSSxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsV0FBVyxHQUFHLElBQUksR0FBRyxXQUFXO3NCQUN2RCxHQUFHLEdBQUcsaUVBQWlFLENBQUMsQ0FBQzs7Z0JBRTdFLElBQU0sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztvQkFDakMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUM7d0JBQzVDLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyx5QkFBeUIsRUFBRTs0QkFDMUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7NEJBQ2IsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO3lCQUNyQjtxQkFDRixFQUFFLEtBQUssQ0FBQyxDQUFDOztvQkFDVixJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQzs7Ozs7b0JBQ3hELHFCQUFxQixDQUFNO3dCQUN6QixJQUFJLFdBQVcsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFOzRCQUNyQyxJQUFJLEdBQUcsRUFBRTtnQ0FDUCxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztnQ0FDcEIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQ0FDakMsT0FBTyxDQUFDO29DQUNOLE1BQU0sRUFBRSxJQUFJO29DQUNaLElBQUksRUFBRSxHQUFHO2lDQUNWLENBQUMsQ0FBQzs2QkFDSjtpQ0FBTTtnQ0FDTCxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dDQUNqQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dDQUNqQyxPQUFPLENBQUM7b0NBQ04sTUFBTSxFQUFFLEtBQUs7b0NBQ2IsSUFBSSxFQUFFLHVCQUF1QjtpQ0FDOUIsQ0FBQyxDQUFDOzZCQUNKO3lCQUVGO3FCQUNGO2lCQUNGLENBQUMsQ0FBQztnQkFFSCxPQUFPLE9BQU8sQ0FBQzthQUVoQjs7Ozs7Ozs7Ozs7O1FBRUQsa0RBQWdCOzs7Ozs7Ozs7OztZQUFoQixVQUFpQixPQUFZLEVBQUUsT0FBWSxFQUFFLE1BQVcsRUFBRSxJQUFTLEVBQUUsYUFBa0IsRUFBRSxHQUFRLEVBQUUsUUFBYSxFQUFFLFNBQWM7O2dCQUM5SCxJQUFNLGFBQWEsR0FBRyxPQUFPLEdBQUcsT0FBTyxHQUFHLE1BQU0sR0FBRyxJQUFJLEdBQUcsYUFBYSxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUM7O2dCQUN6RixJQUFNLEdBQUcsR0FBR0EsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUVsRSxJQUFJLFNBQVMsS0FBSyxHQUFHLEVBQUU7b0JBQ3JCLE9BQU87d0JBQ0wsUUFBUSxFQUFFLElBQUk7d0JBQ2QsU0FBUyxFQUFFLHNCQUFzQixHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWU7cUJBQ3ZFLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsT0FBTzt3QkFDTCxRQUFRLEVBQUUsS0FBSzt3QkFDZixTQUFTLEVBQUUseUJBQXlCLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZTtxQkFDMUUsQ0FBQztpQkFDSDthQUNGOzs7OztRQUVELDRDQUFVOzs7O1lBQVYsVUFBVyxJQUFTOztnQkFDbEIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztnQkFDM0IsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQzs7Z0JBQ3JDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7Z0JBQ2hDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7Z0JBQ2pDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7Z0JBQzlCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbEMsSUFBSSxVQUFVLEdBQUcsRUFBRSxFQUFFO29CQUNuQixVQUFVLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQztpQkFDL0I7Z0JBQ0QsT0FBTyxHQUFHLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO2FBQ2pHOztvQkFsTkZDLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLDhCQUdYO3dCQUNDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztxQkFDYjs7OztzQ0FWRDs7Ozs7OztBQ0NBOzs7O29CQUtDQyxhQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQQyw2QkFBYTt5QkFDZDt3QkFDRCxZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzt3QkFDdkMsT0FBTyxFQUFFLEVBQUU7cUJBQ1o7O21DQVpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=