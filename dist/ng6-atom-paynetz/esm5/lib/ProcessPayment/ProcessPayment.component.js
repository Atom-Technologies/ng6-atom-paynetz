/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as hash from 'js-sha512';
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
export { ProcessPaymentComponent };
if (false) {
    /** @type {?} */
    ProcessPaymentComponent.prototype.loginId;
    /** @type {?} */
    ProcessPaymentComponent.prototype.password;
    /** @type {?} */
    ProcessPaymentComponent.prototype.url;
    /** @type {?} */
    ProcessPaymentComponent.prototype.clientCode;
    /** @type {?} */
    ProcessPaymentComponent.prototype.requestHashKey;
    /** @type {?} */
    ProcessPaymentComponent.prototype.responseHashKey;
    /** @type {?} */
    ProcessPaymentComponent.prototype.prodid;
    /** @type {?} */
    ProcessPaymentComponent.prototype.signature;
    /** @type {?} */
    ProcessPaymentComponent.prototype.amt;
    /** @type {?} */
    ProcessPaymentComponent.prototype.txncurr;
    /** @type {?} */
    ProcessPaymentComponent.prototype.txntype;
    /** @type {?} */
    ProcessPaymentComponent.prototype.txnscamt;
    /** @type {?} */
    ProcessPaymentComponent.prototype.txnid;
    /** @type {?} */
    ProcessPaymentComponent.prototype.custacc;
    /** @type {?} */
    ProcessPaymentComponent.prototype.returnURL;
    /** @type {?} */
    ProcessPaymentComponent.prototype.udf1;
    /** @type {?} */
    ProcessPaymentComponent.prototype.udf2;
    /** @type {?} */
    ProcessPaymentComponent.prototype.udf3;
    /** @type {?} */
    ProcessPaymentComponent.prototype.udf4;
    /** @type {?} */
    ProcessPaymentComponent.prototype.childWindow;
    /** @type {?} */
    ProcessPaymentComponent.prototype.response;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvY2Vzc1BheW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmc2LWF0b20tcGF5bmV0ei8iLCJzb3VyY2VzIjpbImxpYi9Qcm9jZXNzUGF5bWVudC9Qcm9jZXNzUGF5bWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxLQUFLLElBQUksTUFBTSxXQUFXLENBQUM7O0lBa0NoQztLQUNDOzs7O0lBR0QsMENBQVE7OztJQUFSO0tBQ0M7Ozs7O0lBRUQsNENBQVU7Ozs7SUFBVixVQUFXLEtBQWE7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7S0FDdEI7Ozs7O0lBRUQsNkNBQVc7Ozs7SUFBWCxVQUFZLFFBQWdCO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBQzFCOzs7OztJQUVELHdDQUFNOzs7O0lBQU4sVUFBTyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0tBQ2hCOzs7OztJQUVELCtDQUFhOzs7O0lBQWIsVUFBYyxVQUFrQjtRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztLQUM5Qjs7Ozs7SUFFRCxtREFBaUI7Ozs7SUFBakIsVUFBa0IsY0FBc0I7UUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7S0FDdEM7Ozs7O0lBRUQsb0RBQWtCOzs7O0lBQWxCLFVBQW1CLGVBQXVCO1FBQ3hDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0tBQ3hDOzs7OztJQUVELDJDQUFTOzs7O0lBQVQsVUFBVSxNQUFjO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0tBQ3RCOzs7OztJQUVELDBDQUFROzs7O0lBQVIsVUFBUyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ3BC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cG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBoYXNoIGZyb20gJ2pzLXNoYTUxMic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jb25maWcnLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBjb25maWcgd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm9jZXNzUGF5bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBsb2dpbklkOiBhbnk7XG4gIHByaXZhdGUgcGFzc3dvcmQ6IGFueTtcbiAgcHJpdmF0ZSB1cmw6IGFueTtcbiAgcHJpdmF0ZSBjbGllbnRDb2RlOiBhbnk7XG4gIHByaXZhdGUgcmVxdWVzdEhhc2hLZXk6IGFueTtcbiAgcHJpdmF0ZSByZXNwb25zZUhhc2hLZXk6IGFueTtcbiAgcHJpdmF0ZSBwcm9kaWQ6IGFueTtcbiAgcHJpdmF0ZSBzaWduYXR1cmU6IGFueTtcbiAgcHJpdmF0ZSBhbXQ6IGFueTtcbiAgcHJpdmF0ZSB0eG5jdXJyOiBhbnk7XG4gIHByaXZhdGUgdHhudHlwZTogYW55O1xuICBwcml2YXRlIHR4bnNjYW10OiBhbnk7XG4gIHByaXZhdGUgdHhuaWQ6IGFueTtcbiAgcHJpdmF0ZSBjdXN0YWNjOiBhbnk7XG4gIHByaXZhdGUgcmV0dXJuVVJMOiBhbnk7XG4gIHByaXZhdGUgdWRmMTogYW55O1xuICBwcml2YXRlIHVkZjI6IGFueTtcbiAgcHJpdmF0ZSB1ZGYzOiBhbnk7XG4gIHByaXZhdGUgdWRmNDogYW55O1xuICBwcml2YXRlIGNoaWxkV2luZG93OiBhbnk7XG4gIHByaXZhdGUgcmVzcG9uc2U6IGFueTtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgc2V0TG9naW5pZChsb2dpbjogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2dpbklkID0gbG9naW47XG4gIH1cblxuICBzZXRQYXNzd29yZChwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICB9XG5cbiAgc2V0VVJMKHVybDogc3RyaW5nKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gIH1cblxuICBzZXRDbGllbnRDb2RlKGNsaWVudENvZGU6IHN0cmluZykge1xuICAgIHRoaXMuY2xpZW50Q29kZSA9IGNsaWVudENvZGU7XG4gIH1cblxuICBzZXRSZXF1ZXN0SGFza0tleShyZXF1ZXN0SGFzaEtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5yZXF1ZXN0SGFzaEtleSA9IHJlcXVlc3RIYXNoS2V5O1xuICB9XG5cbiAgc2V0UmVzcG9uc2VIYXNoS2V5KHJlc3BvbnNlSGFzaEtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5yZXNwb25zZUhhc2hLZXkgPSByZXNwb25zZUhhc2hLZXk7XG4gIH1cblxuICBzZXRQcm9kSWQocHJvZGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnByb2RpZCA9IHByb2RpZDtcbiAgfVxuXG4gIHNldFR4bklkKHR4bmlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnR4bmlkID0gdHhuaWQ7XG4gIH1cblxuICBzZXRDdXN0QWNjKGN1c3RhY2M6IHN0cmluZykge1xuICAgIHRoaXMuY3VzdGFjYyA9IGN1c3RhY2M7XG4gIH1cblxuICBzZXRBbW91bnQoYW10OiBzdHJpbmcpIHtcbiAgICB0aGlzLmFtdCA9IGFtdDtcbiAgfVxuXG4gIHNldEN1cnJlbmN5KHR4bmN1cnI6IHN0cmluZykge1xuICAgIHRoaXMudHhuY3VyciA9IHR4bmN1cnI7XG4gIH1cblxuICBzZXRUeG5UeXBlKHR4bnR5cGU6IHN0cmluZykge1xuICAgIHRoaXMudHhudHlwZSA9IHR4bnR5cGU7XG4gIH1cblxuICBzZXRSZXR1cm5VcmwocmV0dXJuVVJMOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJldHVyblVSTCA9ICdodHRwczovL3d3dy5hdG9tdGVjaC5pbi9hbmd1bGFyLWtpdC1oYW5kbGUvcGFyYW1zX3Jlc3BvbnNlLnBocCc7XG4gIH1cblxuICBzZXRUeG5zQ2FtdCh0eG5zY2FtdDogc3RyaW5nKSB7XG4gICAgdGhpcy50eG5zY2FtdCA9IHR4bnNjYW10O1xuICB9XG5cbiAgc2V0Q3VzdG9tZXJOYW1lKHVkZjE6IHN0cmluZykge1xuICAgIHRoaXMudWRmMSA9IHVkZjE7XG4gIH1cblxuICBzZXRDdXN0b21lckVtYWlsKHVkZjI6IHN0cmluZykge1xuICAgIHRoaXMudWRmMiA9IHVkZjI7XG4gIH1cblxuICBzZXRDdXN0b21lck1vYmlsZSh1ZGYzOiBzdHJpbmcpIHtcbiAgICB0aGlzLnVkZjMgPSB1ZGYzO1xuICB9XG5cbiAgc2V0Q3VzdG9tZXJBZGRyZXNzKHVkZjQ6IHN0cmluZykge1xuICAgIHRoaXMudWRmNCA9IHVkZjQ7XG4gIH1cblxuICBnZW5lcmF0ZUNoZWNrc3VtKCkge1xuICAgIHRoaXMuc2lnbmF0dXJlID0gdGhpcy5sb2dpbklkICsgdGhpcy5wYXNzd29yZCArIHRoaXMudHhudHlwZSArIHRoaXMucHJvZGlkICsgdGhpcy50eG5pZCArIHRoaXMuYW10ICsgdGhpcy50eG5jdXJyO1xuICAgIHJldHVybiBoYXNoLnNoYTUxMi5obWFjKHRoaXMucmVxdWVzdEhhc2hLZXksIHRoaXMuc2lnbmF0dXJlKTtcbiAgfVxuXG5cblxuICBwYXlOb3coKSB7XG5cbiAgICBsZXQgdXJsVG9QYXkgPSB0aGlzLnVybDtcbiAgICB1cmxUb1BheSArPSAnP2xvZ2luPScgKyB0aGlzLmxvZ2luSWQ7XG4gICAgdXJsVG9QYXkgKz0gJyZwYXNzPScgKyB0aGlzLnBhc3N3b3JkO1xuICAgIHVybFRvUGF5ICs9ICcmdHR5cGU9JyArIHRoaXMudHhudHlwZTtcbiAgICB1cmxUb1BheSArPSAnJnByb2RpZD0nICsgdGhpcy5wcm9kaWQ7XG4gICAgdXJsVG9QYXkgKz0gJyZhbXQ9JyArIHRoaXMuYW10O1xuICAgIHVybFRvUGF5ICs9ICcmdHhuY3Vycj0nICsgdGhpcy50eG5jdXJyO1xuICAgIHVybFRvUGF5ICs9ICcmdHhuc2NhbXQ9JyArIHRoaXMudHhuc2NhbXQ7XG4gICAgdXJsVG9QYXkgKz0gJyZjbGllbnRjb2RlPScgKyBidG9hKHRoaXMuY2xpZW50Q29kZSk7XG4gICAgdXJsVG9QYXkgKz0gJyZ0eG5pZD0nICsgdGhpcy50eG5pZDtcbiAgICB1cmxUb1BheSArPSAnJmRhdGU9JyArIHRoaXMuZm9ybWF0RGF0ZShuZXcgRGF0ZSk7XG4gICAgdXJsVG9QYXkgKz0gJyZjdXN0YWNjPScgKyB0aGlzLmN1c3RhY2M7XG4gICAgdXJsVG9QYXkgKz0gJyZydT0nICsgdGhpcy5yZXR1cm5VUkw7XG4gICAgdXJsVG9QYXkgKz0gJyZzaWduYXR1cmU9JyArIHRoaXMuZ2VuZXJhdGVDaGVja3N1bSgpO1xuICAgIHVybFRvUGF5ICs9ICcmdWRmMT0nICsgdGhpcy51ZGYxO1xuICAgIHVybFRvUGF5ICs9ICcmdWRmMj0nICsgdGhpcy51ZGYyO1xuICAgIHVybFRvUGF5ICs9ICcmdWRmMz0nICsgdGhpcy51ZGYzO1xuICAgIHVybFRvUGF5ICs9ICcmdWRmND0nICsgdGhpcy51ZGY0O1xuICAgIGNvbnN0IHVybCA9IGVuY29kZVVSSSh1cmxUb1BheSk7XG4gICAgbGV0IHJlcyA9IG51bGw7XG5cbiAgICBjb25zdCBsZWZ0ID0gKHdpbmRvdy5zY3JlZW4ud2lkdGggLyAyKSAtICgoMTIwMCAvIDIpICsgMTApO1xuICAgIGNvbnN0IHRvcCA9ICcyMiUnO1xuXG4gICAgY29uc3QgY2hpbGRXaW5kb3cgPSB3aW5kb3cub3Blbih1cmwsICdBdG9tIFBheW5ldHonLCAnc3RhdHVzPW5vLGhlaWdodD02MDAsd2lkdGg9MTIwMCxyZXNpemFibGU9eWVzLGxlZnQ9J1xuICAgICAgKyBsZWZ0ICsgJyx0b3A9JyArIHRvcCArICcsc2NyZWVuWD0nICsgbGVmdCArICcsc2NyZWVuWT0nXG4gICAgICArIHRvcCArICcsdG9vbGJhcj1ubyxtZW51YmFyPW5vLHNjcm9sbGJhcnM9bm8sbG9jYXRpb249bm8sZGlyZWN0b3JpZXM9bm8nKTtcblxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUub3JpZ2luID09PSAnaHR0cHM6Ly93d3cuYXRvbXRlY2guaW4nKSB7XG4gICAgICAgICAgcmVzID0gZS5kYXRhO1xuICAgICAgICAgIGNoaWxkV2luZG93LmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGZhbHNlKTtcbiAgICAgIGNvbnN0IGludGVydmFsSUQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoY2hlY2tXaW5kb3csIDUwMCk7XG4gICAgICBmdW5jdGlvbiBjaGVja1dpbmRvdyhlOiBhbnkpIHtcbiAgICAgICAgaWYgKGNoaWxkV2luZG93ICYmIGNoaWxkV2luZG93LmNsb3NlZCkge1xuICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2UgPSByZXM7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgICAgICAgIGRhdGE6IHJlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgIHN0YXR1czogZmFsc2UsXG4gICAgICAgICAgICAgIGRhdGE6ICdwYXltZW50IG5vdCBjb21wbGV0ZWQnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9taXNlO1xuXG4gIH1cblxuICB2YWxpZGF0ZVJlc3BvbnNlKG1tcF90eG46IGFueSwgbWVyX3R4bjogYW55LCBmX2NvZGU6IGFueSwgcHJvZDogYW55LCBkaXNjcmltaW5hdG9yOiBhbnksIGFtdDogYW55LCBiYW5rX3R4bjogYW55LCBzaWduYXR1cmU6IGFueSkge1xuICAgIGNvbnN0IHN0cmluZ192ZXJpZnkgPSBtbXBfdHhuICsgbWVyX3R4biArIGZfY29kZSArIHByb2QgKyBkaXNjcmltaW5hdG9yICsgYW10ICsgYmFua190eG47XG4gICAgY29uc3Qgc2lnID0gaGFzaC5zaGE1MTIuaG1hYyh0aGlzLnJlc3BvbnNlSGFzaEtleSwgc3RyaW5nX3ZlcmlmeSk7XG5cbiAgICBpZiAoc2lnbmF0dXJlID09PSBzaWcpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdzdGF0dXMnOiB0cnVlLFxuICAgICAgICAnbWVzc2FnZSc6ICdTaWduYXR1cmUgbWF0Y2hlZCA9ICcgKyBzaWcgKyAnID0gJyArIHRoaXMucmVzcG9uc2VIYXNoS2V5XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnc3RhdHVzJzogZmFsc2UsXG4gICAgICAgICdtZXNzYWdlJzogJ1NpZ25hdHVyZSBtaXNtYXRjaGVkID0gJyArIHNpZyArICcgPSAnICsgdGhpcy5yZXNwb25zZUhhc2hLZXlcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZm9ybWF0RGF0ZShkYXRlOiBhbnkpIHtcbiAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICBsZXQgbW9udGhJbmRleCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBzZWNvbmQgPSBkYXRlLmdldFNlY29uZHMoKTtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBjb25zdCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgaWYgKG1vbnRoSW5kZXggPCAxMCkge1xuICAgICAgbW9udGhJbmRleCA9ICcwJyArIG1vbnRoSW5kZXg7XG4gICAgfVxuICAgIHJldHVybiBkYXkgKyAnLycgKyBOdW1iZXIobW9udGhJbmRleCkgKyAnLycgKyB5ZWFyICsgJyAnICsgaG91cnMgKyAnOicgKyBtaW51dGVzICsgJzonICsgc2Vjb25kO1xuICB9XG5cbn1cbiJdfQ==