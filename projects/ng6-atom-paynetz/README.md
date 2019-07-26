# ng6-atom-paynetz

This documentaion briefly describes the mode/ manner of technical integration between Atom Payment
Gateway and Merchant Website in respect of powering online transactions by using Angular 6. This library is only tested :

* Angular CLI: 6.0.8
* Node: 10.16.0
* OS: win32 x64
* Angular: 6.1.10

## Process

* Customer logs-in at the merchant website and selects the product / service to purchase.
Based on the purchase amount, appropriate transaction amount would be computed at the
merchant website.

* Customer then decides to make payment at merchantwebsite.

* Merchant website will log the order by generating a unique Order Number; and establish a
connection with the Atom Electronic Payment Interface

* The customer lands on the Atom Payment Page where the customer is displayed with
various ‘payment options’ that can be used. These would include–Credit Card; Debit Card;
Online Net Banking.

* Customer chooses the payment option at Atom Payment Page, and is further redirected to
the page of that respective bank. Customer then enters the relevant authentication details
[i.e. User ID/ Card Number/ Password] at the bank’s website; and then is requested to
authorizethe payment amount.

* Customer’s account is debited and the Customer is then redirected back to the designated
Return URL at Merchant website where the status of the transactions is displayed to the
customer.

* The Atom Electronic Payment Interface will provide the return response to the designated
Merchant return URL. Merchant can use this response to update its system and display the
transaction status to the customer.

* The Atom Electronic Payment Interface also generates a unique Transaction ID against each
order number that isreceived.


## Create an Angular 6 App

Run `ng new myAtomApp`

## Library Installation

Run `npm i ng6-atom-paynetz` to install this library.

## Component Configuration 

In  `src/app/app.component.ts` 

Import :
`import { ProcessPaymentComponent } from 'ng6-atom-paynetz';`

Set the values in your constructor as below :
`constructor () {
    const _atom = new ProcessPaymentComponent();
    _atom.setURL('https://paynetzuat.atomtech.in/paynetz/epi/fts');
    _atom.setLoginid('197');
    _atom.setPassword('Test@123');
    _atom.setClientCode('NAVIN');
    _atom.setCurrency('INR');
    _atom.setAmount('50.00');
    _atom.setCustomerAddress('Address');
    _atom.setCustomerEmail('myemail@gmail.com');
    _atom.setCustomerMobile('1234567890');
    _atom.setCustomerName('MyFirstName SecondName');
    _atom.setProdId('NSE');
    _atom.setCustAcc('000000');
    _atom.setRequestHaskKey('KEY123657234');
    _atom.setResponseHashKey('KEYRESP123657234');
    _atom.setReturnUrl('https://paynetzuat.atomtech.in/paynetzclient/ResponseParam.jsp');
    _atom.setTxnId('234');
    _atom.setTxnType('NBFundTransfer');
    _atom.setTxnsCamt('0');
    const url = _atom.payNow();
    console.log(url);
  }`


## Methods

Method name  |  Default | Mandatory | Description
------------- | ------------- | --------------------| -----------------|
setURL  |  |  yes | Atom provided URL or IP for test : https://paynetzuat.atomtech.in/paynetz/epi/fts
setLoginid  |  |  yes | Login ID obtained on registration of Merchant URL's and IP for test : 197
setPassword  |  |  yes | Password obtained on registration of Merchant URL's and IP for test : Test@123
setClientCode  |  |  yes | Atom provide you the client code, for test :Navin
setCurrency  |  |  yes | It sets the currency, always INR
setAmount  |  |  yes | It sets the amount you want to pay, for test 50.00
setCustomerAddress  |  |  yes | It will set the customers address
setCustomerEmail  |  |  yes | It will set the customers email
setCustomerMobile  |  |  yes | It will set the customers mobile
setCustomerName  |  |  yes | It will set the customers name
setProdId  |  |  yes | It will set the product id and you will get the details from atom, for test use NSE
setCustAcc  |  |  yes | It will set the customer account and you will get the details from atom if you are a reseller else pass '000000', for test use '000000'
setRequestHaskKey |  | yes | It will set Request Hash Key, you will get this value from atom for test use KEY123657234
setResponseHaskKey |  | yes | It will set Response Hash Key, you will get this value from atom for test use KEYRESP123657234
setReturnUrl |  | yes | It will set Return URl, you will the response from atom in this page
setTxnId |  | yes | It will set the transaction id and it should be unique
setTxnType |  | yes | It will set the transaction type e.g. CC,DC,NBFundTransfer
setTxnsCamt |  | yes | It will set the Customer Account No. if you are Broker or Reseller for test use "0"
payNow |  |  | It will generate the url for payment



## Further help

To get more help on this library please visit https://www.atomtech.in
