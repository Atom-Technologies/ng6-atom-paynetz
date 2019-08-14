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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmc2LWF0b20tcGF5bmV0ei51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nNi1hdG9tLXBheW5ldHovbGliL1Byb2Nlc3NQYXltZW50L1Byb2Nlc3NQYXltZW50LmNvbXBvbmVudC50cyIsIm5nOi8vbmc2LWF0b20tcGF5bmV0ei9saWIvbmc2LWF0b20tcGF5bmV0ei5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGhhc2ggZnJvbSAnanMtc2hhNTEyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNvbmZpZycsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGNvbmZpZyB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcblxuZXhwb3J0IGNsYXNzIFByb2Nlc3NQYXltZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIGxvZ2luSWQ6IGFueTtcbiAgcHJpdmF0ZSBwYXNzd29yZDogYW55O1xuICBwcml2YXRlIHVybDogYW55O1xuICBwcml2YXRlIGNsaWVudENvZGU6IGFueTtcbiAgcHJpdmF0ZSByZXF1ZXN0SGFzaEtleTogYW55O1xuICBwcml2YXRlIHJlc3BvbnNlSGFzaEtleTogYW55O1xuICBwcml2YXRlIHByb2RpZDogYW55O1xuICBwcml2YXRlIHNpZ25hdHVyZTogYW55O1xuICBwcml2YXRlIGFtdDogYW55O1xuICBwcml2YXRlIHR4bmN1cnI6IGFueTtcbiAgcHJpdmF0ZSB0eG50eXBlOiBhbnk7XG4gIHByaXZhdGUgdHhuc2NhbXQ6IGFueTtcbiAgcHJpdmF0ZSB0eG5pZDogYW55O1xuICBwcml2YXRlIGN1c3RhY2M6IGFueTtcbiAgcHJpdmF0ZSByZXR1cm5VUkw6IGFueTtcbiAgcHJpdmF0ZSB1ZGYxOiBhbnk7XG4gIHByaXZhdGUgdWRmMjogYW55O1xuICBwcml2YXRlIHVkZjM6IGFueTtcbiAgcHJpdmF0ZSB1ZGY0OiBhbnk7XG4gIHByaXZhdGUgY2hpbGRXaW5kb3c6IGFueTtcbiAgcHJpdmF0ZSByZXNwb25zZTogYW55O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBzZXRMb2dpbmlkKGxvZ2luOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvZ2luSWQgPSBsb2dpbjtcbiAgfVxuXG4gIHNldFBhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gIH1cblxuICBzZXRVUkwodXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIHNldENsaWVudENvZGUoY2xpZW50Q29kZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jbGllbnRDb2RlID0gY2xpZW50Q29kZTtcbiAgfVxuXG4gIHNldFJlcXVlc3RIYXNrS2V5KHJlcXVlc3RIYXNoS2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlcXVlc3RIYXNoS2V5ID0gcmVxdWVzdEhhc2hLZXk7XG4gIH1cblxuICBzZXRSZXNwb25zZUhhc2hLZXkocmVzcG9uc2VIYXNoS2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlc3BvbnNlSGFzaEtleSA9IHJlc3BvbnNlSGFzaEtleTtcbiAgfVxuXG4gIHNldFByb2RJZChwcm9kaWQ6IHN0cmluZykge1xuICAgIHRoaXMucHJvZGlkID0gcHJvZGlkO1xuICB9XG5cbiAgc2V0VHhuSWQodHhuaWQ6IHN0cmluZykge1xuICAgIHRoaXMudHhuaWQgPSB0eG5pZDtcbiAgfVxuXG4gIHNldEN1c3RBY2MoY3VzdGFjYzogc3RyaW5nKSB7XG4gICAgdGhpcy5jdXN0YWNjID0gY3VzdGFjYztcbiAgfVxuXG4gIHNldEFtb3VudChhbXQ6IHN0cmluZykge1xuICAgIHRoaXMuYW10ID0gYW10O1xuICB9XG5cbiAgc2V0Q3VycmVuY3kodHhuY3Vycjogc3RyaW5nKSB7XG4gICAgdGhpcy50eG5jdXJyID0gdHhuY3VycjtcbiAgfVxuXG4gIHNldFR4blR5cGUodHhudHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy50eG50eXBlID0gdHhudHlwZTtcbiAgfVxuXG4gIHNldFJldHVyblVybChyZXR1cm5VUkw6IHN0cmluZykge1xuICAgIHRoaXMucmV0dXJuVVJMID0gJ2h0dHBzOi8vd3d3LmF0b210ZWNoLmluL2FuZ3VsYXIta2l0LWhhbmRsZS9wYXJhbXNfcmVzcG9uc2UucGhwJztcbiAgfVxuXG4gIHNldFR4bnNDYW10KHR4bnNjYW10OiBzdHJpbmcpIHtcbiAgICB0aGlzLnR4bnNjYW10ID0gdHhuc2NhbXQ7XG4gIH1cblxuICBzZXRDdXN0b21lck5hbWUodWRmMTogc3RyaW5nKSB7XG4gICAgdGhpcy51ZGYxID0gdWRmMTtcbiAgfVxuXG4gIHNldEN1c3RvbWVyRW1haWwodWRmMjogc3RyaW5nKSB7XG4gICAgdGhpcy51ZGYyID0gdWRmMjtcbiAgfVxuXG4gIHNldEN1c3RvbWVyTW9iaWxlKHVkZjM6IHN0cmluZykge1xuICAgIHRoaXMudWRmMyA9IHVkZjM7XG4gIH1cblxuICBzZXRDdXN0b21lckFkZHJlc3ModWRmNDogc3RyaW5nKSB7XG4gICAgdGhpcy51ZGY0ID0gdWRmNDtcbiAgfVxuXG4gIGdlbmVyYXRlQ2hlY2tzdW0oKSB7XG4gICAgdGhpcy5zaWduYXR1cmUgPSB0aGlzLmxvZ2luSWQgKyB0aGlzLnBhc3N3b3JkICsgdGhpcy50eG50eXBlICsgdGhpcy5wcm9kaWQgKyB0aGlzLnR4bmlkICsgdGhpcy5hbXQgKyB0aGlzLnR4bmN1cnI7XG4gICAgcmV0dXJuIGhhc2guc2hhNTEyLmhtYWModGhpcy5yZXF1ZXN0SGFzaEtleSwgdGhpcy5zaWduYXR1cmUpO1xuICB9XG5cblxuXG4gIHBheU5vdygpIHtcblxuICAgIGxldCB1cmxUb1BheSA9IHRoaXMudXJsO1xuICAgIHVybFRvUGF5ICs9ICc/bG9naW49JyArIHRoaXMubG9naW5JZDtcbiAgICB1cmxUb1BheSArPSAnJnBhc3M9JyArIHRoaXMucGFzc3dvcmQ7XG4gICAgdXJsVG9QYXkgKz0gJyZ0dHlwZT0nICsgdGhpcy50eG50eXBlO1xuICAgIHVybFRvUGF5ICs9ICcmcHJvZGlkPScgKyB0aGlzLnByb2RpZDtcbiAgICB1cmxUb1BheSArPSAnJmFtdD0nICsgdGhpcy5hbXQ7XG4gICAgdXJsVG9QYXkgKz0gJyZ0eG5jdXJyPScgKyB0aGlzLnR4bmN1cnI7XG4gICAgdXJsVG9QYXkgKz0gJyZ0eG5zY2FtdD0nICsgdGhpcy50eG5zY2FtdDtcbiAgICB1cmxUb1BheSArPSAnJmNsaWVudGNvZGU9JyArIGJ0b2EodGhpcy5jbGllbnRDb2RlKTtcbiAgICB1cmxUb1BheSArPSAnJnR4bmlkPScgKyB0aGlzLnR4bmlkO1xuICAgIHVybFRvUGF5ICs9ICcmZGF0ZT0nICsgdGhpcy5mb3JtYXREYXRlKG5ldyBEYXRlKTtcbiAgICB1cmxUb1BheSArPSAnJmN1c3RhY2M9JyArIHRoaXMuY3VzdGFjYztcbiAgICB1cmxUb1BheSArPSAnJnJ1PScgKyB0aGlzLnJldHVyblVSTDtcbiAgICB1cmxUb1BheSArPSAnJnNpZ25hdHVyZT0nICsgdGhpcy5nZW5lcmF0ZUNoZWNrc3VtKCk7XG4gICAgdXJsVG9QYXkgKz0gJyZ1ZGYxPScgKyB0aGlzLnVkZjE7XG4gICAgdXJsVG9QYXkgKz0gJyZ1ZGYyPScgKyB0aGlzLnVkZjI7XG4gICAgdXJsVG9QYXkgKz0gJyZ1ZGYzPScgKyB0aGlzLnVkZjM7XG4gICAgdXJsVG9QYXkgKz0gJyZ1ZGY0PScgKyB0aGlzLnVkZjQ7XG4gICAgY29uc3QgdXJsID0gZW5jb2RlVVJJKHVybFRvUGF5KTtcbiAgICBsZXQgcmVzID0gbnVsbDtcblxuICAgIGNvbnN0IGxlZnQgPSAod2luZG93LnNjcmVlbi53aWR0aCAvIDIpIC0gKCgxMjAwIC8gMikgKyAxMCk7XG4gICAgY29uc3QgdG9wID0gKHdpbmRvdy5zY3JlZW4uaGVpZ2h0IC8gMikgLSAoKDg1MCAvIDIpICsgMTApO1xuXG4gICAgY29uc3QgY2hpbGRXaW5kb3cgPSB3aW5kb3cub3Blbih1cmwsICdBdG9tIFBheW5ldHonLCAnc3RhdHVzPW5vLGhlaWdodD02MDAsd2lkdGg9MTIwMCxyZXNpemFibGU9eWVzLGxlZnQ9J1xuICAgICAgKyBsZWZ0ICsgJyx0b3A9JyArIHRvcCArICcsc2NyZWVuWD0nICsgbGVmdCArICcsc2NyZWVuWT0nXG4gICAgICArIHRvcCArICcsdG9vbGJhcj1ubyxtZW51YmFyPW5vLHNjcm9sbGJhcnM9bm8sbG9jYXRpb249bm8sZGlyZWN0b3JpZXM9bm8nKTtcblxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUub3JpZ2luID09PSAnaHR0cHM6Ly93d3cuYXRvbXRlY2guaW4nKSB7XG4gICAgICAgICAgcmVzID0gZS5kYXRhO1xuICAgICAgICAgIGNoaWxkV2luZG93LmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGZhbHNlKTtcbiAgICAgIGNvbnN0IGludGVydmFsSUQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoY2hlY2tXaW5kb3csIDUwMCk7XG4gICAgICBmdW5jdGlvbiBjaGVja1dpbmRvdyhlOiBhbnkpIHtcbiAgICAgICAgaWYgKGNoaWxkV2luZG93ICYmIGNoaWxkV2luZG93LmNsb3NlZCkge1xuICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2UgPSByZXM7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgICAgICAgIGRhdGE6IHJlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgIHN0YXR1czogZmFsc2UsXG4gICAgICAgICAgICAgIGRhdGE6ICdwYXltZW50IG5vdCBjb21wbGV0ZWQnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9taXNlO1xuXG4gIH1cblxuICB2YWxpZGF0ZVJlc3BvbnNlKG1tcF90eG46IGFueSwgbWVyX3R4bjogYW55LCBmX2NvZGU6IGFueSwgcHJvZDogYW55LCBkaXNjcmltaW5hdG9yOiBhbnksIGFtdDogYW55LCBiYW5rX3R4bjogYW55LCBzaWduYXR1cmU6IGFueSkge1xuICAgIGNvbnN0IHN0cmluZ192ZXJpZnkgPSBtbXBfdHhuICsgbWVyX3R4biArIGZfY29kZSArIHByb2QgKyBkaXNjcmltaW5hdG9yICsgYW10ICsgYmFua190eG47XG4gICAgY29uc3Qgc2lnID0gaGFzaC5zaGE1MTIuaG1hYyh0aGlzLnJlc3BvbnNlSGFzaEtleSwgc3RyaW5nX3ZlcmlmeSk7XG5cbiAgICBpZiAoc2lnbmF0dXJlID09PSBzaWcpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdzdGF0dXMnOiB0cnVlLFxuICAgICAgICAnbWVzc2FnZSc6ICdTaWduYXR1cmUgbWF0Y2hlZCA9ICcgKyBzaWcgKyAnID0gJyArIHRoaXMucmVzcG9uc2VIYXNoS2V5XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnc3RhdHVzJzogZmFsc2UsXG4gICAgICAgICdtZXNzYWdlJzogJ1NpZ25hdHVyZSBtaXNtYXRjaGVkID0gJyArIHNpZyArICcgPSAnICsgdGhpcy5yZXNwb25zZUhhc2hLZXlcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZm9ybWF0RGF0ZShkYXRlOiBhbnkpIHtcbiAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICBsZXQgbW9udGhJbmRleCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBzZWNvbmQgPSBkYXRlLmdldFNlY29uZHMoKTtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBjb25zdCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgaWYgKG1vbnRoSW5kZXggPCAxMCkge1xuICAgICAgbW9udGhJbmRleCA9ICcwJyArIG1vbnRoSW5kZXg7XG4gICAgfVxuICAgIHJldHVybiBkYXkgKyAnLycgKyBOdW1iZXIobW9udGhJbmRleCkgKyAnLycgKyB5ZWFyICsgJyAnICsgaG91cnMgKyAnOicgKyBtaW51dGVzICsgJzonICsgc2Vjb25kO1xuICB9XG5cbn1cbiIsIlxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyTW9kdWxlLCBSb3V0ZXN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQcm9jZXNzUGF5bWVudENvbXBvbmVudCB9IGZyb20gJy4vUHJvY2Vzc1BheW1lbnQvUHJvY2Vzc1BheW1lbnQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1Byb2Nlc3NQYXltZW50Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW11cbn0pXG5cbmV4cG9ydCBjbGFzcyBOZzZBdG9tUGF5bmV0ek1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJoYXNoLnNoYTUxMiIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIiwiQnJvd3Nlck1vZHVsZSJdLCJt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