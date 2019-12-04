(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('js-sha512'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('ng6-atom-paynetz', ['exports', '@angular/core', 'js-sha512', '@angular/platform-browser'], factory) :
    (factory((global['ng6-atom-paynetz'] = {}),global.ng.core,null,global.ng.platformBrowser));
}(this, (function (exports,core,hash,platformBrowser) { 'use strict';

    var ProcessPaymentComponent = (function () {
        function ProcessPaymentComponent() {
            this.mdd = null;
            this.bankId = null;
        }
        ProcessPaymentComponent.prototype.ngOnInit = function () {
        };
        ProcessPaymentComponent.prototype.setLoginid = function (login) {
            this.loginId = login;
        };
        ProcessPaymentComponent.prototype.setPassword = function (password) {
            this.password = password;
        };
        ProcessPaymentComponent.prototype.setURL = function (url) {
            this.url = url;
        };
        ProcessPaymentComponent.prototype.setClientCode = function (clientCode) {
            this.clientCode = clientCode;
        };
        ProcessPaymentComponent.prototype.setRequestHaskKey = function (requestHashKey) {
            this.requestHashKey = requestHashKey;
        };
        ProcessPaymentComponent.prototype.setResponseHashKey = function (responseHashKey) {
            this.responseHashKey = responseHashKey;
        };
        ProcessPaymentComponent.prototype.setProdId = function (prodid) {
            this.prodid = prodid;
        };
        ProcessPaymentComponent.prototype.setTxnId = function (txnid) {
            this.txnid = txnid;
        };
        ProcessPaymentComponent.prototype.setCustAcc = function (custacc) {
            this.custacc = custacc;
        };
        ProcessPaymentComponent.prototype.setAmount = function (amt) {
            this.amt = amt;
        };
        ProcessPaymentComponent.prototype.setCurrency = function (txncurr) {
            this.txncurr = txncurr;
        };
        ProcessPaymentComponent.prototype.setTxnType = function (txntype) {
            this.txntype = txntype;
        };
        ProcessPaymentComponent.prototype.setReturnUrl = function (returnURL) {
            this.returnURL = 'https://www.atomtech.in/angular-kit-handle/params_response.php';
        };
        ProcessPaymentComponent.prototype.setTxnsCamt = function (txnscamt) {
            this.txnscamt = txnscamt;
        };
        ProcessPaymentComponent.prototype.setCustomerName = function (udf1) {
            this.udf1 = udf1;
        };
        ProcessPaymentComponent.prototype.setCustomerEmail = function (udf2) {
            this.udf2 = udf2;
        };
        ProcessPaymentComponent.prototype.setCustomerMobile = function (udf3) {
            this.udf3 = udf3;
        };
        ProcessPaymentComponent.prototype.setCustomerAddress = function (udf4) {
            this.udf4 = udf4;
        };
        ProcessPaymentComponent.prototype.setMdd = function (mdd) {
            this.mdd = mdd;
        };
        ProcessPaymentComponent.prototype.setBankId = function (bankId) {
            this.bankId = bankId;
        };
        ProcessPaymentComponent.prototype.generateChecksum = function () {
            this.signature = this.loginId + this.password + this.txntype + this.prodid + this.txnid + this.amt + this.txncurr;
            return hash.sha512.hmac(this.requestHashKey, this.signature);
        };
        ProcessPaymentComponent.prototype.payNow = function () {
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
            if (this.mdd != null) {
                urlToPay += '&mdd=' + this.mdd;
            }
            if (this.bankId != null) {
                urlToPay += '&bankid=' + this.bankId;
            }
            var url = encodeURI(urlToPay);
            var res = null;
            var left = (window.screen.width / 2) - ((1200 / 2) + 10);
            var top = '22%';
            var childWindow = window.open(url, 'Atom Paynetz', 'status=no,height=600,width=1200,resizable=yes,left='
                + left + ',top=' + top + ',screenX=' + left + ',screenY='
                + top + ',toolbar=no,menubar=no,scrollbars=no,location=no,directories=no');
            var promise = new Promise(function (resolve) {
                window.addEventListener('message', function (e) {
                    if (e.origin === 'https://www.atomtech.in') {
                        res = e.data;
                        childWindow.close();
                    }
                }, false);
                var intervalID = window.setInterval(checkWindow, 500);
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
        ProcessPaymentComponent.prototype.validateResponse = function (mmp_txn, mer_txn, f_code, prod, discriminator, amt, bank_txn, signature) {
            var string_verify = mmp_txn + mer_txn + f_code + prod + discriminator + amt + bank_txn;
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
        ProcessPaymentComponent.prototype.formatDate = function (date) {
            var day = date.getDate();
            var monthIndex = date.getMonth() + 1;
            var year = date.getFullYear();
            var second = date.getSeconds();
            var hours = date.getHours();
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
        ProcessPaymentComponent.ctorParameters = function () { return []; };
        return ProcessPaymentComponent;
    }());

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

    /*
     * Public API Surface of ng6-atom-paynetz
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Ng6AtomPaynetzModule = Ng6AtomPaynetzModule;
    exports.ProcessPaymentComponent = ProcessPaymentComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmc2LWF0b20tcGF5bmV0ei51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nNi1hdG9tLXBheW5ldHovbGliL1Byb2Nlc3NQYXltZW50L1Byb2Nlc3NQYXltZW50LmNvbXBvbmVudC50cyIsIm5nOi8vbmc2LWF0b20tcGF5bmV0ei9saWIvbmc2LWF0b20tcGF5bmV0ei5tb2R1bGUudHMiLCJuZzovL25nNi1hdG9tLXBheW5ldHovcHVibGljX2FwaS50cyIsIm5nOi8vbmc2LWF0b20tcGF5bmV0ei9uZzYtYXRvbS1wYXluZXR6LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGhhc2ggZnJvbSAnanMtc2hhNTEyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWNvbmZpZycsXHJcbiAgdGVtcGxhdGU6IGA8cD5cclxuICBjb25maWcgd29ya3MhXHJcbjwvcD5cclxuYCxcclxuICBzdHlsZXM6IFtgYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9jZXNzUGF5bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHByaXZhdGUgbG9naW5JZDogYW55O1xyXG4gIHByaXZhdGUgcGFzc3dvcmQ6IGFueTtcclxuICBwcml2YXRlIHVybDogYW55O1xyXG4gIHByaXZhdGUgY2xpZW50Q29kZTogYW55O1xyXG4gIHByaXZhdGUgcmVxdWVzdEhhc2hLZXk6IGFueTtcclxuICBwcml2YXRlIHJlc3BvbnNlSGFzaEtleTogYW55O1xyXG4gIHByaXZhdGUgcHJvZGlkOiBhbnk7XHJcbiAgcHJpdmF0ZSBzaWduYXR1cmU6IGFueTtcclxuICBwcml2YXRlIGFtdDogYW55O1xyXG4gIHByaXZhdGUgdHhuY3VycjogYW55O1xyXG4gIHByaXZhdGUgdHhudHlwZTogYW55O1xyXG4gIHByaXZhdGUgdHhuc2NhbXQ6IGFueTtcclxuICBwcml2YXRlIHR4bmlkOiBhbnk7XHJcbiAgcHJpdmF0ZSBjdXN0YWNjOiBhbnk7XHJcbiAgcHJpdmF0ZSByZXR1cm5VUkw6IGFueTtcclxuICBwcml2YXRlIG1kZCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBiYW5rSWQgPSBudWxsO1xyXG4gIHByaXZhdGUgdWRmMTogYW55O1xyXG4gIHByaXZhdGUgdWRmMjogYW55O1xyXG4gIHByaXZhdGUgdWRmMzogYW55O1xyXG4gIHByaXZhdGUgdWRmNDogYW55O1xyXG4gIHByaXZhdGUgY2hpbGRXaW5kb3c6IGFueTtcclxuICBwcml2YXRlIHJlc3BvbnNlOiBhbnk7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBzZXRMb2dpbmlkKGxvZ2luOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubG9naW5JZCA9IGxvZ2luO1xyXG4gIH1cclxuXHJcbiAgc2V0UGFzc3dvcmQocGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xyXG4gIH1cclxuXHJcbiAgc2V0VVJMKHVybDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnVybCA9IHVybDtcclxuICB9XHJcblxyXG4gIHNldENsaWVudENvZGUoY2xpZW50Q29kZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNsaWVudENvZGUgPSBjbGllbnRDb2RlO1xyXG4gIH1cclxuXHJcbiAgc2V0UmVxdWVzdEhhc2tLZXkocmVxdWVzdEhhc2hLZXk6IHN0cmluZykge1xyXG4gICAgdGhpcy5yZXF1ZXN0SGFzaEtleSA9IHJlcXVlc3RIYXNoS2V5O1xyXG4gIH1cclxuXHJcbiAgc2V0UmVzcG9uc2VIYXNoS2V5KHJlc3BvbnNlSGFzaEtleTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnJlc3BvbnNlSGFzaEtleSA9IHJlc3BvbnNlSGFzaEtleTtcclxuICB9XHJcblxyXG4gIHNldFByb2RJZChwcm9kaWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5wcm9kaWQgPSBwcm9kaWQ7XHJcbiAgfVxyXG5cclxuICBzZXRUeG5JZCh0eG5pZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnR4bmlkID0gdHhuaWQ7XHJcbiAgfVxyXG5cclxuICBzZXRDdXN0QWNjKGN1c3RhY2M6IHN0cmluZykge1xyXG4gICAgdGhpcy5jdXN0YWNjID0gY3VzdGFjYztcclxuICB9XHJcblxyXG4gIHNldEFtb3VudChhbXQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5hbXQgPSBhbXQ7XHJcbiAgfVxyXG5cclxuICBzZXRDdXJyZW5jeSh0eG5jdXJyOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudHhuY3VyciA9IHR4bmN1cnI7XHJcbiAgfVxyXG5cclxuICBzZXRUeG5UeXBlKHR4bnR5cGU6IHN0cmluZykge1xyXG4gICAgdGhpcy50eG50eXBlID0gdHhudHlwZTtcclxuICB9XHJcblxyXG4gIHNldFJldHVyblVybChyZXR1cm5VUkw6IHN0cmluZykge1xyXG4gICAgdGhpcy5yZXR1cm5VUkwgPSAnaHR0cHM6Ly93d3cuYXRvbXRlY2guaW4vYW5ndWxhci1raXQtaGFuZGxlL3BhcmFtc19yZXNwb25zZS5waHAnO1xyXG4gIH1cclxuXHJcbiAgc2V0VHhuc0NhbXQodHhuc2NhbXQ6IHN0cmluZykge1xyXG4gICAgdGhpcy50eG5zY2FtdCA9IHR4bnNjYW10O1xyXG4gIH1cclxuXHJcbiAgc2V0Q3VzdG9tZXJOYW1lKHVkZjE6IHN0cmluZykge1xyXG4gICAgdGhpcy51ZGYxID0gdWRmMTtcclxuICB9XHJcblxyXG4gIHNldEN1c3RvbWVyRW1haWwodWRmMjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnVkZjIgPSB1ZGYyO1xyXG4gIH1cclxuXHJcbiAgc2V0Q3VzdG9tZXJNb2JpbGUodWRmMzogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnVkZjMgPSB1ZGYzO1xyXG4gIH1cclxuXHJcbiAgc2V0Q3VzdG9tZXJBZGRyZXNzKHVkZjQ6IHN0cmluZykge1xyXG4gICAgdGhpcy51ZGY0ID0gdWRmNDtcclxuICB9XHJcblxyXG4gIHNldE1kZChtZGQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5tZGQgPSBtZGQ7XHJcbiAgfVxyXG5cclxuICBzZXRCYW5rSWQoYmFua0lkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuYmFua0lkID0gYmFua0lkO1xyXG4gIH1cclxuICBnZW5lcmF0ZUNoZWNrc3VtKCkge1xyXG4gICAgdGhpcy5zaWduYXR1cmUgPSB0aGlzLmxvZ2luSWQgKyB0aGlzLnBhc3N3b3JkICsgdGhpcy50eG50eXBlICsgdGhpcy5wcm9kaWQgKyB0aGlzLnR4bmlkICsgdGhpcy5hbXQgKyB0aGlzLnR4bmN1cnI7XHJcbiAgICByZXR1cm4gaGFzaC5zaGE1MTIuaG1hYyh0aGlzLnJlcXVlc3RIYXNoS2V5LCB0aGlzLnNpZ25hdHVyZSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHBheU5vdygpIHtcclxuXHJcbiAgICBsZXQgdXJsVG9QYXkgPSB0aGlzLnVybDtcclxuICAgIHVybFRvUGF5ICs9ICc/bG9naW49JyArIHRoaXMubG9naW5JZDtcclxuICAgIHVybFRvUGF5ICs9ICcmcGFzcz0nICsgdGhpcy5wYXNzd29yZDtcclxuICAgIHVybFRvUGF5ICs9ICcmdHR5cGU9JyArIHRoaXMudHhudHlwZTtcclxuICAgIHVybFRvUGF5ICs9ICcmcHJvZGlkPScgKyB0aGlzLnByb2RpZDtcclxuICAgIHVybFRvUGF5ICs9ICcmYW10PScgKyB0aGlzLmFtdDtcclxuICAgIHVybFRvUGF5ICs9ICcmdHhuY3Vycj0nICsgdGhpcy50eG5jdXJyO1xyXG4gICAgdXJsVG9QYXkgKz0gJyZ0eG5zY2FtdD0nICsgdGhpcy50eG5zY2FtdDtcclxuICAgIHVybFRvUGF5ICs9ICcmY2xpZW50Y29kZT0nICsgYnRvYSh0aGlzLmNsaWVudENvZGUpO1xyXG4gICAgdXJsVG9QYXkgKz0gJyZ0eG5pZD0nICsgdGhpcy50eG5pZDtcclxuICAgIHVybFRvUGF5ICs9ICcmZGF0ZT0nICsgdGhpcy5mb3JtYXREYXRlKG5ldyBEYXRlKTtcclxuICAgIHVybFRvUGF5ICs9ICcmY3VzdGFjYz0nICsgdGhpcy5jdXN0YWNjO1xyXG4gICAgdXJsVG9QYXkgKz0gJyZydT0nICsgdGhpcy5yZXR1cm5VUkw7XHJcbiAgICB1cmxUb1BheSArPSAnJnNpZ25hdHVyZT0nICsgdGhpcy5nZW5lcmF0ZUNoZWNrc3VtKCk7XHJcbiAgICB1cmxUb1BheSArPSAnJnVkZjE9JyArIHRoaXMudWRmMTtcclxuICAgIHVybFRvUGF5ICs9ICcmdWRmMj0nICsgdGhpcy51ZGYyO1xyXG4gICAgdXJsVG9QYXkgKz0gJyZ1ZGYzPScgKyB0aGlzLnVkZjM7XHJcbiAgICB1cmxUb1BheSArPSAnJnVkZjQ9JyArIHRoaXMudWRmNDtcclxuXHJcbiAgICBpZiAodGhpcy5tZGQgIT0gbnVsbCkge1xyXG4gICAgICB1cmxUb1BheSArPSAnJm1kZD0nICsgdGhpcy5tZGQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuYmFua0lkICE9IG51bGwpIHtcclxuICAgICAgdXJsVG9QYXkgKz0gJyZiYW5raWQ9JyArIHRoaXMuYmFua0lkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVybCA9IGVuY29kZVVSSSh1cmxUb1BheSk7XHJcbiAgICBsZXQgcmVzID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCBsZWZ0ID0gKHdpbmRvdy5zY3JlZW4ud2lkdGggLyAyKSAtICgoMTIwMCAvIDIpICsgMTApO1xyXG4gICAgY29uc3QgdG9wID0gJzIyJSc7XHJcblxyXG4gICAgY29uc3QgY2hpbGRXaW5kb3cgPSB3aW5kb3cub3Blbih1cmwsICdBdG9tIFBheW5ldHonLCAnc3RhdHVzPW5vLGhlaWdodD02MDAsd2lkdGg9MTIwMCxyZXNpemFibGU9eWVzLGxlZnQ9J1xyXG4gICAgICArIGxlZnQgKyAnLHRvcD0nICsgdG9wICsgJyxzY3JlZW5YPScgKyBsZWZ0ICsgJyxzY3JlZW5ZPSdcclxuICAgICAgKyB0b3AgKyAnLHRvb2xiYXI9bm8sbWVudWJhcj1ubyxzY3JvbGxiYXJzPW5vLGxvY2F0aW9uPW5vLGRpcmVjdG9yaWVzPW5vJyk7XHJcblxyXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUub3JpZ2luID09PSAnaHR0cHM6Ly93d3cuYXRvbXRlY2guaW4nKSB7XHJcbiAgICAgICAgICByZXMgPSBlLmRhdGE7XHJcbiAgICAgICAgICBjaGlsZFdpbmRvdy5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICBjb25zdCBpbnRlcnZhbElEID0gd2luZG93LnNldEludGVydmFsKGNoZWNrV2luZG93LCA1MDApO1xyXG4gICAgICBmdW5jdGlvbiBjaGVja1dpbmRvdyhlOiBhbnkpIHtcclxuICAgICAgICBpZiAoY2hpbGRXaW5kb3cgJiYgY2hpbGRXaW5kb3cuY2xvc2VkKSB7XHJcbiAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2UgPSByZXM7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsSUQpO1xyXG4gICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGF0YTogcmVzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsSUQpO1xyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgc3RhdHVzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBkYXRhOiAncGF5bWVudCBub3QgY29tcGxldGVkJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb21pc2U7XHJcblxyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVSZXNwb25zZShtbXBfdHhuOiBhbnksIG1lcl90eG46IGFueSwgZl9jb2RlOiBhbnksIHByb2Q6IGFueSwgZGlzY3JpbWluYXRvcjogYW55LCBhbXQ6IGFueSwgYmFua190eG46IGFueSwgc2lnbmF0dXJlOiBhbnkpIHtcclxuICAgIGNvbnN0IHN0cmluZ192ZXJpZnkgPSBtbXBfdHhuICsgbWVyX3R4biArIGZfY29kZSArIHByb2QgKyBkaXNjcmltaW5hdG9yICsgYW10ICsgYmFua190eG47XHJcbiAgICBjb25zdCBzaWcgPSBoYXNoLnNoYTUxMi5obWFjKHRoaXMucmVzcG9uc2VIYXNoS2V5LCBzdHJpbmdfdmVyaWZ5KTtcclxuXHJcbiAgICBpZiAoc2lnbmF0dXJlID09PSBzaWcpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAnc3RhdHVzJzogdHJ1ZSxcclxuICAgICAgICAnbWVzc2FnZSc6ICdTaWduYXR1cmUgbWF0Y2hlZCA9ICcgKyBzaWcgKyAnID0gJyArIHRoaXMucmVzcG9uc2VIYXNoS2V5XHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICdzdGF0dXMnOiBmYWxzZSxcclxuICAgICAgICAnbWVzc2FnZSc6ICdTaWduYXR1cmUgbWlzbWF0Y2hlZCA9ICcgKyBzaWcgKyAnID0gJyArIHRoaXMucmVzcG9uc2VIYXNoS2V5XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JtYXREYXRlKGRhdGU6IGFueSkge1xyXG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICBsZXQgbW9udGhJbmRleCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3Qgc2Vjb25kID0gZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgIGNvbnN0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcclxuICAgIGlmIChtb250aEluZGV4IDwgMTApIHtcclxuICAgICAgbW9udGhJbmRleCA9ICcwJyArIG1vbnRoSW5kZXg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF5ICsgJy8nICsgTnVtYmVyKG1vbnRoSW5kZXgpICsgJy8nICsgeWVhciArICcgJyArIGhvdXJzICsgJzonICsgbWludXRlcyArICc6JyArIHNlY29uZDtcclxuICB9XHJcblxyXG59XHJcbiIsIlxyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyTW9kdWxlLCBSb3V0ZXN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFByb2Nlc3NQYXltZW50Q29tcG9uZW50IH0gZnJvbSAnLi9Qcm9jZXNzUGF5bWVudC9Qcm9jZXNzUGF5bWVudC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbUHJvY2Vzc1BheW1lbnRDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmc2QXRvbVBheW5ldHpNb2R1bGUgeyB9XHJcbiIsIi8qXHJcbiAqIFB1YmxpYyBBUEkgU3VyZmFjZSBvZiBuZzYtYXRvbS1wYXluZXR6XHJcbiAqL1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9saWIvbmc2LWF0b20tcGF5bmV0ei5tb2R1bGUnO1xyXG4vLyBjb21wb25lbnRzXHJcbmV4cG9ydCAqIGZyb20gJy4vbGliL1Byb2Nlc3NQYXltZW50L1Byb2Nlc3NQYXltZW50LmNvbXBvbmVudCc7XHJcbiIsIi8qKlxuICogR2VuZXJhdGVkIGJ1bmRsZSBpbmRleC4gRG8gbm90IGVkaXQuXG4gKi9cblxuZXhwb3J0ICogZnJvbSAnLi9wdWJsaWNfYXBpJztcbiJdLCJuYW1lcyI6WyJoYXNoLnNoYTUxMiIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIiwiQnJvd3Nlck1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztRQXFDRTtZQVJRLFFBQUcsR0FBRyxJQUFJLENBQUM7WUFDWCxXQUFNLEdBQUcsSUFBSSxDQUFDO1NBUXJCO1FBR0QsMENBQVEsR0FBUjtTQUNDO1FBRUQsNENBQVUsR0FBVixVQUFXLEtBQWE7WUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDdEI7UUFFRCw2Q0FBVyxHQUFYLFVBQVksUUFBZ0I7WUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FDMUI7UUFFRCx3Q0FBTSxHQUFOLFVBQU8sR0FBVztZQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNoQjtRQUVELCtDQUFhLEdBQWIsVUFBYyxVQUFrQjtZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztTQUM5QjtRQUVELG1EQUFpQixHQUFqQixVQUFrQixjQUFzQjtZQUN0QyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztTQUN0QztRQUVELG9EQUFrQixHQUFsQixVQUFtQixlQUF1QjtZQUN4QyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztTQUN4QztRQUVELDJDQUFTLEdBQVQsVUFBVSxNQUFjO1lBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3RCO1FBRUQsMENBQVEsR0FBUixVQUFTLEtBQWE7WUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENB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