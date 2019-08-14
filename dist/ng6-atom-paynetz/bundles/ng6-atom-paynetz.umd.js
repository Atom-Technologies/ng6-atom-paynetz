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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmc2LWF0b20tcGF5bmV0ei51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nNi1hdG9tLXBheW5ldHovbGliL1Byb2Nlc3NQYXltZW50L1Byb2Nlc3NQYXltZW50LmNvbXBvbmVudC50cyIsIm5nOi8vbmc2LWF0b20tcGF5bmV0ei9saWIvbmc2LWF0b20tcGF5bmV0ei5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGhhc2ggZnJvbSAnanMtc2hhNTEyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNvbmZpZycsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGNvbmZpZyB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcblxuXG5cbmV4cG9ydCBjbGFzcyBQcm9jZXNzUGF5bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBsb2dpbklkID0gJyc7XG4gIHByaXZhdGUgcGFzc3dvcmQgPSAnJztcbiAgcHJpdmF0ZSB1cmwgPSAnJztcbiAgcHJpdmF0ZSBjbGllbnRDb2RlID0gJyc7XG4gIHByaXZhdGUgcmVxdWVzdEhhc2hLZXkgPSAnJztcbiAgcHJpdmF0ZSByZXNwb25zZUhhc2hLZXkgPSAnJztcbiAgcHJpdmF0ZSBwcm9kaWQgPSAnJztcbiAgcHJpdmF0ZSBzaWduYXR1cmUgPSAnJztcbiAgcHJpdmF0ZSBhbXQgPSAnJztcbiAgcHJpdmF0ZSB0eG5jdXJyID0gJyc7XG4gIHByaXZhdGUgdHhudHlwZSA9ICcnO1xuICBwcml2YXRlIHR4bnNjYW10ID0gJyc7XG4gIHByaXZhdGUgdHhuaWQgPSAnJztcbiAgcHJpdmF0ZSBjdXN0YWNjID0gJyc7XG4gIHByaXZhdGUgcmV0dXJuVVJMID0gJyc7XG4gIHByaXZhdGUgdWRmMSA9ICcnO1xuICBwcml2YXRlIHVkZjIgPSAnJztcbiAgcHJpdmF0ZSB1ZGYzID0gJyc7XG4gIHByaXZhdGUgdWRmNCA9ICcnO1xuICBwcml2YXRlIGNoaWxkV2luZG93OiBhbnk7XG4gIHByaXZhdGUgcmVzcG9uc2U6IGFueTtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgc2V0TG9naW5pZChsb2dpbjogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2dpbklkID0gbG9naW47XG4gIH1cblxuICBzZXRQYXNzd29yZChwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICB9XG5cbiAgc2V0VVJMKHVybDogc3RyaW5nKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gIH1cblxuICBzZXRDbGllbnRDb2RlKGNsaWVudENvZGU6IHN0cmluZykge1xuICAgIHRoaXMuY2xpZW50Q29kZSA9IGNsaWVudENvZGU7XG4gIH1cblxuICBzZXRSZXF1ZXN0SGFza0tleShyZXF1ZXN0SGFzaEtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5yZXF1ZXN0SGFzaEtleSA9IHJlcXVlc3RIYXNoS2V5O1xuICB9XG5cbiAgc2V0UmVzcG9uc2VIYXNoS2V5KHJlc3BvbnNlSGFzaEtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5yZXNwb25zZUhhc2hLZXkgPSByZXNwb25zZUhhc2hLZXk7XG4gIH1cblxuICBzZXRQcm9kSWQocHJvZGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnByb2RpZCA9IHByb2RpZDtcbiAgfVxuXG4gIHNldFR4bklkKHR4bmlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnR4bmlkID0gdHhuaWQ7XG4gIH1cblxuICBzZXRDdXN0QWNjKGN1c3RhY2M6IHN0cmluZykge1xuICAgIHRoaXMuY3VzdGFjYyA9IGN1c3RhY2M7XG4gIH1cblxuICBzZXRBbW91bnQoYW10OiBzdHJpbmcpIHtcbiAgICB0aGlzLmFtdCA9IGFtdDtcbiAgfVxuXG4gIHNldEN1cnJlbmN5KHR4bmN1cnI6IHN0cmluZykge1xuICAgIHRoaXMudHhuY3VyciA9IHR4bmN1cnI7XG4gIH1cblxuICBzZXRUeG5UeXBlKHR4bnR5cGU6IHN0cmluZykge1xuICAgIHRoaXMudHhudHlwZSA9IHR4bnR5cGU7XG4gIH1cblxuICBzZXRSZXR1cm5VcmwocmV0dXJuVVJMOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJldHVyblVSTCA9ICdodHRwczovL3d3dy5hdG9tdGVjaC5pbi9hbmd1bGFyLWtpdC1oYW5kbGUvcGFyYW1zX3Jlc3BvbnNlLnBocCc7XG4gIH1cblxuICBzZXRUeG5zQ2FtdCh0eG5zY2FtdDogc3RyaW5nKSB7XG4gICAgdGhpcy50eG5zY2FtdCA9IHR4bnNjYW10O1xuICB9XG5cbiAgc2V0Q3VzdG9tZXJOYW1lKHVkZjE6IHN0cmluZykge1xuICAgIHRoaXMudWRmMSA9IHVkZjE7XG4gIH1cblxuICBzZXRDdXN0b21lckVtYWlsKHVkZjI6IHN0cmluZykge1xuICAgIHRoaXMudWRmMiA9IHVkZjI7XG4gIH1cblxuICBzZXRDdXN0b21lck1vYmlsZSh1ZGYzOiBzdHJpbmcpIHtcbiAgICB0aGlzLnVkZjMgPSB1ZGYzO1xuICB9XG5cbiAgc2V0Q3VzdG9tZXJBZGRyZXNzKHVkZjQ6IHN0cmluZykge1xuICAgIHRoaXMudWRmNCA9IHVkZjQ7XG4gIH1cblxuICBnZW5lcmF0ZUNoZWNrc3VtKCkge1xuICAgIHRoaXMuc2lnbmF0dXJlID0gdGhpcy5sb2dpbklkICsgdGhpcy5wYXNzd29yZCArIHRoaXMudHhudHlwZSArIHRoaXMucHJvZGlkICsgdGhpcy50eG5pZCArIHRoaXMuYW10ICsgdGhpcy50eG5jdXJyO1xuICAgIHJldHVybiBoYXNoLnNoYTUxMi5obWFjKHRoaXMucmVxdWVzdEhhc2hLZXksIHRoaXMuc2lnbmF0dXJlKTtcbiAgfVxuXG5cblxuICBwYXlOb3coKSB7XG5cbiAgICBsZXQgdXJsVG9QYXkgPSB0aGlzLnVybDtcbiAgICB1cmxUb1BheSArPSAnP2xvZ2luPScgKyB0aGlzLmxvZ2luSWQ7XG4gICAgdXJsVG9QYXkgKz0gJyZwYXNzPScgKyB0aGlzLnBhc3N3b3JkO1xuICAgIHVybFRvUGF5ICs9ICcmdHR5cGU9JyArIHRoaXMudHhudHlwZTtcbiAgICB1cmxUb1BheSArPSAnJnByb2RpZD0nICsgdGhpcy5wcm9kaWQ7XG4gICAgdXJsVG9QYXkgKz0gJyZhbXQ9JyArIHRoaXMuYW10O1xuICAgIHVybFRvUGF5ICs9ICcmdHhuY3Vycj0nICsgdGhpcy50eG5jdXJyO1xuICAgIHVybFRvUGF5ICs9ICcmdHhuc2NhbXQ9JyArIHRoaXMudHhuc2NhbXQ7XG4gICAgdXJsVG9QYXkgKz0gJyZjbGllbnRjb2RlPScgKyBidG9hKHRoaXMuY2xpZW50Q29kZSk7XG4gICAgdXJsVG9QYXkgKz0gJyZ0eG5pZD0nICsgdGhpcy50eG5pZDtcbiAgICB1cmxUb1BheSArPSAnJmRhdGU9JyArIHRoaXMuZm9ybWF0RGF0ZShuZXcgRGF0ZSk7XG4gICAgdXJsVG9QYXkgKz0gJyZjdXN0YWNjPScgKyB0aGlzLmN1c3RhY2M7XG4gICAgdXJsVG9QYXkgKz0gJyZydT0nICsgdGhpcy5yZXR1cm5VUkw7XG4gICAgdXJsVG9QYXkgKz0gJyZzaWduYXR1cmU9JyArIHRoaXMuZ2VuZXJhdGVDaGVja3N1bSgpO1xuICAgIHVybFRvUGF5ICs9ICcmdWRmMT0nICsgdGhpcy51ZGYxO1xuICAgIHVybFRvUGF5ICs9ICcmdWRmMj0nICsgdGhpcy51ZGYyO1xuICAgIHVybFRvUGF5ICs9ICcmdWRmMz0nICsgdGhpcy51ZGYzO1xuICAgIHVybFRvUGF5ICs9ICcmdWRmND0nICsgdGhpcy51ZGY0O1xuICAgIGNvbnN0IHVybCA9IGVuY29kZVVSSSh1cmxUb1BheSk7XG4gICAgbGV0IHJlcyA9IG51bGw7XG5cbiAgICBjb25zdCBsZWZ0ID0gKHdpbmRvdy5zY3JlZW4ud2lkdGggLyAyKSAtICgoMTIwMCAvIDIpICsgMTApO1xuICAgIGNvbnN0IHRvcCA9ICh3aW5kb3cuc2NyZWVuLmhlaWdodCAvIDIpIC0gKCg4NTAgLyAyKSArIDEwKTtcblxuICAgIGNvbnN0IGNoaWxkV2luZG93ID0gd2luZG93Lm9wZW4odXJsLCAnQXRvbSBQYXluZXR6JywgJ3N0YXR1cz1ubyxoZWlnaHQ9NjAwLHdpZHRoPTEyMDAscmVzaXphYmxlPXllcyxsZWZ0PSdcbiAgICAgICsgbGVmdCArICcsdG9wPScgKyB0b3AgKyAnLHNjcmVlblg9JyArIGxlZnQgKyAnLHNjcmVlblk9J1xuICAgICAgKyB0b3AgKyAnLHRvb2xiYXI9bm8sbWVudWJhcj1ubyxzY3JvbGxiYXJzPW5vLGxvY2F0aW9uPW5vLGRpcmVjdG9yaWVzPW5vJyk7XG4gICAgLy8gY29uc3QgY2hpbGRXaW5kb3cgPSB3aW5kb3cub3Blbih1cmwsICdBdG9tIFBheW5ldHonLCAnd2lkdGg9MTEwMCwgaGVpZ2h0PTkwMCcpO1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUub3JpZ2luID09PSAnaHR0cHM6Ly93d3cuYXRvbXRlY2guaW4nKSB7XG4gICAgICAgICAgcmVzID0gZS5kYXRhO1xuICAgICAgICAgIGNoaWxkV2luZG93LmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGZhbHNlKTtcbiAgICAgIGNvbnN0IGludGVydmFsSUQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoY2hlY2tXaW5kb3csIDUwMCk7XG4gICAgICBmdW5jdGlvbiBjaGVja1dpbmRvdyhlOiBhbnkpIHtcbiAgICAgICAgaWYgKGNoaWxkV2luZG93ICYmIGNoaWxkV2luZG93LmNsb3NlZCkge1xuICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2UgPSByZXM7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgICAgICAgIGRhdGE6IHJlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgIHN0YXR1czogZmFsc2UsXG4gICAgICAgICAgICAgIGRhdGE6ICdwYXltZW50IG5vdCBjb21wbGV0ZWQnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9taXNlO1xuXG4gIH1cblxuICBnZXRfcmVzcG9uc2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMucmVzcG9uc2U7XG4gIH1cblxuXG4gIHZhbGlkYXRlUmVzcG9uc2UobW1wX3R4bjogYW55LCBtZXJfdHhuOiBhbnksIGZfY29kZTogYW55LCBwcm9kOiBhbnksIGRpc2NyaW1pbmF0b3I6IGFueSwgYW10OiBhbnksIGJhbmtfdHhuOiBhbnksIHNpZ25hdHVyZTogYW55KSB7XG4gICAgY29uc3Qgc3RyaW5nX3ZlcmlmeSA9IG1tcF90eG4gKyBtZXJfdHhuICsgZl9jb2RlICsgcHJvZCArIGRpc2NyaW1pbmF0b3IgKyBhbXQgKyBiYW5rX3R4bjtcbiAgICBjb25zdCBzaWcgPSBoYXNoLnNoYTUxMi5obWFjKHRoaXMucmVzcG9uc2VIYXNoS2V5LCBzdHJpbmdfdmVyaWZ5KTtcblxuICAgIGlmIChzaWduYXR1cmUgPT09IHNpZykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3N0YXR1cyc6IHRydWUsXG4gICAgICAgICdtZXNzYWdlJzogJ1NpZ25hdHVyZSBtYXRjaGVkID0gJyArIHNpZyArICcgPSAnICsgdGhpcy5yZXNwb25zZUhhc2hLZXlcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdzdGF0dXMnOiBmYWxzZSxcbiAgICAgICAgJ21lc3NhZ2UnOiAnU2lnbmF0dXJlIG1pc21hdGNoZWQgPSAnICsgc2lnICsgJyA9ICcgKyB0aGlzLnJlc3BvbnNlSGFzaEtleVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBmb3JtYXREYXRlKGRhdGU6IGFueSkge1xuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIGxldCBtb250aEluZGV4ID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IHNlY29uZCA9IGRhdGUuZ2V0U2Vjb25kcygpO1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgICBpZiAobW9udGhJbmRleCA8IDEwKSB7XG4gICAgICBtb250aEluZGV4ID0gJzAnICsgbW9udGhJbmRleDtcbiAgICB9XG4gICAgcmV0dXJuIGRheSArICcvJyArIE51bWJlcihtb250aEluZGV4KSArICcvJyArIHllYXIgKyAnICcgKyBob3VycyArICc6JyArIG1pbnV0ZXMgKyAnOicgKyBzZWNvbmQ7XG4gIH1cblxufVxuIiwiXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGUsIFJvdXRlc30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFByb2Nlc3NQYXltZW50Q29tcG9uZW50IH0gZnJvbSAnLi9Qcm9jZXNzUGF5bWVudC9Qcm9jZXNzUGF5bWVudC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUHJvY2Vzc1BheW1lbnRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbXVxufSlcblxuZXhwb3J0IGNsYXNzIE5nNkF0b21QYXluZXR6TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbImhhc2guc2hhNTEyIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiLCJCcm93c2VyTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFxQ0U7WUFBQSxpQkFDQzsyQkF0QmlCLEVBQUU7NEJBQ0QsRUFBRTt1QkFDUCxFQUFFOzhCQUNLLEVBQUU7a0NBQ0UsRUFBRTttQ0FDRCxFQUFFOzBCQUNYLEVBQUU7NkJBQ0MsRUFBRTt1QkFDUixFQUFFOzJCQUNFLEVBQUU7MkJBQ0YsRUFBRTs0QkFDRCxFQUFFO3lCQUNMLEVBQUU7MkJBQ0EsRUFBRTs2QkFDQSxFQUFFO3dCQUNQLEVBQUU7d0JBQ0YsRUFBRTt3QkFDRixFQUFFO3dCQUNGLEVBQUU7Z0NBeUpGO2dCQUNiLE9BQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQzthQUN0QjtTQXZKQTs7OztRQUdELDBDQUFROzs7WUFBUjthQUNDOzs7OztRQUVELDRDQUFVOzs7O1lBQVYsVUFBVyxLQUFhO2dCQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN0Qjs7Ozs7UUFFRCw2Q0FBVzs7OztZQUFYLFVBQVksUUFBZ0I7Z0JBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2FBQzFCOzs7OztRQUVELHdDQUFNOzs7O1lBQU4sVUFBTyxHQUFXO2dCQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzthQUNoQjs7Ozs7UUFFRCwrQ0FBYTs7OztZQUFiLFVBQWMsVUFBa0I7Z0JBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO2FBQzlCOzs7OztRQUVELG1EQUFpQjs7OztZQUFqQixVQUFrQixjQUFzQjtnQkFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7YUFDdEM7Ozs7O1FBRUQsb0RBQWtCOzs7O1lBQWxCLFVBQW1CLGVB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