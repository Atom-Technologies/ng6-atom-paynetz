/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as hash from 'js-sha512';
export class ProcessPaymentComponent {
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
        return hash.sha512.hmac(this.requestHashKey, this.signature);
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
        const top = '22%';
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
        const sig = hash.sha512.hmac(this.responseHashKey, string_verify);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvY2Vzc1BheW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmc2LWF0b20tcGF5bmV0ei8iLCJzb3VyY2VzIjpbImxpYi9Qcm9jZXNzUGF5bWVudC9Qcm9jZXNzUGF5bWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxLQUFLLElBQUksTUFBTSxXQUFXLENBQUM7QUFXbEMsTUFBTTtJQXVCSjtLQUNDOzs7O0lBR0QsUUFBUTtLQUNQOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0tBQ3RCOzs7OztJQUVELFdBQVcsQ0FBQyxRQUFnQjtRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztLQUMxQjs7Ozs7SUFFRCxNQUFNLENBQUMsR0FBVztRQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztLQUNoQjs7Ozs7SUFFRCxhQUFhLENBQUMsVUFBa0I7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDOUI7Ozs7O0lBRUQsaUJBQWlCLENBQUMsY0FBc0I7UUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7S0FDdEM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsZUFBdUI7UUFDeEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7S0FDeEM7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQWM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7S0FDdEI7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7S0FDcEI7Ozs7O0lBRUQsVUFBVSxDQUFDLE9BQWU7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDeEI7Ozs7O0lB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OztJQUVELFVBQVUsQ0FBQyxJQUFTOztRQUNsQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O1FBQzNCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7O1FBQ3JDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7UUFDaEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOztRQUNqQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7O1FBQzlCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQyxFQUFFLENBQUMsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQixVQUFVLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQztTQUMvQjtRQUNELE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO0tBQ2pHOzs7WUFsTkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7OztDQUdYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGhhc2ggZnJvbSAnanMtc2hhNTEyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNvbmZpZycsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGNvbmZpZyB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcblxuZXhwb3J0IGNsYXNzIFByb2Nlc3NQYXltZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIGxvZ2luSWQ6IGFueTtcbiAgcHJpdmF0ZSBwYXNzd29yZDogYW55O1xuICBwcml2YXRlIHVybDogYW55O1xuICBwcml2YXRlIGNsaWVudENvZGU6IGFueTtcbiAgcHJpdmF0ZSByZXF1ZXN0SGFzaEtleTogYW55O1xuICBwcml2YXRlIHJlc3BvbnNlSGFzaEtleTogYW55O1xuICBwcml2YXRlIHByb2RpZDogYW55O1xuICBwcml2YXRlIHNpZ25hdHVyZTogYW55O1xuICBwcml2YXRlIGFtdDogYW55O1xuICBwcml2YXRlIHR4bmN1cnI6IGFueTtcbiAgcHJpdmF0ZSB0eG50eXBlOiBhbnk7XG4gIHByaXZhdGUgdHhuc2NhbXQ6IGFueTtcbiAgcHJpdmF0ZSB0eG5pZDogYW55O1xuICBwcml2YXRlIGN1c3RhY2M6IGFueTtcbiAgcHJpdmF0ZSByZXR1cm5VUkw6IGFueTtcbiAgcHJpdmF0ZSB1ZGYxOiBhbnk7XG4gIHByaXZhdGUgdWRmMjogYW55O1xuICBwcml2YXRlIHVkZjM6IGFueTtcbiAgcHJpdmF0ZSB1ZGY0OiBhbnk7XG4gIHByaXZhdGUgY2hpbGRXaW5kb3c6IGFueTtcbiAgcHJpdmF0ZSByZXNwb25zZTogYW55O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBzZXRMb2dpbmlkKGxvZ2luOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvZ2luSWQgPSBsb2dpbjtcbiAgfVxuXG4gIHNldFBhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gIH1cblxuICBzZXRVUkwodXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIHNldENsaWVudENvZGUoY2xpZW50Q29kZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jbGllbnRDb2RlID0gY2xpZW50Q29kZTtcbiAgfVxuXG4gIHNldFJlcXVlc3RIYXNrS2V5KHJlcXVlc3RIYXNoS2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlcXVlc3RIYXNoS2V5ID0gcmVxdWVzdEhhc2hLZXk7XG4gIH1cblxuICBzZXRSZXNwb25zZUhhc2hLZXkocmVzcG9uc2VIYXNoS2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlc3BvbnNlSGFzaEtleSA9IHJlc3BvbnNlSGFzaEtleTtcbiAgfVxuXG4gIHNldFByb2RJZChwcm9kaWQ6IHN0cmluZykge1xuICAgIHRoaXMucHJvZGlkID0gcHJvZGlkO1xuICB9XG5cbiAgc2V0VHhuSWQodHhuaWQ6IHN0cmluZykge1xuICAgIHRoaXMudHhuaWQgPSB0eG5pZDtcbiAgfVxuXG4gIHNldEN1c3RBY2MoY3VzdGFjYzogc3RyaW5nKSB7XG4gICAgdGhpcy5jdXN0YWNjID0gY3VzdGFjYztcbiAgfVxuXG4gIHNldEFtb3VudChhbXQ6IHN0cmluZykge1xuICAgIHRoaXMuYW10ID0gYW10O1xuICB9XG5cbiAgc2V0Q3VycmVuY3kodHhuY3Vycjogc3RyaW5nKSB7XG4gICAgdGhpcy50eG5jdXJyID0gdHhuY3VycjtcbiAgfVxuXG4gIHNldFR4blR5cGUodHhudHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy50eG50eXBlID0gdHhudHlwZTtcbiAgfVxuXG4gIHNldFJldHVyblVybChyZXR1cm5VUkw6IHN0cmluZykge1xuICAgIHRoaXMucmV0dXJuVVJMID0gJ2h0dHBzOi8vd3d3LmF0b210ZWNoLmluL2FuZ3VsYXIta2l0LWhhbmRsZS9wYXJhbXNfcmVzcG9uc2UucGhwJztcbiAgfVxuXG4gIHNldFR4bnNDYW10KHR4bnNjYW10OiBzdHJpbmcpIHtcbiAgICB0aGlzLnR4bnNjYW10ID0gdHhuc2NhbXQ7XG4gIH1cblxuICBzZXRDdXN0b21lck5hbWUodWRmMTogc3RyaW5nKSB7XG4gICAgdGhpcy51ZGYxID0gdWRmMTtcbiAgfVxuXG4gIHNldEN1c3RvbWVyRW1haWwodWRmMjogc3RyaW5nKSB7XG4gICAgdGhpcy51ZGYyID0gdWRmMjtcbiAgfVxuXG4gIHNldEN1c3RvbWVyTW9iaWxlKHVkZjM6IHN0cmluZykge1xuICAgIHRoaXMudWRmMyA9IHVkZjM7XG4gIH1cblxuICBzZXRDdXN0b21lckFkZHJlc3ModWRmNDogc3RyaW5nKSB7XG4gICAgdGhpcy51ZGY0ID0gdWRmNDtcbiAgfVxuXG4gIGdlbmVyYXRlQ2hlY2tzdW0oKSB7XG4gICAgdGhpcy5zaWduYXR1cmUgPSB0aGlzLmxvZ2luSWQgKyB0aGlzLnBhc3N3b3JkICsgdGhpcy50eG50eXBlICsgdGhpcy5wcm9kaWQgKyB0aGlzLnR4bmlkICsgdGhpcy5hbXQgKyB0aGlzLnR4bmN1cnI7XG4gICAgcmV0dXJuIGhhc2guc2hhNTEyLmhtYWModGhpcy5yZXF1ZXN0SGFzaEtleSwgdGhpcy5zaWduYXR1cmUpO1xuICB9XG5cblxuXG4gIHBheU5vdygpIHtcblxuICAgIGxldCB1cmxUb1BheSA9IHRoaXMudXJsO1xuICAgIHVybFRvUGF5ICs9ICc/bG9naW49JyArIHRoaXMubG9naW5JZDtcbiAgICB1cmxUb1BheSArPSAnJnBhc3M9JyArIHRoaXMucGFzc3dvcmQ7XG4gICAgdXJsVG9QYXkgKz0gJyZ0dHlwZT0nICsgdGhpcy50eG50eXBlO1xuICAgIHVybFRvUGF5ICs9ICcmcHJvZGlkPScgKyB0aGlzLnByb2RpZDtcbiAgICB1cmxUb1BheSArPSAnJmFtdD0nICsgdGhpcy5hbXQ7XG4gICAgdXJsVG9QYXkgKz0gJyZ0eG5jdXJyPScgKyB0aGlzLnR4bmN1cnI7XG4gICAgdXJsVG9QYXkgKz0gJyZ0eG5zY2FtdD0nICsgdGhpcy50eG5zY2FtdDtcbiAgICB1cmxUb1BheSArPSAnJmNsaWVudGNvZGU9JyArIGJ0b2EodGhpcy5jbGllbnRDb2RlKTtcbiAgICB1cmxUb1BheSArPSAnJnR4bmlkPScgKyB0aGlzLnR4bmlkO1xuICAgIHVybFRvUGF5ICs9ICcmZGF0ZT0nICsgdGhpcy5mb3JtYXREYXRlKG5ldyBEYXRlKTtcbiAgICB1cmxUb1BheSArPSAnJmN1c3RhY2M9JyArIHRoaXMuY3VzdGFjYztcbiAgICB1cmxUb1BheSArPSAnJnJ1PScgKyB0aGlzLnJldHVyblVSTDtcbiAgICB1cmxUb1BheSArPSAnJnNpZ25hdHVyZT0nICsgdGhpcy5nZW5lcmF0ZUNoZWNrc3VtKCk7XG4gICAgdXJsVG9QYXkgKz0gJyZ1ZGYxPScgKyB0aGlzLnVkZjE7XG4gICAgdXJsVG9QYXkgKz0gJyZ1ZGYyPScgKyB0aGlzLnVkZjI7XG4gICAgdXJsVG9QYXkgKz0gJyZ1ZGYzPScgKyB0aGlzLnVkZjM7XG4gICAgdXJsVG9QYXkgKz0gJyZ1ZGY0PScgKyB0aGlzLnVkZjQ7XG4gICAgY29uc3QgdXJsID0gZW5jb2RlVVJJKHVybFRvUGF5KTtcbiAgICBsZXQgcmVzID0gbnVsbDtcblxuICAgIGNvbnN0IGxlZnQgPSAod2luZG93LnNjcmVlbi53aWR0aCAvIDIpIC0gKCgxMjAwIC8gMikgKyAxMCk7XG4gICAgY29uc3QgdG9wID0gJzIyJSc7XG5cbiAgICBjb25zdCBjaGlsZFdpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCwgJ0F0b20gUGF5bmV0eicsICdzdGF0dXM9bm8saGVpZ2h0PTYwMCx3aWR0aD0xMjAwLHJlc2l6YWJsZT15ZXMsbGVmdD0nXG4gICAgICArIGxlZnQgKyAnLHRvcD0nICsgdG9wICsgJyxzY3JlZW5YPScgKyBsZWZ0ICsgJyxzY3JlZW5ZPSdcbiAgICAgICsgdG9wICsgJyx0b29sYmFyPW5vLG1lbnViYXI9bm8sc2Nyb2xsYmFycz1ubyxsb2NhdGlvbj1ubyxkaXJlY3Rvcmllcz1ubycpO1xuXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5vcmlnaW4gPT09ICdodHRwczovL3d3dy5hdG9tdGVjaC5pbicpIHtcbiAgICAgICAgICByZXMgPSBlLmRhdGE7XG4gICAgICAgICAgY2hpbGRXaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSwgZmFsc2UpO1xuICAgICAgY29uc3QgaW50ZXJ2YWxJRCA9IHdpbmRvdy5zZXRJbnRlcnZhbChjaGVja1dpbmRvdywgNTAwKTtcbiAgICAgIGZ1bmN0aW9uIGNoZWNrV2luZG93KGU6IGFueSkge1xuICAgICAgICBpZiAoY2hpbGRXaW5kb3cgJiYgY2hpbGRXaW5kb3cuY2xvc2VkKSB7XG4gICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgdGhpcy5yZXNwb25zZSA9IHJlcztcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgICAgICAgZGF0YTogcmVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgc3RhdHVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgZGF0YTogJ3BheW1lbnQgbm90IGNvbXBsZXRlZCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG5cbiAgfVxuXG4gIHZhbGlkYXRlUmVzcG9uc2UobW1wX3R4bjogYW55LCBtZXJfdHhuOiBhbnksIGZfY29kZTogYW55LCBwcm9kOiBhbnksIGRpc2NyaW1pbmF0b3I6IGFueSwgYW10OiBhbnksIGJhbmtfdHhuOiBhbnksIHNpZ25hdHVyZTogYW55KSB7XG4gICAgY29uc3Qgc3RyaW5nX3ZlcmlmeSA9IG1tcF90eG4gKyBtZXJfdHhuICsgZl9jb2RlICsgcHJvZCArIGRpc2NyaW1pbmF0b3IgKyBhbXQgKyBiYW5rX3R4bjtcbiAgICBjb25zdCBzaWcgPSBoYXNoLnNoYTUxMi5obWFjKHRoaXMucmVzcG9uc2VIYXNoS2V5LCBzdHJpbmdfdmVyaWZ5KTtcblxuICAgIGlmIChzaWduYXR1cmUgPT09IHNpZykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3N0YXR1cyc6IHRydWUsXG4gICAgICAgICdtZXNzYWdlJzogJ1NpZ25hdHVyZSBtYXRjaGVkID0gJyArIHNpZyArICcgPSAnICsgdGhpcy5yZXNwb25zZUhhc2hLZXlcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdzdGF0dXMnOiBmYWxzZSxcbiAgICAgICAgJ21lc3NhZ2UnOiAnU2lnbmF0dXJlIG1pc21hdGNoZWQgPSAnICsgc2lnICsgJyA9ICcgKyB0aGlzLnJlc3BvbnNlSGFzaEtleVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBmb3JtYXREYXRlKGRhdGU6IGFueSkge1xuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIGxldCBtb250aEluZGV4ID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IHNlY29uZCA9IGRhdGUuZ2V0U2Vjb25kcygpO1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgICBpZiAobW9udGhJbmRleCA8IDEwKSB7XG4gICAgICBtb250aEluZGV4ID0gJzAnICsgbW9udGhJbmRleDtcbiAgICB9XG4gICAgcmV0dXJuIGRheSArICcvJyArIE51bWJlcihtb250aEluZGV4KSArICcvJyArIHllYXIgKyAnICcgKyBob3VycyArICc6JyArIG1pbnV0ZXMgKyAnOicgKyBzZWNvbmQ7XG4gIH1cblxufVxuIl19