/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as hash from 'js-sha512';
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
    /** @type {?} */
    ProcessPaymentComponent.prototype.get_response;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvY2Vzc1BheW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmc2LWF0b20tcGF5bmV0ei8iLCJzb3VyY2VzIjpbImxpYi9Qcm9jZXNzUGF5bWVudC9Qcm9jZXNzUGF5bWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxLQUFLLElBQUksTUFBTSxXQUFXLENBQUM7O0lBb0NoQztRQUFBLGlCQUNDO3VCQXRCaUIsRUFBRTt3QkFDRCxFQUFFO21CQUNQLEVBQUU7MEJBQ0ssRUFBRTs4QkFDRSxFQUFFOytCQUNELEVBQUU7c0JBQ1gsRUFBRTt5QkFDQyxFQUFFO21CQUNSLEVBQUU7dUJBQ0UsRUFBRTt1QkFDRixFQUFFO3dCQUNELEVBQUU7cUJBQ0wsRUFBRTt1QkFDQSxFQUFFO3lCQUNBLEVBQUU7b0JBQ1AsRUFBRTtvQkFDRixFQUFFO29CQUNGLEVBQUU7b0JBQ0YsRUFBRTs0QkF5SkY7WUFDYixNQUFNLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQztTQUN0QjtLQXZKQTs7OztJQUdELDBDQUFROzs7SUFBUjtLQUNDOzs7OztJQUVELDRDQUFVOzs7O0lBQVYsVUFBVyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0tBQ3RCOzs7OztJQUVELDZDQUFXOzs7O0lBQVgsVUFBWSxRQUFnQjtRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztLQUMxQjs7Ozs7SUFFRCx3Q0FBTTs7OztJQUFOLFVBQU8sR0FBVztRQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztLQUNoQjs7Ozs7SUFFRCwrQ0FBYTs7OztJQUFiLFVBQWMsVUFBa0I7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDOUI7Ozs7O0lBRUQsbURBQWlCOzs7O0lBQWpCLFVBQWtCLGNBQXNC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VUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsVUFBVSxHQUFHLEdBQUcsR0FBRyxVQUFVLENBQUM7U0FDL0I7UUFDRCxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztLQUNqRzs7Z0JBek5GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLDhCQUdYO29CQUNDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDYjs7OztrQ0FWRDs7U0FjYSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgaGFzaCBmcm9tICdqcy1zaGE1MTInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY29uZmlnJyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgY29uZmlnIHdvcmtzIVxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuXG5cblxuZXhwb3J0IGNsYXNzIFByb2Nlc3NQYXltZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIGxvZ2luSWQgPSAnJztcbiAgcHJpdmF0ZSBwYXNzd29yZCA9ICcnO1xuICBwcml2YXRlIHVybCA9ICcnO1xuICBwcml2YXRlIGNsaWVudENvZGUgPSAnJztcbiAgcHJpdmF0ZSByZXF1ZXN0SGFzaEtleSA9ICcnO1xuICBwcml2YXRlIHJlc3BvbnNlSGFzaEtleSA9ICcnO1xuICBwcml2YXRlIHByb2RpZCA9ICcnO1xuICBwcml2YXRlIHNpZ25hdHVyZSA9ICcnO1xuICBwcml2YXRlIGFtdCA9ICcnO1xuICBwcml2YXRlIHR4bmN1cnIgPSAnJztcbiAgcHJpdmF0ZSB0eG50eXBlID0gJyc7XG4gIHByaXZhdGUgdHhuc2NhbXQgPSAnJztcbiAgcHJpdmF0ZSB0eG5pZCA9ICcnO1xuICBwcml2YXRlIGN1c3RhY2MgPSAnJztcbiAgcHJpdmF0ZSByZXR1cm5VUkwgPSAnJztcbiAgcHJpdmF0ZSB1ZGYxID0gJyc7XG4gIHByaXZhdGUgdWRmMiA9ICcnO1xuICBwcml2YXRlIHVkZjMgPSAnJztcbiAgcHJpdmF0ZSB1ZGY0ID0gJyc7XG4gIHByaXZhdGUgY2hpbGRXaW5kb3c6IGFueTtcbiAgcHJpdmF0ZSByZXNwb25zZTogYW55O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBzZXRMb2dpbmlkKGxvZ2luOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvZ2luSWQgPSBsb2dpbjtcbiAgfVxuXG4gIHNldFBhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gIH1cblxuICBzZXRVUkwodXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIHNldENsaWVudENvZGUoY2xpZW50Q29kZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jbGllbnRDb2RlID0gY2xpZW50Q29kZTtcbiAgfVxuXG4gIHNldFJlcXVlc3RIYXNrS2V5KHJlcXVlc3RIYXNoS2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlcXVlc3RIYXNoS2V5ID0gcmVxdWVzdEhhc2hLZXk7XG4gIH1cblxuICBzZXRSZXNwb25zZUhhc2hLZXkocmVzcG9uc2VIYXNoS2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlc3BvbnNlSGFzaEtleSA9IHJlc3BvbnNlSGFzaEtleTtcbiAgfVxuXG4gIHNldFByb2RJZChwcm9kaWQ6IHN0cmluZykge1xuICAgIHRoaXMucHJvZGlkID0gcHJvZGlkO1xuICB9XG5cbiAgc2V0VHhuSWQodHhuaWQ6IHN0cmluZykge1xuICAgIHRoaXMudHhuaWQgPSB0eG5pZDtcbiAgfVxuXG4gIHNldEN1c3RBY2MoY3VzdGFjYzogc3RyaW5nKSB7XG4gICAgdGhpcy5jdXN0YWNjID0gY3VzdGFjYztcbiAgfVxuXG4gIHNldEFtb3VudChhbXQ6IHN0cmluZykge1xuICAgIHRoaXMuYW10ID0gYW10O1xuICB9XG5cbiAgc2V0Q3VycmVuY3kodHhuY3Vycjogc3RyaW5nKSB7XG4gICAgdGhpcy50eG5jdXJyID0gdHhuY3VycjtcbiAgfVxuXG4gIHNldFR4blR5cGUodHhudHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy50eG50eXBlID0gdHhudHlwZTtcbiAgfVxuXG4gIHNldFJldHVyblVybChyZXR1cm5VUkw6IHN0cmluZykge1xuICAgIHRoaXMucmV0dXJuVVJMID0gJ2h0dHBzOi8vd3d3LmF0b210ZWNoLmluL2FuZ3VsYXIta2l0LWhhbmRsZS9wYXJhbXNfcmVzcG9uc2UucGhwJztcbiAgfVxuXG4gIHNldFR4bnNDYW10KHR4bnNjYW10OiBzdHJpbmcpIHtcbiAgICB0aGlzLnR4bnNjYW10ID0gdHhuc2NhbXQ7XG4gIH1cblxuICBzZXRDdXN0b21lck5hbWUodWRmMTogc3RyaW5nKSB7XG4gICAgdGhpcy51ZGYxID0gdWRmMTtcbiAgfVxuXG4gIHNldEN1c3RvbWVyRW1haWwodWRmMjogc3RyaW5nKSB7XG4gICAgdGhpcy51ZGYyID0gdWRmMjtcbiAgfVxuXG4gIHNldEN1c3RvbWVyTW9iaWxlKHVkZjM6IHN0cmluZykge1xuICAgIHRoaXMudWRmMyA9IHVkZjM7XG4gIH1cblxuICBzZXRDdXN0b21lckFkZHJlc3ModWRmNDogc3RyaW5nKSB7XG4gICAgdGhpcy51ZGY0ID0gdWRmNDtcbiAgfVxuXG4gIGdlbmVyYXRlQ2hlY2tzdW0oKSB7XG4gICAgdGhpcy5zaWduYXR1cmUgPSB0aGlzLmxvZ2luSWQgKyB0aGlzLnBhc3N3b3JkICsgdGhpcy50eG50eXBlICsgdGhpcy5wcm9kaWQgKyB0aGlzLnR4bmlkICsgdGhpcy5hbXQgKyB0aGlzLnR4bmN1cnI7XG4gICAgcmV0dXJuIGhhc2guc2hhNTEyLmhtYWModGhpcy5yZXF1ZXN0SGFzaEtleSwgdGhpcy5zaWduYXR1cmUpO1xuICB9XG5cblxuXG4gIHBheU5vdygpIHtcblxuICAgIGxldCB1cmxUb1BheSA9IHRoaXMudXJsO1xuICAgIHVybFRvUGF5ICs9ICc/bG9naW49JyArIHRoaXMubG9naW5JZDtcbiAgICB1cmxUb1BheSArPSAnJnBhc3M9JyArIHRoaXMucGFzc3dvcmQ7XG4gICAgdXJsVG9QYXkgKz0gJyZ0dHlwZT0nICsgdGhpcy50eG50eXBlO1xuICAgIHVybFRvUGF5ICs9ICcmcHJvZGlkPScgKyB0aGlzLnByb2RpZDtcbiAgICB1cmxUb1BheSArPSAnJmFtdD0nICsgdGhpcy5hbXQ7XG4gICAgdXJsVG9QYXkgKz0gJyZ0eG5jdXJyPScgKyB0aGlzLnR4bmN1cnI7XG4gICAgdXJsVG9QYXkgKz0gJyZ0eG5zY2FtdD0nICsgdGhpcy50eG5zY2FtdDtcbiAgICB1cmxUb1BheSArPSAnJmNsaWVudGNvZGU9JyArIGJ0b2EodGhpcy5jbGllbnRDb2RlKTtcbiAgICB1cmxUb1BheSArPSAnJnR4bmlkPScgKyB0aGlzLnR4bmlkO1xuICAgIHVybFRvUGF5ICs9ICcmZGF0ZT0nICsgdGhpcy5mb3JtYXREYXRlKG5ldyBEYXRlKTtcbiAgICB1cmxUb1BheSArPSAnJmN1c3RhY2M9JyArIHRoaXMuY3VzdGFjYztcbiAgICB1cmxUb1BheSArPSAnJnJ1PScgKyB0aGlzLnJldHVyblVSTDtcbiAgICB1cmxUb1BheSArPSAnJnNpZ25hdHVyZT0nICsgdGhpcy5nZW5lcmF0ZUNoZWNrc3VtKCk7XG4gICAgdXJsVG9QYXkgKz0gJyZ1ZGYxPScgKyB0aGlzLnVkZjE7XG4gICAgdXJsVG9QYXkgKz0gJyZ1ZGYyPScgKyB0aGlzLnVkZjI7XG4gICAgdXJsVG9QYXkgKz0gJyZ1ZGYzPScgKyB0aGlzLnVkZjM7XG4gICAgdXJsVG9QYXkgKz0gJyZ1ZGY0PScgKyB0aGlzLnVkZjQ7XG4gICAgY29uc3QgdXJsID0gZW5jb2RlVVJJKHVybFRvUGF5KTtcbiAgICBsZXQgcmVzID0gbnVsbDtcblxuICAgIGNvbnN0IGxlZnQgPSAod2luZG93LnNjcmVlbi53aWR0aCAvIDIpIC0gKCgxMjAwIC8gMikgKyAxMCk7XG4gICAgY29uc3QgdG9wID0gKHdpbmRvdy5zY3JlZW4uaGVpZ2h0IC8gMikgLSAoKDg1MCAvIDIpICsgMTApO1xuXG4gICAgY29uc3QgY2hpbGRXaW5kb3cgPSB3aW5kb3cub3Blbih1cmwsICdBdG9tIFBheW5ldHonLCAnc3RhdHVzPW5vLGhlaWdodD02MDAsd2lkdGg9MTIwMCxyZXNpemFibGU9eWVzLGxlZnQ9J1xuICAgICAgKyBsZWZ0ICsgJyx0b3A9JyArIHRvcCArICcsc2NyZWVuWD0nICsgbGVmdCArICcsc2NyZWVuWT0nXG4gICAgICArIHRvcCArICcsdG9vbGJhcj1ubyxtZW51YmFyPW5vLHNjcm9sbGJhcnM9bm8sbG9jYXRpb249bm8sZGlyZWN0b3JpZXM9bm8nKTtcbiAgICAvLyBjb25zdCBjaGlsZFdpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCwgJ0F0b20gUGF5bmV0eicsICd3aWR0aD0xMTAwLCBoZWlnaHQ9OTAwJyk7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5vcmlnaW4gPT09ICdodHRwczovL3d3dy5hdG9tdGVjaC5pbicpIHtcbiAgICAgICAgICByZXMgPSBlLmRhdGE7XG4gICAgICAgICAgY2hpbGRXaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSwgZmFsc2UpO1xuICAgICAgY29uc3QgaW50ZXJ2YWxJRCA9IHdpbmRvdy5zZXRJbnRlcnZhbChjaGVja1dpbmRvdywgNTAwKTtcbiAgICAgIGZ1bmN0aW9uIGNoZWNrV2luZG93KGU6IGFueSkge1xuICAgICAgICBpZiAoY2hpbGRXaW5kb3cgJiYgY2hpbGRXaW5kb3cuY2xvc2VkKSB7XG4gICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgdGhpcy5yZXNwb25zZSA9IHJlcztcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgICAgICAgZGF0YTogcmVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgc3RhdHVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgZGF0YTogJ3BheW1lbnQgbm90IGNvbXBsZXRlZCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG5cbiAgfVxuXG4gIGdldF9yZXNwb25zZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5yZXNwb25zZTtcbiAgfVxuXG5cbiAgdmFsaWRhdGVSZXNwb25zZShtbXBfdHhuOiBhbnksIG1lcl90eG46IGFueSwgZl9jb2RlOiBhbnksIHByb2Q6IGFueSwgZGlzY3JpbWluYXRvcjogYW55LCBhbXQ6IGFueSwgYmFua190eG46IGFueSwgc2lnbmF0dXJlOiBhbnkpIHtcbiAgICBjb25zdCBzdHJpbmdfdmVyaWZ5ID0gbW1wX3R4biArIG1lcl90eG4gKyBmX2NvZGUgKyBwcm9kICsgZGlzY3JpbWluYXRvciArIGFtdCArIGJhbmtfdHhuO1xuICAgIGNvbnN0IHNpZyA9IGhhc2guc2hhNTEyLmhtYWModGhpcy5yZXNwb25zZUhhc2hLZXksIHN0cmluZ192ZXJpZnkpO1xuXG4gICAgaWYgKHNpZ25hdHVyZSA9PT0gc2lnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnc3RhdHVzJzogdHJ1ZSxcbiAgICAgICAgJ21lc3NhZ2UnOiAnU2lnbmF0dXJlIG1hdGNoZWQgPSAnICsgc2lnICsgJyA9ICcgKyB0aGlzLnJlc3BvbnNlSGFzaEtleVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3N0YXR1cyc6IGZhbHNlLFxuICAgICAgICAnbWVzc2FnZSc6ICdTaWduYXR1cmUgbWlzbWF0Y2hlZCA9ICcgKyBzaWcgKyAnID0gJyArIHRoaXMucmVzcG9uc2VIYXNoS2V5XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZvcm1hdERhdGUoZGF0ZTogYW55KSB7XG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgbGV0IG1vbnRoSW5kZXggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3Qgc2Vjb25kID0gZGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgY29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgIGlmIChtb250aEluZGV4IDwgMTApIHtcbiAgICAgIG1vbnRoSW5kZXggPSAnMCcgKyBtb250aEluZGV4O1xuICAgIH1cbiAgICByZXR1cm4gZGF5ICsgJy8nICsgTnVtYmVyKG1vbnRoSW5kZXgpICsgJy8nICsgeWVhciArICcgJyArIGhvdXJzICsgJzonICsgbWludXRlcyArICc6JyArIHNlY29uZDtcbiAgfVxuXG59XG4iXX0=