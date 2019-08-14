/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as hash from 'js-sha512';
export class ProcessPaymentComponent {
    constructor() {
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
        this.get_response = () => {
            return this.response;
        };
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
        const top = (window.screen.height / 2) - ((850 / 2) + 10);
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
    /** @type {?} */
    ProcessPaymentComponent.prototype.get_response;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvY2Vzc1BheW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmc2LWF0b20tcGF5bmV0ei8iLCJzb3VyY2VzIjpbImxpYi9Qcm9jZXNzUGF5bWVudC9Qcm9jZXNzUGF5bWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxLQUFLLElBQUksTUFBTSxXQUFXLENBQUM7QUFhbEMsTUFBTTtJQXVCSjt1QkFyQmtCLEVBQUU7d0JBQ0QsRUFBRTttQkFDUCxFQUFFOzBCQUNLLEVBQUU7OEJBQ0UsRUFBRTsrQkFDRCxFQUFFO3NCQUNYLEVBQUU7eUJBQ0MsRUFBRTttQkFDUixFQUFFO3VCQUNFLEVBQUU7dUJBQ0YsRUFBRTt3QkFDRCxFQUFFO3FCQUNMLEVBQUU7dUJBQ0EsRUFBRTt5QkFDQSxFQUFFO29CQUNQLEVBQUU7b0JBQ0YsRUFBRTtvQkFDRixFQUFFO29CQUNGLEVBQUU7NEJBeUpGLEdBQUcsRUFBRTtZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0QjtLQXZKQTs7OztJQUdELFFBQVE7S0FDUDs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztLQUN0Qjs7Ozs7SUFFRCxXQUFXLENBQUMsUUFBZ0I7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FDMUI7Ozs7O0lBRUQsTUFBTSxDQUFDLEdBQVc7UUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7S0FDaEI7Ozs7O0lBRUQsYUFBYSxDQUFDLFVBQWtCO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0tBQzlCOzs7OztJQUVELGlCQUFpQixDQUFDLGNBQXNCO1FBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0tBQ3RDOzs7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QU0sQ0FBQztLQUNqRzs7O1lBek5GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Q0FHWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBoYXNoIGZyb20gJ2pzLXNoYTUxMic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jb25maWcnLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBjb25maWcgd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5cblxuXG5leHBvcnQgY2xhc3MgUHJvY2Vzc1BheW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgbG9naW5JZCA9ICcnO1xuICBwcml2YXRlIHBhc3N3b3JkID0gJyc7XG4gIHByaXZhdGUgdXJsID0gJyc7XG4gIHByaXZhdGUgY2xpZW50Q29kZSA9ICcnO1xuICBwcml2YXRlIHJlcXVlc3RIYXNoS2V5ID0gJyc7XG4gIHByaXZhdGUgcmVzcG9uc2VIYXNoS2V5ID0gJyc7XG4gIHByaXZhdGUgcHJvZGlkID0gJyc7XG4gIHByaXZhdGUgc2lnbmF0dXJlID0gJyc7XG4gIHByaXZhdGUgYW10ID0gJyc7XG4gIHByaXZhdGUgdHhuY3VyciA9ICcnO1xuICBwcml2YXRlIHR4bnR5cGUgPSAnJztcbiAgcHJpdmF0ZSB0eG5zY2FtdCA9ICcnO1xuICBwcml2YXRlIHR4bmlkID0gJyc7XG4gIHByaXZhdGUgY3VzdGFjYyA9ICcnO1xuICBwcml2YXRlIHJldHVyblVSTCA9ICcnO1xuICBwcml2YXRlIHVkZjEgPSAnJztcbiAgcHJpdmF0ZSB1ZGYyID0gJyc7XG4gIHByaXZhdGUgdWRmMyA9ICcnO1xuICBwcml2YXRlIHVkZjQgPSAnJztcbiAgcHJpdmF0ZSBjaGlsZFdpbmRvdzogYW55O1xuICBwcml2YXRlIHJlc3BvbnNlOiBhbnk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNldExvZ2luaWQobG9naW46IHN0cmluZykge1xuICAgIHRoaXMubG9naW5JZCA9IGxvZ2luO1xuICB9XG5cbiAgc2V0UGFzc3dvcmQocGFzc3dvcmQ6IHN0cmluZykge1xuICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgfVxuXG4gIHNldFVSTCh1cmw6IHN0cmluZykge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICB9XG5cbiAgc2V0Q2xpZW50Q29kZShjbGllbnRDb2RlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNsaWVudENvZGUgPSBjbGllbnRDb2RlO1xuICB9XG5cbiAgc2V0UmVxdWVzdEhhc2tLZXkocmVxdWVzdEhhc2hLZXk6IHN0cmluZykge1xuICAgIHRoaXMucmVxdWVzdEhhc2hLZXkgPSByZXF1ZXN0SGFzaEtleTtcbiAgfVxuXG4gIHNldFJlc3BvbnNlSGFzaEtleShyZXNwb25zZUhhc2hLZXk6IHN0cmluZykge1xuICAgIHRoaXMucmVzcG9uc2VIYXNoS2V5ID0gcmVzcG9uc2VIYXNoS2V5O1xuICB9XG5cbiAgc2V0UHJvZElkKHByb2RpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5wcm9kaWQgPSBwcm9kaWQ7XG4gIH1cblxuICBzZXRUeG5JZCh0eG5pZDogc3RyaW5nKSB7XG4gICAgdGhpcy50eG5pZCA9IHR4bmlkO1xuICB9XG5cbiAgc2V0Q3VzdEFjYyhjdXN0YWNjOiBzdHJpbmcpIHtcbiAgICB0aGlzLmN1c3RhY2MgPSBjdXN0YWNjO1xuICB9XG5cbiAgc2V0QW1vdW50KGFtdDogc3RyaW5nKSB7XG4gICAgdGhpcy5hbXQgPSBhbXQ7XG4gIH1cblxuICBzZXRDdXJyZW5jeSh0eG5jdXJyOiBzdHJpbmcpIHtcbiAgICB0aGlzLnR4bmN1cnIgPSB0eG5jdXJyO1xuICB9XG5cbiAgc2V0VHhuVHlwZSh0eG50eXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnR4bnR5cGUgPSB0eG50eXBlO1xuICB9XG5cbiAgc2V0UmV0dXJuVXJsKHJldHVyblVSTDogc3RyaW5nKSB7XG4gICAgdGhpcy5yZXR1cm5VUkwgPSAnaHR0cHM6Ly93d3cuYXRvbXRlY2guaW4vYW5ndWxhci1raXQtaGFuZGxlL3BhcmFtc19yZXNwb25zZS5waHAnO1xuICB9XG5cbiAgc2V0VHhuc0NhbXQodHhuc2NhbXQ6IHN0cmluZykge1xuICAgIHRoaXMudHhuc2NhbXQgPSB0eG5zY2FtdDtcbiAgfVxuXG4gIHNldEN1c3RvbWVyTmFtZSh1ZGYxOiBzdHJpbmcpIHtcbiAgICB0aGlzLnVkZjEgPSB1ZGYxO1xuICB9XG5cbiAgc2V0Q3VzdG9tZXJFbWFpbCh1ZGYyOiBzdHJpbmcpIHtcbiAgICB0aGlzLnVkZjIgPSB1ZGYyO1xuICB9XG5cbiAgc2V0Q3VzdG9tZXJNb2JpbGUodWRmMzogc3RyaW5nKSB7XG4gICAgdGhpcy51ZGYzID0gdWRmMztcbiAgfVxuXG4gIHNldEN1c3RvbWVyQWRkcmVzcyh1ZGY0OiBzdHJpbmcpIHtcbiAgICB0aGlzLnVkZjQgPSB1ZGY0O1xuICB9XG5cbiAgZ2VuZXJhdGVDaGVja3N1bSgpIHtcbiAgICB0aGlzLnNpZ25hdHVyZSA9IHRoaXMubG9naW5JZCArIHRoaXMucGFzc3dvcmQgKyB0aGlzLnR4bnR5cGUgKyB0aGlzLnByb2RpZCArIHRoaXMudHhuaWQgKyB0aGlzLmFtdCArIHRoaXMudHhuY3VycjtcbiAgICByZXR1cm4gaGFzaC5zaGE1MTIuaG1hYyh0aGlzLnJlcXVlc3RIYXNoS2V5LCB0aGlzLnNpZ25hdHVyZSk7XG4gIH1cblxuXG5cbiAgcGF5Tm93KCkge1xuXG4gICAgbGV0IHVybFRvUGF5ID0gdGhpcy51cmw7XG4gICAgdXJsVG9QYXkgKz0gJz9sb2dpbj0nICsgdGhpcy5sb2dpbklkO1xuICAgIHVybFRvUGF5ICs9ICcmcGFzcz0nICsgdGhpcy5wYXNzd29yZDtcbiAgICB1cmxUb1BheSArPSAnJnR0eXBlPScgKyB0aGlzLnR4bnR5cGU7XG4gICAgdXJsVG9QYXkgKz0gJyZwcm9kaWQ9JyArIHRoaXMucHJvZGlkO1xuICAgIHVybFRvUGF5ICs9ICcmYW10PScgKyB0aGlzLmFtdDtcbiAgICB1cmxUb1BheSArPSAnJnR4bmN1cnI9JyArIHRoaXMudHhuY3VycjtcbiAgICB1cmxUb1BheSArPSAnJnR4bnNjYW10PScgKyB0aGlzLnR4bnNjYW10O1xuICAgIHVybFRvUGF5ICs9ICcmY2xpZW50Y29kZT0nICsgYnRvYSh0aGlzLmNsaWVudENvZGUpO1xuICAgIHVybFRvUGF5ICs9ICcmdHhuaWQ9JyArIHRoaXMudHhuaWQ7XG4gICAgdXJsVG9QYXkgKz0gJyZkYXRlPScgKyB0aGlzLmZvcm1hdERhdGUobmV3IERhdGUpO1xuICAgIHVybFRvUGF5ICs9ICcmY3VzdGFjYz0nICsgdGhpcy5jdXN0YWNjO1xuICAgIHVybFRvUGF5ICs9ICcmcnU9JyArIHRoaXMucmV0dXJuVVJMO1xuICAgIHVybFRvUGF5ICs9ICcmc2lnbmF0dXJlPScgKyB0aGlzLmdlbmVyYXRlQ2hlY2tzdW0oKTtcbiAgICB1cmxUb1BheSArPSAnJnVkZjE9JyArIHRoaXMudWRmMTtcbiAgICB1cmxUb1BheSArPSAnJnVkZjI9JyArIHRoaXMudWRmMjtcbiAgICB1cmxUb1BheSArPSAnJnVkZjM9JyArIHRoaXMudWRmMztcbiAgICB1cmxUb1BheSArPSAnJnVkZjQ9JyArIHRoaXMudWRmNDtcbiAgICBjb25zdCB1cmwgPSBlbmNvZGVVUkkodXJsVG9QYXkpO1xuICAgIGxldCByZXMgPSBudWxsO1xuXG4gICAgY29uc3QgbGVmdCA9ICh3aW5kb3cuc2NyZWVuLndpZHRoIC8gMikgLSAoKDEyMDAgLyAyKSArIDEwKTtcbiAgICBjb25zdCB0b3AgPSAod2luZG93LnNjcmVlbi5oZWlnaHQgLyAyKSAtICgoODUwIC8gMikgKyAxMCk7XG5cbiAgICBjb25zdCBjaGlsZFdpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCwgJ0F0b20gUGF5bmV0eicsICdzdGF0dXM9bm8saGVpZ2h0PTYwMCx3aWR0aD0xMjAwLHJlc2l6YWJsZT15ZXMsbGVmdD0nXG4gICAgICArIGxlZnQgKyAnLHRvcD0nICsgdG9wICsgJyxzY3JlZW5YPScgKyBsZWZ0ICsgJyxzY3JlZW5ZPSdcbiAgICAgICsgdG9wICsgJyx0b29sYmFyPW5vLG1lbnViYXI9bm8sc2Nyb2xsYmFycz1ubyxsb2NhdGlvbj1ubyxkaXJlY3Rvcmllcz1ubycpO1xuICAgIC8vIGNvbnN0IGNoaWxkV2luZG93ID0gd2luZG93Lm9wZW4odXJsLCAnQXRvbSBQYXluZXR6JywgJ3dpZHRoPTExMDAsIGhlaWdodD05MDAnKTtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLm9yaWdpbiA9PT0gJ2h0dHBzOi8vd3d3LmF0b210ZWNoLmluJykge1xuICAgICAgICAgIHJlcyA9IGUuZGF0YTtcbiAgICAgICAgICBjaGlsZFdpbmRvdy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9LCBmYWxzZSk7XG4gICAgICBjb25zdCBpbnRlcnZhbElEID0gd2luZG93LnNldEludGVydmFsKGNoZWNrV2luZG93LCA1MDApO1xuICAgICAgZnVuY3Rpb24gY2hlY2tXaW5kb3coZTogYW55KSB7XG4gICAgICAgIGlmIChjaGlsZFdpbmRvdyAmJiBjaGlsZFdpbmRvdy5jbG9zZWQpIHtcbiAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlID0gcmVzO1xuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgICAgICAgICBkYXRhOiByZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICBzdGF0dXM6IGZhbHNlLFxuICAgICAgICAgICAgICBkYXRhOiAncGF5bWVudCBub3QgY29tcGxldGVkJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcblxuICB9XG5cbiAgZ2V0X3Jlc3BvbnNlID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnJlc3BvbnNlO1xuICB9XG5cblxuICB2YWxpZGF0ZVJlc3BvbnNlKG1tcF90eG46IGFueSwgbWVyX3R4bjogYW55LCBmX2NvZGU6IGFueSwgcHJvZDogYW55LCBkaXNjcmltaW5hdG9yOiBhbnksIGFtdDogYW55LCBiYW5rX3R4bjogYW55LCBzaWduYXR1cmU6IGFueSkge1xuICAgIGNvbnN0IHN0cmluZ192ZXJpZnkgPSBtbXBfdHhuICsgbWVyX3R4biArIGZfY29kZSArIHByb2QgKyBkaXNjcmltaW5hdG9yICsgYW10ICsgYmFua190eG47XG4gICAgY29uc3Qgc2lnID0gaGFzaC5zaGE1MTIuaG1hYyh0aGlzLnJlc3BvbnNlSGFzaEtleSwgc3RyaW5nX3ZlcmlmeSk7XG5cbiAgICBpZiAoc2lnbmF0dXJlID09PSBzaWcpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdzdGF0dXMnOiB0cnVlLFxuICAgICAgICAnbWVzc2FnZSc6ICdTaWduYXR1cmUgbWF0Y2hlZCA9ICcgKyBzaWcgKyAnID0gJyArIHRoaXMucmVzcG9uc2VIYXNoS2V5XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnc3RhdHVzJzogZmFsc2UsXG4gICAgICAgICdtZXNzYWdlJzogJ1NpZ25hdHVyZSBtaXNtYXRjaGVkID0gJyArIHNpZyArICcgPSAnICsgdGhpcy5yZXNwb25zZUhhc2hLZXlcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZm9ybWF0RGF0ZShkYXRlOiBhbnkpIHtcbiAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICBsZXQgbW9udGhJbmRleCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBzZWNvbmQgPSBkYXRlLmdldFNlY29uZHMoKTtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBjb25zdCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgaWYgKG1vbnRoSW5kZXggPCAxMCkge1xuICAgICAgbW9udGhJbmRleCA9ICcwJyArIG1vbnRoSW5kZXg7XG4gICAgfVxuICAgIHJldHVybiBkYXkgKyAnLycgKyBOdW1iZXIobW9udGhJbmRleCkgKyAnLycgKyB5ZWFyICsgJyAnICsgaG91cnMgKyAnOicgKyBtaW51dGVzICsgJzonICsgc2Vjb25kO1xuICB9XG5cbn1cbiJdfQ==