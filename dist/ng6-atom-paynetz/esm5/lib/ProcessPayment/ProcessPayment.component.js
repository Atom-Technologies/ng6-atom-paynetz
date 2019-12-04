import { Component } from '@angular/core';
import * as hash from 'js-sha512';
var ProcessPaymentComponent = /** @class */ (function () {
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
        { type: Component, args: [{
                    selector: 'lib-config',
                    template: "<p>\n  config works!\n</p>\n",
                    styles: [""]
                },] },
    ];
    ProcessPaymentComponent.ctorParameters = function () { return []; };
    return ProcessPaymentComponent;
}());
export { ProcessPaymentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvY2Vzc1BheW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmc2LWF0b20tcGF5bmV0ei8iLCJzb3VyY2VzIjpbImxpYi9Qcm9jZXNzUGF5bWVudC9Qcm9jZXNzUGF5bWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEtBQUssSUFBSSxNQUFNLFdBQVcsQ0FBQztBQUVsQztJQWtDRTtRQVJRLFFBQUcsR0FBRyxJQUFJLENBQUM7UUFDWCxXQUFNLEdBQUcsSUFBSSxDQUFDO0lBUXRCLENBQUM7SUFHRCwwQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDRDQUFVLEdBQVYsVUFBVyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw2Q0FBVyxHQUFYLFVBQVksUUFBZ0I7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVELHdDQUFNLEdBQU4sVUFBTyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFFRCwrQ0FBYSxHQUFiLFVBQWMsVUFBa0I7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUVELG1EQUFpQixHQUFqQixVQUFrQixjQUFzQjtRQUN0QyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsb0RBQWtCLEdBQWxCLFVBQW1CLGVBQXVCO1FBQ3hDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0lBQ3pDLENBQUM7SUFFRCwyQ0FBUyxHQUFULFVBQVUsTUFBYztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQsMENBQVEsR0FBUixVQUFTLEtBQWE7UUFDcEIs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Q0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQyxFQUFFLENBQUMsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQixVQUFVLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQztRQUNoQyxDQUFDO1FBQ0QsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7SUFDbEcsQ0FBQzs7Z0JBcE9GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLDhCQUdYO29CQUNDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDYjs7O0lBK05ELDhCQUFDO0NBQUEsQUF0T0QsSUFzT0M7U0E3TlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgaGFzaCBmcm9tICdqcy1zaGE1MTInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItY29uZmlnJyxcclxuICB0ZW1wbGF0ZTogYDxwPlxyXG4gIGNvbmZpZyB3b3JrcyFcclxuPC9wPlxyXG5gLFxyXG4gIHN0eWxlczogW2BgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2Nlc3NQYXltZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcHJpdmF0ZSBsb2dpbklkOiBhbnk7XHJcbiAgcHJpdmF0ZSBwYXNzd29yZDogYW55O1xyXG4gIHByaXZhdGUgdXJsOiBhbnk7XHJcbiAgcHJpdmF0ZSBjbGllbnRDb2RlOiBhbnk7XHJcbiAgcHJpdmF0ZSByZXF1ZXN0SGFzaEtleTogYW55O1xyXG4gIHByaXZhdGUgcmVzcG9uc2VIYXNoS2V5OiBhbnk7XHJcbiAgcHJpdmF0ZSBwcm9kaWQ6IGFueTtcclxuICBwcml2YXRlIHNpZ25hdHVyZTogYW55O1xyXG4gIHByaXZhdGUgYW10OiBhbnk7XHJcbiAgcHJpdmF0ZSB0eG5jdXJyOiBhbnk7XHJcbiAgcHJpdmF0ZSB0eG50eXBlOiBhbnk7XHJcbiAgcHJpdmF0ZSB0eG5zY2FtdDogYW55O1xyXG4gIHByaXZhdGUgdHhuaWQ6IGFueTtcclxuICBwcml2YXRlIGN1c3RhY2M6IGFueTtcclxuICBwcml2YXRlIHJldHVyblVSTDogYW55O1xyXG4gIHByaXZhdGUgbWRkID0gbnVsbDtcclxuICBwcml2YXRlIGJhbmtJZCA9IG51bGw7XHJcbiAgcHJpdmF0ZSB1ZGYxOiBhbnk7XHJcbiAgcHJpdmF0ZSB1ZGYyOiBhbnk7XHJcbiAgcHJpdmF0ZSB1ZGYzOiBhbnk7XHJcbiAgcHJpdmF0ZSB1ZGY0OiBhbnk7XHJcbiAgcHJpdmF0ZSBjaGlsZFdpbmRvdzogYW55O1xyXG4gIHByaXZhdGUgcmVzcG9uc2U6IGFueTtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIHNldExvZ2luaWQobG9naW46IHN0cmluZykge1xyXG4gICAgdGhpcy5sb2dpbklkID0gbG9naW47XHJcbiAgfVxyXG5cclxuICBzZXRQYXNzd29yZChwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XHJcbiAgfVxyXG5cclxuICBzZXRVUkwodXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudXJsID0gdXJsO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2xpZW50Q29kZShjbGllbnRDb2RlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY2xpZW50Q29kZSA9IGNsaWVudENvZGU7XHJcbiAgfVxyXG5cclxuICBzZXRSZXF1ZXN0SGFza0tleShyZXF1ZXN0SGFzaEtleTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnJlcXVlc3RIYXNoS2V5ID0gcmVxdWVzdEhhc2hLZXk7XHJcbiAgfVxyXG5cclxuICBzZXRSZXNwb25zZUhhc2hLZXkocmVzcG9uc2VIYXNoS2V5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMucmVzcG9uc2VIYXNoS2V5ID0gcmVzcG9uc2VIYXNoS2V5O1xyXG4gIH1cclxuXHJcbiAgc2V0UHJvZElkKHByb2RpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnByb2RpZCA9IHByb2RpZDtcclxuICB9XHJcblxyXG4gIHNldFR4bklkKHR4bmlkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudHhuaWQgPSB0eG5pZDtcclxuICB9XHJcblxyXG4gIHNldEN1c3RBY2MoY3VzdGFjYzogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmN1c3RhY2MgPSBjdXN0YWNjO1xyXG4gIH1cclxuXHJcbiAgc2V0QW1vdW50KGFtdDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmFtdCA9IGFtdDtcclxuICB9XHJcblxyXG4gIHNldEN1cnJlbmN5KHR4bmN1cnI6IHN0cmluZykge1xyXG4gICAgdGhpcy50eG5jdXJyID0gdHhuY3VycjtcclxuICB9XHJcblxyXG4gIHNldFR4blR5cGUodHhudHlwZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnR4bnR5cGUgPSB0eG50eXBlO1xyXG4gIH1cclxuXHJcbiAgc2V0UmV0dXJuVXJsKHJldHVyblVSTDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnJldHVyblVSTCA9ICdodHRwczovL3d3dy5hdG9tdGVjaC5pbi9hbmd1bGFyLWtpdC1oYW5kbGUvcGFyYW1zX3Jlc3BvbnNlLnBocCc7XHJcbiAgfVxyXG5cclxuICBzZXRUeG5zQ2FtdCh0eG5zY2FtdDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnR4bnNjYW10ID0gdHhuc2NhbXQ7XHJcbiAgfVxyXG5cclxuICBzZXRDdXN0b21lck5hbWUodWRmMTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnVkZjEgPSB1ZGYxO1xyXG4gIH1cclxuXHJcbiAgc2V0Q3VzdG9tZXJFbWFpbCh1ZGYyOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudWRmMiA9IHVkZjI7XHJcbiAgfVxyXG5cclxuICBzZXRDdXN0b21lck1vYmlsZSh1ZGYzOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudWRmMyA9IHVkZjM7XHJcbiAgfVxyXG5cclxuICBzZXRDdXN0b21lckFkZHJlc3ModWRmNDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnVkZjQgPSB1ZGY0O1xyXG4gIH1cclxuXHJcbiAgc2V0TWRkKG1kZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm1kZCA9IG1kZDtcclxuICB9XHJcblxyXG4gIHNldEJhbmtJZChiYW5rSWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5iYW5rSWQgPSBiYW5rSWQ7XHJcbiAgfVxyXG4gIGdlbmVyYXRlQ2hlY2tzdW0oKSB7XHJcbiAgICB0aGlzLnNpZ25hdHVyZSA9IHRoaXMubG9naW5JZCArIHRoaXMucGFzc3dvcmQgKyB0aGlzLnR4bnR5cGUgKyB0aGlzLnByb2RpZCArIHRoaXMudHhuaWQgKyB0aGlzLmFtdCArIHRoaXMudHhuY3VycjtcclxuICAgIHJldHVybiBoYXNoLnNoYTUxMi5obWFjKHRoaXMucmVxdWVzdEhhc2hLZXksIHRoaXMuc2lnbmF0dXJlKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcGF5Tm93KCkge1xyXG5cclxuICAgIGxldCB1cmxUb1BheSA9IHRoaXMudXJsO1xyXG4gICAgdXJsVG9QYXkgKz0gJz9sb2dpbj0nICsgdGhpcy5sb2dpbklkO1xyXG4gICAgdXJsVG9QYXkgKz0gJyZwYXNzPScgKyB0aGlzLnBhc3N3b3JkO1xyXG4gICAgdXJsVG9QYXkgKz0gJyZ0dHlwZT0nICsgdGhpcy50eG50eXBlO1xyXG4gICAgdXJsVG9QYXkgKz0gJyZwcm9kaWQ9JyArIHRoaXMucHJvZGlkO1xyXG4gICAgdXJsVG9QYXkgKz0gJyZhbXQ9JyArIHRoaXMuYW10O1xyXG4gICAgdXJsVG9QYXkgKz0gJyZ0eG5jdXJyPScgKyB0aGlzLnR4bmN1cnI7XHJcbiAgICB1cmxUb1BheSArPSAnJnR4bnNjYW10PScgKyB0aGlzLnR4bnNjYW10O1xyXG4gICAgdXJsVG9QYXkgKz0gJyZjbGllbnRjb2RlPScgKyBidG9hKHRoaXMuY2xpZW50Q29kZSk7XHJcbiAgICB1cmxUb1BheSArPSAnJnR4bmlkPScgKyB0aGlzLnR4bmlkO1xyXG4gICAgdXJsVG9QYXkgKz0gJyZkYXRlPScgKyB0aGlzLmZvcm1hdERhdGUobmV3IERhdGUpO1xyXG4gICAgdXJsVG9QYXkgKz0gJyZjdXN0YWNjPScgKyB0aGlzLmN1c3RhY2M7XHJcbiAgICB1cmxUb1BheSArPSAnJnJ1PScgKyB0aGlzLnJldHVyblVSTDtcclxuICAgIHVybFRvUGF5ICs9ICcmc2lnbmF0dXJlPScgKyB0aGlzLmdlbmVyYXRlQ2hlY2tzdW0oKTtcclxuICAgIHVybFRvUGF5ICs9ICcmdWRmMT0nICsgdGhpcy51ZGYxO1xyXG4gICAgdXJsVG9QYXkgKz0gJyZ1ZGYyPScgKyB0aGlzLnVkZjI7XHJcbiAgICB1cmxUb1BheSArPSAnJnVkZjM9JyArIHRoaXMudWRmMztcclxuICAgIHVybFRvUGF5ICs9ICcmdWRmND0nICsgdGhpcy51ZGY0O1xyXG5cclxuICAgIGlmICh0aGlzLm1kZCAhPSBudWxsKSB7XHJcbiAgICAgIHVybFRvUGF5ICs9ICcmbWRkPScgKyB0aGlzLm1kZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5iYW5rSWQgIT0gbnVsbCkge1xyXG4gICAgICB1cmxUb1BheSArPSAnJmJhbmtpZD0nICsgdGhpcy5iYW5rSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXJsID0gZW5jb2RlVVJJKHVybFRvUGF5KTtcclxuICAgIGxldCByZXMgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IGxlZnQgPSAod2luZG93LnNjcmVlbi53aWR0aCAvIDIpIC0gKCgxMjAwIC8gMikgKyAxMCk7XHJcbiAgICBjb25zdCB0b3AgPSAnMjIlJztcclxuXHJcbiAgICBjb25zdCBjaGlsZFdpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCwgJ0F0b20gUGF5bmV0eicsICdzdGF0dXM9bm8saGVpZ2h0PTYwMCx3aWR0aD0xMjAwLHJlc2l6YWJsZT15ZXMsbGVmdD0nXHJcbiAgICAgICsgbGVmdCArICcsdG9wPScgKyB0b3AgKyAnLHNjcmVlblg9JyArIGxlZnQgKyAnLHNjcmVlblk9J1xyXG4gICAgICArIHRvcCArICcsdG9vbGJhcj1ubyxtZW51YmFyPW5vLHNjcm9sbGJhcnM9bm8sbG9jYXRpb249bm8sZGlyZWN0b3JpZXM9bm8nKTtcclxuXHJcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZS5vcmlnaW4gPT09ICdodHRwczovL3d3dy5hdG9tdGVjaC5pbicpIHtcclxuICAgICAgICAgIHJlcyA9IGUuZGF0YTtcclxuICAgICAgICAgIGNoaWxkV2luZG93LmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBmYWxzZSk7XHJcbiAgICAgIGNvbnN0IGludGVydmFsSUQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoY2hlY2tXaW5kb3csIDUwMCk7XHJcbiAgICAgIGZ1bmN0aW9uIGNoZWNrV2luZG93KGU6IGFueSkge1xyXG4gICAgICAgIGlmIChjaGlsZFdpbmRvdyAmJiBjaGlsZFdpbmRvdy5jbG9zZWQpIHtcclxuICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb25zZSA9IHJlcztcclxuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcclxuICAgICAgICAgICAgICBkYXRhOiByZXMsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsSUQpO1xyXG4gICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICBzdGF0dXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGRhdGE6ICdwYXltZW50IG5vdCBjb21wbGV0ZWQnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcHJvbWlzZTtcclxuXHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZVJlc3BvbnNlKG1tcF90eG46IGFueSwgbWVyX3R4bjogYW55LCBmX2NvZGU6IGFueSwgcHJvZDogYW55LCBkaXNjcmltaW5hdG9yOiBhbnksIGFtdDogYW55LCBiYW5rX3R4bjogYW55LCBzaWduYXR1cmU6IGFueSkge1xyXG4gICAgY29uc3Qgc3RyaW5nX3ZlcmlmeSA9IG1tcF90eG4gKyBtZXJfdHhuICsgZl9jb2RlICsgcHJvZCArIGRpc2NyaW1pbmF0b3IgKyBhbXQgKyBiYW5rX3R4bjtcclxuICAgIGNvbnN0IHNpZyA9IGhhc2guc2hhNTEyLmhtYWModGhpcy5yZXNwb25zZUhhc2hLZXksIHN0cmluZ192ZXJpZnkpO1xyXG5cclxuICAgIGlmIChzaWduYXR1cmUgPT09IHNpZykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICdzdGF0dXMnOiB0cnVlLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1NpZ25hdHVyZSBtYXRjaGVkID0gJyArIHNpZyArICcgPSAnICsgdGhpcy5yZXNwb25zZUhhc2hLZXlcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgJ3N0YXR1cyc6IGZhbHNlLFxyXG4gICAgICAgICdtZXNzYWdlJzogJ1NpZ25hdHVyZSBtaXNtYXRjaGVkID0gJyArIHNpZyArICcgPSAnICsgdGhpcy5yZXNwb25zZUhhc2hLZXlcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvcm1hdERhdGUoZGF0ZTogYW55KSB7XHJcbiAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuICAgIGxldCBtb250aEluZGV4ID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBzZWNvbmQgPSBkYXRlLmdldFNlY29uZHMoKTtcclxuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgY29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgaWYgKG1vbnRoSW5kZXggPCAxMCkge1xyXG4gICAgICBtb250aEluZGV4ID0gJzAnICsgbW9udGhJbmRleDtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXkgKyAnLycgKyBOdW1iZXIobW9udGhJbmRleCkgKyAnLycgKyB5ZWFyICsgJyAnICsgaG91cnMgKyAnOicgKyBtaW51dGVzICsgJzonICsgc2Vjb25kO1xyXG4gIH1cclxuXHJcbn1cclxuIl19