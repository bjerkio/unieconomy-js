[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url] [![MIT License][license-image]][license-url][![Build Status](https://travis-ci.org/Bjerkio/tripletexjs.svg?branch=master)](https://travis-ci.org/Bjerkio/tripletexjs)

![](https://raw.githubusercontent.com/Bjerkio/tripletexjs.github.io/master/header.jpg)

## Tripletex 2.0 Node.js / Javascript / Typescript API Wrapper

A wrapper for Tripletex 2.0 API in Typescript / Javascript.

- Build date: 2019-05-02T10:55:48.790Z

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Install it via:

```shell
npm install tripletexjs
```

## Getting Started with Typescript

Please follow the [installation](#installation) instruction and execute the following TS code:

```typescript
import { TokensessionApi, InvoiceApi } from 'tripletexjs';

const tokenSession = new TokensessionApi;

tokenSession.create('xxxx-xxxx-xxxx', 'xxxx-xxxx-xxxx', '2018-07-29T11:42:39.439Z').then(token => {
  const invoice = new InvoiceApi({
    username: '',
    password: token.value.token
  });

  invoice.get(100000).then(invoiceItem => {
    console.log(invoiceItem.value.amount);
  })

})
```

## Getting Started with Javascript

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
const tripletex = require('tripletexjs');

const tokenSession = new tripletex.TokensessionApi;

tokenSession.create('xxxx-xxxx-xxxx', 'xxxx-xxxx-xxxx', '2018-07-29T11:42:39.439Z').then(token => {
  const invoice = new tripletex.InvoiceApi({
    username: '',
    password: token.value.token
  });

  invoice.get(100000).then(invoiceItem => {
    console.log(invoiceItem.value.amount);
  })

})
```

## Documentation for API Endpoints

All URIs are relative to *https://tripletex.no/v2*


### ActivityApi

```typescript
import { ActivityApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](ActivityApi.md#get) | **GET** /activity/{id} | Find activity by ID.
 | [**getForTimeSheet**](ActivityApi.md#getForTimeSheet) | **GET** /activity/&gt;forTimeSheet | Find applicable time sheet activities for an employee on a specific day.
 | [**search**](ActivityApi.md#search) | **GET** /activity | Find activities corresponding with sent data.

### AddressApi

```typescript
import { AddressApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](AddressApi.md#get) | **GET** /address/{id} | Get address by ID.
 | [**put**](AddressApi.md#put) | **PUT** /address/{id} | Update address. 
 | [**search**](AddressApi.md#search) | **GET** /address | Find addresses corresponding with sent data.

### BankApi

```typescript
import { BankApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**search**](BankApi.md#search) | **GET** /bank | [BETA] Find bank corresponding with sent data.

### BankreconciliationApi

```typescript
import { BankreconciliationApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**_delete**](BankreconciliationApi.md#_delete) | **DELETE** /bank/reconciliation/{id} | [BETA] Delete bank reconciliation by ID.
 | [**adjustment**](BankreconciliationApi.md#adjustment) | **PUT** /bank/reconciliation/{id}/:adjustment | [BETA] Add an adjustment to reconciliation by ID.
 | [**fetchFromBank**](BankreconciliationApi.md#fetchFromBank) | **PUT** /bank/reconciliation/:fetchFromBank | [BETA] Create a bank reconciliation by fetching bank statement from the bank.
 | [**get**](BankreconciliationApi.md#get) | **GET** /bank/reconciliation/{id} | [BETA] Get bank reconciliation.
 | [**lastClosed**](BankreconciliationApi.md#lastClosed) | **GET** /bank/reconciliation/&gt;lastClosed | [BETA] Get last closed reconciliation by account ID.
 | [**post**](BankreconciliationApi.md#post) | **POST** /bank/reconciliation | [BETA] Post a bank reconciliation.
 | [**put**](BankreconciliationApi.md#put) | **PUT** /bank/reconciliation/{id} | [BETA] Update a bank reconciliation.
 | [**search**](BankreconciliationApi.md#search) | **GET** /bank/reconciliation | [BETA] Find bank reconciliation corresponding with sent data.

### BankreconciliationmatchApi

```typescript
import { BankreconciliationmatchApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**_delete**](BankreconciliationmatchApi.md#_delete) | **DELETE** /bank/reconciliation/match/{id} | [BETA] Delete a bank reconciliation match by ID.
 | [**get**](BankreconciliationmatchApi.md#get) | **GET** /bank/reconciliation/match/{id} | [BETA] Get bank reconciliation match by ID.
 | [**post**](BankreconciliationmatchApi.md#post) | **POST** /bank/reconciliation/match | [BETA] Create a bank reconciliation match.
 | [**put**](BankreconciliationmatchApi.md#put) | **PUT** /bank/reconciliation/match/{id} | [BETA] Update a bank reconciliation match by ID.
 | [**search**](BankreconciliationmatchApi.md#search) | **GET** /bank/reconciliation/match | [BETA] Find bank reconciliation match corresponding with sent data.
 | [**suggest**](BankreconciliationmatchApi.md#suggest) | **PUT** /bank/reconciliation/match/:suggest | [BETA] Suggest matches for a bank reconciliation by ID.

### BankreconciliationpaymentTypeApi

```typescript
import { BankreconciliationpaymentTypeApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](BankreconciliationpaymentTypeApi.md#get) | **GET** /bank/reconciliation/paymentType/{id} | [BETA] Get payment type by ID.
 | [**search**](BankreconciliationpaymentTypeApi.md#search) | **GET** /bank/reconciliation/paymentType | [BETA] Find payment type corresponding with sent data.

### BankstatementApi

```typescript
import { BankstatementApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**_delete**](BankstatementApi.md#_delete) | **DELETE** /bank/statement/{id} | [BETA] Delete bank statement by ID.
 | [**get**](BankstatementApi.md#get) | **GET** /bank/statement/{id} | [BETA] Get bank statement.
 | [**importBankStatement**](BankstatementApi.md#importBankStatement) | **POST** /bank/statement/import | [BETA] Upload bank statement file.
 | [**search**](BankstatementApi.md#search) | **GET** /bank/statement | [BETA] Find bank statement corresponding with sent data.

### BankstatementtransactionApi

```typescript
import { BankstatementtransactionApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](BankstatementtransactionApi.md#get) | **GET** /bank/statement/transaction/{id} | [BETA] Get bank transaction by ID.
 | [**getDetails**](BankstatementtransactionApi.md#getDetails) | **GET** /bank/statement/transaction/{id}/details | [BETA] Get additional details about transaction by ID.
 | [**search**](BankstatementtransactionApi.md#search) | **GET** /bank/statement/transaction | [BETA] Find bank transaction corresponding with sent data.

### CompanyApi

```typescript
import { CompanyApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](CompanyApi.md#get) | **GET** /company/{id} | Find company by ID.
 | [**getDivisions**](CompanyApi.md#getDivisions) | **GET** /company/divisions | [DEPRECATED] Find divisions.
 | [**getWithLoginAccess**](CompanyApi.md#getWithLoginAccess) | **GET** /company/&gt;withLoginAccess | Returns client customers (with accountant/auditor relation) where the current user has login access (proxy login).
 | [**put**](CompanyApi.md#put) | **PUT** /company | Update company information.

### CompanyaltinnApi

```typescript
import { CompanyaltinnApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**put**](CompanyaltinnApi.md#put) | **PUT** /company/settings/altinn | [BETA] Update AltInn id and password.
 | [**search**](CompanyaltinnApi.md#search) | **GET** /company/settings/altinn | [BETA] Find Altinn id for login in company.

### ContactApi

```typescript
import { ContactApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](ContactApi.md#get) | **GET** /contact/{id} | Get contact by ID.
 | [**post**](ContactApi.md#post) | **POST** /contact | Create contact.
 | [**put**](ContactApi.md#put) | **PUT** /contact/{id} | [BETA] Update contact.
 | [**search**](ContactApi.md#search) | **GET** /contact | Find contacts corresponding with sent data.

### CountryApi

```typescript
import { CountryApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](CountryApi.md#get) | **GET** /country/{id} | Get country by ID.
 | [**search**](CountryApi.md#search) | **GET** /country | Find countries corresponding with sent data.

### CrmprospectApi

```typescript
import { CrmprospectApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](CrmprospectApi.md#get) | **GET** /crm/prospect/{id} | Get prospect by ID.
 | [**search**](CrmprospectApi.md#search) | **GET** /crm/prospect | Find prospects corresponding with sent data.

### CurrencyApi

```typescript
import { CurrencyApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](CurrencyApi.md#get) | **GET** /currency/{id} | Get currency by ID.
 | [**getRate**](CurrencyApi.md#getRate) | **GET** /currency/{id}/rate | Find currency exchange rate corresponding with sent data.
 | [**search**](CurrencyApi.md#search) | **GET** /currency | Find currencies corresponding with sent data.

### CustomerApi

```typescript
import { CustomerApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](CustomerApi.md#get) | **GET** /customer/{id} | Get customer by ID.
 | [**post**](CustomerApi.md#post) | **POST** /customer | Create customer. Related customer addresses may also be created.
 | [**postList**](CustomerApi.md#postList) | **POST** /customer/list | [BETA] Create multiple customers. Related supplier addresses may also be created.
 | [**put**](CustomerApi.md#put) | **PUT** /customer/{id} | Update customer. 
 | [**putList**](CustomerApi.md#putList) | **PUT** /customer/list | [BETA] Update multiple customers. Addresses can also be updated.
 | [**search**](CustomerApi.md#search) | **GET** /customer | Find customers corresponding with sent data.

### CustomercategoryApi

```typescript
import { CustomercategoryApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](CustomercategoryApi.md#get) | **GET** /customer/category/{id} | Find customer/supplier category by ID.
 | [**post**](CustomercategoryApi.md#post) | **POST** /customer/category | Add new customer/supplier category.
 | [**put**](CustomercategoryApi.md#put) | **PUT** /customer/category/{id} | Update customer/supplier category.
 | [**search**](CustomercategoryApi.md#search) | **GET** /customer/category | Find customer/supplier categories corresponding with sent data.

### DepartmentApi

```typescript
import { DepartmentApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**_delete**](DepartmentApi.md#_delete) | **DELETE** /department/{id} | Delete department by ID
 | [**get**](DepartmentApi.md#get) | **GET** /department/{id} | Get department by ID.
 | [**post**](DepartmentApi.md#post) | **POST** /department | [BETA] Add new department.
 | [**postList**](DepartmentApi.md#postList) | **POST** /department/list | [BETA] Register new departments.
 | [**put**](DepartmentApi.md#put) | **PUT** /department/{id} | [BETA] Update department.
 | [**putList**](DepartmentApi.md#putList) | **PUT** /department/list | [BETA] Update multiple departments.
 | [**search**](DepartmentApi.md#search) | **GET** /department | Find department corresponding with sent data.

### DivisionApi

```typescript
import { DivisionApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**post**](DivisionApi.md#post) | **POST** /division | [BETA] Create division.
 | [**postList**](DivisionApi.md#postList) | **POST** /division/list | [BETA] Create divisions.
 | [**put**](DivisionApi.md#put) | **PUT** /division/{id} | [BETA] Update division information.
 | [**putList**](DivisionApi.md#putList) | **PUT** /division/list | [BETA] Update multiple divisions.
 | [**search**](DivisionApi.md#search) | **GET** /division | [BETA] Get divisions.

### DocumentApi

```typescript
import { DocumentApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**downloadContent**](DocumentApi.md#downloadContent) | **GET** /document/{id}/content | [BETA] Get content of document given by ID.
 | [**get**](DocumentApi.md#get) | **GET** /document/{id} | [BETA] Get document by ID.

### EmployeeApi

```typescript
import { EmployeeApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](EmployeeApi.md#get) | **GET** /employee/{id} | Get employee by ID.
 | [**post**](EmployeeApi.md#post) | **POST** /employee | [BETA] Create one employee.
 | [**postList**](EmployeeApi.md#postList) | **POST** /employee/list | [BETA] Create several employees.
 | [**put**](EmployeeApi.md#put) | **PUT** /employee/{id} | Update employee.
 | [**search**](EmployeeApi.md#search) | **GET** /employee | Find employees corresponding with sent data.

### EmployeeemploymentApi

```typescript
import { EmployeeemploymentApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](EmployeeemploymentApi.md#get) | **GET** /employee/employment/{id} | Find employment by ID.
 | [**post**](EmployeeemploymentApi.md#post) | **POST** /employee/employment | [BETA] Create employment.
 | [**put**](EmployeeemploymentApi.md#put) | **PUT** /employee/employment/{id} | [BETA] Update employemnt. 
 | [**search**](EmployeeemploymentApi.md#search) | **GET** /employee/employment | Find all employments for employee.

### EmployeeemploymentdetailsApi

```typescript
import { EmployeeemploymentdetailsApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](EmployeeemploymentdetailsApi.md#get) | **GET** /employee/employment/details/{id} | [BETA] Find employment details by ID.
 | [**post**](EmployeeemploymentdetailsApi.md#post) | **POST** /employee/employment/details | [BETA] Create employment details.
 | [**put**](EmployeeemploymentdetailsApi.md#put) | **PUT** /employee/employment/details/{id} | [BETA] Update employment details. 
 | [**search**](EmployeeemploymentdetailsApi.md#search) | **GET** /employee/employment/details | [BETA] Find all employmentdetails for employment.

### EmployeeemploymentemploymentTypeApi

```typescript
import { EmployeeemploymentemploymentTypeApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**getMaritimeEmploymentType**](EmployeeemploymentemploymentTypeApi.md#getMaritimeEmploymentType) | **GET** /employee/employment/employmentType/maritimeEmploymentType | [BETA] Find all maritime employment type IDs.
 | [**getSalaryType**](EmployeeemploymentemploymentTypeApi.md#getSalaryType) | **GET** /employee/employment/employmentType/salaryType | [BETA] Find all salary type IDs.
 | [**getScheduleType**](EmployeeemploymentemploymentTypeApi.md#getScheduleType) | **GET** /employee/employment/employmentType/scheduleType | [BETA] Find all schedule type IDs.
 | [**search**](EmployeeemploymentemploymentTypeApi.md#search) | **GET** /employee/employment/employmentType | [BETA] Find all employment type IDs.

### EmployeeemploymentleaveOfAbsenceApi

```typescript
import { EmployeeemploymentleaveOfAbsenceApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](EmployeeemploymentleaveOfAbsenceApi.md#get) | **GET** /employee/employment/leaveOfAbsence/{id} | [BETA] Find leave of absence by ID.
 | [**post**](EmployeeemploymentleaveOfAbsenceApi.md#post) | **POST** /employee/employment/leaveOfAbsence | [BETA] Create leave of absence.
 | [**postList**](EmployeeemploymentleaveOfAbsenceApi.md#postList) | **POST** /employee/employment/leaveOfAbsence/list | [BETA] Create multiple leave of absences.
 | [**put**](EmployeeemploymentleaveOfAbsenceApi.md#put) | **PUT** /employee/employment/leaveOfAbsence/{id} | [BETA] Update leave of absence. 

### EmployeeemploymentleaveOfAbsenceTypeApi

```typescript
import { EmployeeemploymentleaveOfAbsenceTypeApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**search**](EmployeeemploymentleaveOfAbsenceTypeApi.md#search) | **GET** /employee/employment/leaveOfAbsenceType | [BETA] Find all leave of absence type IDs.

### EmployeeemploymentoccupationCodeApi

```typescript
import { EmployeeemploymentoccupationCodeApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**search**](EmployeeemploymentoccupationCodeApi.md#search) | **GET** /employee/employment/occupationCode | [BETA] Find all profession codes.

### EmployeeemploymentremunerationTypeApi

```typescript
import { EmployeeemploymentremunerationTypeApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**search**](EmployeeemploymentremunerationTypeApi.md#search) | **GET** /employee/employment/remunerationType | [BETA] Find all remuneration type IDs.

### EmployeeemploymentworkingHoursSchemeApi

```typescript
import { EmployeeemploymentworkingHoursSchemeApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**search**](EmployeeemploymentworkingHoursSchemeApi.md#search) | **GET** /employee/employment/workingHoursScheme | [BETA] Find working hours scheme ID.

### EmployeeentitlementApi

```typescript
import { EmployeeentitlementApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**client**](EmployeeentitlementApi.md#client) | **GET** /employee/entitlement/client | [BETA] Find all entitlements at client for user.
 | [**get**](EmployeeentitlementApi.md#get) | **GET** /employee/entitlement/{id} | Get entitlement by ID.
 | [**grantClientEntitlementsByTemplate**](EmployeeentitlementApi.md#grantClientEntitlementsByTemplate) | **PUT** /employee/entitlement/:grantClientEntitlementsByTemplate | [BETA] Update employee entitlements in client account.
 | [**grantEntitlementsByTemplate**](EmployeeentitlementApi.md#grantEntitlementsByTemplate) | **PUT** /employee/entitlement/:grantEntitlementsByTemplate | [BETA] Update employee entitlements.
 | [**search**](EmployeeentitlementApi.md#search) | **GET** /employee/entitlement | Find all entitlements for user.

### EmployeehourlyCostAndRateApi

```typescript
import { EmployeehourlyCostAndRateApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](EmployeehourlyCostAndRateApi.md#get) | **GET** /employee/hourlyCostAndRate/{id} | [BETA] Find hourly cost and rate by ID.
 | [**post**](EmployeehourlyCostAndRateApi.md#post) | **POST** /employee/hourlyCostAndRate | [BETA] Create hourly cost and rate.
 | [**put**](EmployeehourlyCostAndRateApi.md#put) | **PUT** /employee/hourlyCostAndRate/{id} | [BETA] Update hourly cost and rate. 
 | [**search**](EmployeehourlyCostAndRateApi.md#search) | **GET** /employee/hourlyCostAndRate | Find all hourly cost and rates for employee.

### EmployeenextOfKinApi

```typescript
import { EmployeenextOfKinApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](EmployeenextOfKinApi.md#get) | **GET** /employee/nextOfKin/{id} | [BETA] Find next of kin by ID.
 | [**post**](EmployeenextOfKinApi.md#post) | **POST** /employee/nextOfKin | [BETA] Create next of kin.
 | [**put**](EmployeenextOfKinApi.md#put) | **PUT** /employee/nextOfKin/{id} | [BETA] Update next of kin. 
 | [**search**](EmployeenextOfKinApi.md#search) | **GET** /employee/nextOfKin | Find all next of kin for employee.

### EmployeestandardTimeApi

```typescript
import { EmployeestandardTimeApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](EmployeestandardTimeApi.md#get) | **GET** /employee/standardTime/{id} | [BETA] Find standard time by ID.
 | [**post**](EmployeestandardTimeApi.md#post) | **POST** /employee/standardTime | [BETA] Create standard time.
 | [**put**](EmployeestandardTimeApi.md#put) | **PUT** /employee/standardTime/{id} | [BETA] Update standard time. 
 | [**search**](EmployeestandardTimeApi.md#search) | **GET** /employee/standardTime | [BETA] Find all standard times for employee.

### EventApi

```typescript
import { EventApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](EventApi.md#get) | **GET** /event | [BETA] Get all (WebHook) event keys.

### EventsubscriptionApi

```typescript
import { EventsubscriptionApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**_delete**](EventsubscriptionApi.md#_delete) | **DELETE** /event/subscription/{id} | [BETA] Delete the given subscription.
 | [**get**](EventsubscriptionApi.md#get) | **GET** /event/subscription/{id} | [BETA] Get subscription by ID.
 | [**post**](EventsubscriptionApi.md#post) | **POST** /event/subscription | [BETA] Create a new subscription for current EmployeeToken.
 | [**put**](EventsubscriptionApi.md#put) | **PUT** /event/subscription/{id} | [BETA] Change a current subscription, based on id.
 | [**search**](EventsubscriptionApi.md#search) | **GET** /event/subscription | [BETA] Find all ongoing subscriptions.

### InventoryApi

```typescript
import { InventoryApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**_delete**](InventoryApi.md#_delete) | **DELETE** /inventory/{id} | [BETA] Delete inventory. Only available for some consumers.
 | [**get**](InventoryApi.md#get) | **GET** /inventory/{id} | Get inventory by ID.
 | [**post**](InventoryApi.md#post) | **POST** /inventory | [BETA] Create new inventory. Only available for some consumers.
 | [**put**](InventoryApi.md#put) | **PUT** /inventory/{id} | [BETA] Update inventory. Only available for some consumers.
 | [**search**](InventoryApi.md#search) | **GET** /inventory | Find inventory corresponding with sent data.

### InventoryinventoriesApi

```typescript
import { InventoryinventoriesApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**search**](InventoryinventoriesApi.md#search) | **GET** /inventory/inventories | [BETA] Find inventories corresponding with sent data. Only available for some consumers.

### InventorystocktakingApi

```typescript
import { InventorystocktakingApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**_delete**](InventorystocktakingApi.md#_delete) | **DELETE** /inventory/stocktaking/{id} | [BETA] Delete stocktaking. Only available for some consumers.
 | [**get**](InventorystocktakingApi.md#get) | **GET** /inventory/stocktaking/{id} | [BETA] Get stocktaking by ID. Only available for some consumers.
 | [**post**](InventorystocktakingApi.md#post) | **POST** /inventory/stocktaking | [BETA] Create new stocktaking. Only available for some consumers.
 | [**put**](InventorystocktakingApi.md#put) | **PUT** /inventory/stocktaking/{id} | [BETA] Update stocktaking. Only available for some consumers.
 | [**search**](InventorystocktakingApi.md#search) | **GET** /inventory/stocktaking | [BETA] Find stocktaking corresponding with sent data. Only available for some consumers.

### InventorystocktakingproductlineApi

```typescript
import { InventorystocktakingproductlineApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**_delete**](InventorystocktakingproductlineApi.md#_delete) | **DELETE** /inventory/stocktaking/productline/{id} | [BETA] Delete product line. Only available for some consumers.
 | [**get**](InventorystocktakingproductlineApi.md#get) | **GET** /inventory/stocktaking/productline/{id} | [BETA] Get product line by ID. Only available for some consumers.
 | [**post**](InventorystocktakingproductlineApi.md#post) | **POST** /inventory/stocktaking/productline | [BETA] Create product line. When creating several product lines, use /list for better performance. Only available for some consumers.
 | [**put**](InventorystocktakingproductlineApi.md#put) | **PUT** /inventory/stocktaking/productline/{id} | [BETA] Update product line. Only available for some consumers.
 | [**search**](InventorystocktakingproductlineApi.md#search) | **GET** /inventory/stocktaking/productline | [BETA] Find all product lines by stocktaking ID. Only available for some consumers.

### InvoiceApi

```typescript
import { InvoiceApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**createCreditNote**](InvoiceApi.md#createCreditNote) | **PUT** /invoice/{id}/:createCreditNote | [BETA] Creates a new Invoice representing a credit memo that nullifies the given invoice. Updates this invoice and any pre-existing inverse invoice.
 | [**createReminder**](InvoiceApi.md#createReminder) | **PUT** /invoice/{id}/:createReminder | [BETA] Create invoice reminder and sends it by the given dispatch type. Supports the reminder types SOFT_REMINDER, REMINDER and NOTICE_OF_DEBT_COLLECTION. DispatchType NETS_PRINT must have type NOTICE_OF_DEBT_COLLECTION. SMS and NETS_PRINT must be activated prior to usage in the API.
 | [**downloadPdf**](InvoiceApi.md#downloadPdf) | **GET** /invoice/{invoiceId}/pdf | Get invoice document by invoice ID.
 | [**get**](InvoiceApi.md#get) | **GET** /invoice/{id} | Get invoice by ID.
 | [**payment**](InvoiceApi.md#payment) | **PUT** /invoice/{id}/:payment | Update invoice. The invoice is updated with payment information. The amount is in the invoice’s currency.
 | [**post**](InvoiceApi.md#post) | **POST** /invoice | Create invoice.
 | [**search**](InvoiceApi.md#search) | **GET** /invoice | Find invoices corresponding with sent data. Includes charged outgoing invoices only.
 | [**send**](InvoiceApi.md#send) | **PUT** /invoice/{id}/:send | [BETA] Send invoice by ID and sendType. Optionally override email recipient.

### InvoicedetailsApi

```typescript
import { InvoicedetailsApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](InvoicedetailsApi.md#get) | **GET** /invoice/details/{id} | [BETA] Get ProjectInvoiceDetails by ID.
 | [**search**](InvoicedetailsApi.md#search) | **GET** /invoice/details | Find ProjectInvoiceDetails corresponding with sent data.

### InvoicepaymentTypeApi

```typescript
import { InvoicepaymentTypeApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](InvoicepaymentTypeApi.md#get) | **GET** /invoice/paymentType/{id} | Get payment type by ID.
 | [**search**](InvoicepaymentTypeApi.md#search) | **GET** /invoice/paymentType | Find payment type corresponding with sent data.

### LedgerApi

```typescript
import { LedgerApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**openPost**](LedgerApi.md#openPost) | **GET** /ledger/openPost | Find open posts corresponding with sent data.
 | [**search**](LedgerApi.md#search) | **GET** /ledger | Get ledger (hovedbok).

### LedgeraccountApi

```typescript
import { LedgeraccountApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**_delete**](LedgeraccountApi.md#_delete) | **DELETE** /ledger/account/{id} | [BETA] Delete account.
 | [**deleteByIds**](LedgeraccountApi.md#deleteByIds) | **DELETE** /ledger/account/list | [BETA] Delete multiple accounts.
 | [**get**](LedgeraccountApi.md#get) | **GET** /ledger/account/{id} | Get account by ID.
 | [**post**](LedgeraccountApi.md#post) | **POST** /ledger/account | [BETA] Create a new account.
 | [**postList**](LedgeraccountApi.md#postList) | **POST** /ledger/account/list | [BETA] Create several accounts.
 | [**put**](LedgeraccountApi.md#put) | **PUT** /ledger/account/{id} | [BETA] Update account.
 | [**putList**](LedgeraccountApi.md#putList) | **PUT** /ledger/account/list | [BETA] Update multiple accounts.
 | [**search**](LedgeraccountApi.md#search) | **GET** /ledger/account | Find accounts corresponding with sent data.

### LedgeraccountingPeriodApi

```typescript
import { LedgeraccountingPeriodApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](LedgeraccountingPeriodApi.md#get) | **GET** /ledger/accountingPeriod/{id} | Get accounting period by ID.
 | [**search**](LedgeraccountingPeriodApi.md#search) | **GET** /ledger/accountingPeriod | Find accounting periods corresponding with sent data.

### LedgerannualAccountApi

```typescript
import { LedgerannualAccountApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](LedgerannualAccountApi.md#get) | **GET** /ledger/annualAccount/{id} | Get annual account by ID.
 | [**search**](LedgerannualAccountApi.md#search) | **GET** /ledger/annualAccount | Find annual accounts corresponding with sent data.

### LedgercloseGroupApi

```typescript
import { LedgercloseGroupApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](LedgercloseGroupApi.md#get) | **GET** /ledger/closeGroup/{id} | Get close group by ID.
 | [**search**](LedgercloseGroupApi.md#search) | **GET** /ledger/closeGroup | Find close groups corresponding with sent data.

### LedgerpaymentTypeOutApi

```typescript
import { LedgerpaymentTypeOutApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**_delete**](LedgerpaymentTypeOutApi.md#_delete) | **DELETE** /ledger/paymentTypeOut/{id} | [BETA] Delete payment type for outgoing payments by ID.
 | [**get**](LedgerpaymentTypeOutApi.md#get) | **GET** /ledger/paymentTypeOut/{id} | [BETA] Get payment type for outgoing payments by ID.
 | [**post**](LedgerpaymentTypeOutApi.md#post) | **POST** /ledger/paymentTypeOut | [BETA] Create new payment type for outgoing payments
 | [**postList**](LedgerpaymentTypeOutApi.md#postList) | **POST** /ledger/paymentTypeOut/list | [BETA] Create multiple payment types for outgoing payments at once
 | [**put**](LedgerpaymentTypeOutApi.md#put) | **PUT** /ledger/paymentTypeOut/{id} | [BETA] Update existing payment type for outgoing payments
 | [**putList**](LedgerpaymentTypeOutApi.md#putList) | **PUT** /ledger/paymentTypeOut/list | [BETA] Update multiple payment types for outgoing payments at once
 | [**search**](LedgerpaymentTypeOutApi.md#search) | **GET** /ledger/paymentTypeOut | [BETA] Gets payment types for outgoing payments

### LedgerpostingApi

```typescript
import { LedgerpostingApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](LedgerpostingApi.md#get) | **GET** /ledger/posting/{id} | Find postings by ID.
 | [**openPost**](LedgerpostingApi.md#openPost) | **GET** /ledger/posting/openPost | Find open posts corresponding with sent data.
 | [**search**](LedgerpostingApi.md#search) | **GET** /ledger/posting | Find postings corresponding with sent data.

### LedgervatTypeApi

```typescript
import { LedgervatTypeApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](LedgervatTypeApi.md#get) | **GET** /ledger/vatType/{id} | Get vat type by ID.
 | [**search**](LedgervatTypeApi.md#search) | **GET** /ledger/vatType | Find vat types corresponding with sent data.

### LedgervoucherApi

```typescript
import { LedgervoucherApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**_delete**](LedgervoucherApi.md#_delete) | **DELETE** /ledger/voucher/{id} | [BETA] Delete voucher by ID.
 | [**deleteAttachment**](LedgervoucherApi.md#deleteAttachment) | **DELETE** /ledger/voucher/{id}/attachment | [BETA] Delete attachment.
 | [**downloadPdf**](LedgervoucherApi.md#downloadPdf) | **GET** /ledger/voucher/{voucherId}/pdf | Get PDF representation of voucher by ID.
 | [**get**](LedgervoucherApi.md#get) | **GET** /ledger/voucher/{id} | Get voucher by ID.
 | [**importDocument**](LedgervoucherApi.md#importDocument) | **POST** /ledger/voucher/importDocument | [BETA] Upload a document to create one or more vouchers. Valid document formats are PDF, PNG, JPEG, TIFF and EHF. Send as multipart form.
 | [**importGbat10**](LedgervoucherApi.md#importGbat10) | **POST** /ledger/voucher/importGbat10 | Import GBAT10. Send as multipart form.
 | [**nonPosted**](LedgervoucherApi.md#nonPosted) | **GET** /ledger/voucher/&gt;nonPosted | [BETA] Find non-posted vouchers.
 | [**options**](LedgervoucherApi.md#options) | **GET** /ledger/voucher/{id}/options | [BETA] Returns a data structure containing meta information about operations that are available for this voucher. Currently only implemented for DELETE: It is possible to check if the voucher is deletable.
 | [**post**](LedgervoucherApi.md#post) | **POST** /ledger/voucher | Add new voucher. IMPORTANT: Also creates postings. Only the gross amounts will be used
 | [**put**](LedgervoucherApi.md#put) | **PUT** /ledger/voucher/{id} | [BETA] Update voucher. Postings with guiRow&#x3D;&#x3D;0 will be deleted and regenerated.
 | [**putList**](LedgervoucherApi.md#putList) | **PUT** /ledger/voucher/list | [BETA] Update multiple vouchers. Postings with guiRow&#x3D;&#x3D;0 will be deleted and regenerated.
 | [**reverse**](LedgervoucherApi.md#reverse) | **PUT** /ledger/voucher/{id}/:reverse | Reverses the voucher, and returns the reversed voucher. Supports reversing most voucher types, except salary transactions.
 | [**search**](LedgervoucherApi.md#search) | **GET** /ledger/voucher | Find vouchers corresponding with sent data.
 | [**sendToInbox**](LedgervoucherApi.md#sendToInbox) | **PUT** /ledger/voucher/{id}/:sendToInbox | [BETA] Send voucher to inbox.
 | [**sendToLedger**](LedgervoucherApi.md#sendToLedger) | **PUT** /ledger/voucher/{id}/:sendToLedger | [BETA] Send voucher to ledger.
 | [**uploadAttachment**](LedgervoucherApi.md#uploadAttachment) | **POST** /ledger/voucher/{voucherId}/attachment | Upload attachment to voucher. If the voucher already has an attachment the content will be appended to the existing attachment as new PDF page(s). Valid document formats are PDF, PNG, JPEG and TIFF. Non PDF formats will be converted to PDF. Send as multipart form.
 | [**uploadPdf**](LedgervoucherApi.md#uploadPdf) | **POST** /ledger/voucher/{voucherId}/pdf/{fileName} | [DEPRECATED] Use POST ledger/voucher/{voucherId}/attachment instead.

### LedgervoucherTypeApi

```typescript
import { LedgervoucherTypeApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](LedgervoucherTypeApi.md#get) | **GET** /ledger/voucherType/{id} | Get voucher type by ID.
 | [**search**](LedgervoucherTypeApi.md#search) | **GET** /ledger/voucherType | Find voucher types corresponding with sent data.

### MunicipalityApi

```typescript
import { MunicipalityApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**search**](MunicipalityApi.md#search) | **GET** /municipality | [BETA] Get municipalities.

### OrderApi

```typescript
import { OrderApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](OrderApi.md#get) | **GET** /order/{id} | Get order by ID.
 | [**invoice**](OrderApi.md#invoice) | **PUT** /order/{id}/:invoice | Create new invoice from order.
 | [**post**](OrderApi.md#post) | **POST** /order | Create order.
 | [**put**](OrderApi.md#put) | **PUT** /order/{id} | Update order.
 | [**search**](OrderApi.md#search) | **GET** /order | Find orders corresponding with sent data.

### OrderorderlineApi

```typescript
import { OrderorderlineApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**_delete**](OrderorderlineApi.md#_delete) | **DELETE** /order/orderline/{id} | [BETA] Delete order line by ID.
 | [**get**](OrderorderlineApi.md#get) | **GET** /order/orderline/{id} | Get order line by ID.
 | [**post**](OrderorderlineApi.md#post) | **POST** /order/orderline | Create order line. When creating several order lines, use /list for better performance.
 | [**postList**](OrderorderlineApi.md#postList) | **POST** /order/orderline/list | Create multiple order lines.

### ProductApi

```typescript
import { ProductApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](ProductApi.md#get) | **GET** /product/{id} | Get product by ID.
 | [**post**](ProductApi.md#post) | **POST** /product | Create new product.
 | [**put**](ProductApi.md#put) | **PUT** /product/{id} | Update product.
 | [**search**](ProductApi.md#search) | **GET** /product | Find products corresponding with sent data.

### ProductexternalApi

```typescript
import { ProductexternalApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](ProductexternalApi.md#get) | **GET** /product/external/{id} | [BETA] Get external product by ID.
 | [**search**](ProductexternalApi.md#search) | **GET** /product/external | [BETA] Find external products corresponding with sent data.

### ProductunitApi

```typescript
import { ProductunitApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](ProductunitApi.md#get) | **GET** /product/unit/{id} | Get product unit by ID.
 | [**search**](ProductunitApi.md#search) | **GET** /product/unit | Find product units corresponding with sent data.

### ProjectApi

```typescript
import { ProjectApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**_delete**](ProjectApi.md#_delete) | **DELETE** /project/{id} | [BETA] Delete project.
 | [**deleteByIds**](ProjectApi.md#deleteByIds) | **DELETE** /project/list | [BETA] Delete projects.
 | [**deleteList**](ProjectApi.md#deleteList) | **DELETE** /project | [BETA] Delete multiple projects.
 | [**get**](ProjectApi.md#get) | **GET** /project/{id} | Find project by ID.
 | [**getForTimeSheet**](ProjectApi.md#getForTimeSheet) | **GET** /project/&gt;forTimeSheet | Find projects applicable for time sheet registration on a specific day.
 | [**post**](ProjectApi.md#post) | **POST** /project | [BETA] Add new project.
 | [**postList**](ProjectApi.md#postList) | **POST** /project/list | [BETA] Register new projects. Multiple projects for different users can be sent in the same request.
 | [**put**](ProjectApi.md#put) | **PUT** /project/{id} | [BETA] Update project.
 | [**putList**](ProjectApi.md#putList) | **PUT** /project/list | [BETA] Update multiple projects.
 | [**search**](ProjectApi.md#search) | **GET** /project | Find projects corresponding with sent data.

### ProjectcategoryApi

```typescript
import { ProjectcategoryApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](ProjectcategoryApi.md#get) | **GET** /project/category/{id} | Find project category by ID.
 | [**post**](ProjectcategoryApi.md#post) | **POST** /project/category | Add new project category.
 | [**put**](ProjectcategoryApi.md#put) | **PUT** /project/category/{id} | Update project category.
 | [**search**](ProjectcategoryApi.md#search) | **GET** /project/category | Find project categories corresponding with sent data.

### ProjecthourlyRatesApi

```typescript
import { ProjecthourlyRatesApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**_delete**](ProjecthourlyRatesApi.md#_delete) | **DELETE** /project/hourlyRates/{id} | Delete Project Hourly Rate 
 | [**deleteByIds**](ProjecthourlyRatesApi.md#deleteByIds) | **DELETE** /project/hourlyRates/list | Delete project hourly rates.
 | [**get**](ProjecthourlyRatesApi.md#get) | **GET** /project/hourlyRates/{id} | Find project hourly rate by ID.
 | [**post**](ProjecthourlyRatesApi.md#post) | **POST** /project/hourlyRates | Create a project hourly rate. 
 | [**postList**](ProjecthourlyRatesApi.md#postList) | **POST** /project/hourlyRates/list | Create multiple project hourly rates.
 | [**put**](ProjecthourlyRatesApi.md#put) | **PUT** /project/hourlyRates/{id} | Update a project hourly rate.
 | [**putList**](ProjecthourlyRatesApi.md#putList) | **PUT** /project/hourlyRates/list | Update multiple project hourly rates.
 | [**search**](ProjecthourlyRatesApi.md#search) | **GET** /project/hourlyRates | Find project hourly rates corresponding with sent data.

### ProjecthourlyRatesprojectSpecificRatesApi

```typescript
import { ProjecthourlyRatesprojectSpecificRatesApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**_delete**](ProjecthourlyRatesprojectSpecificRatesApi.md#_delete) | **DELETE** /project/hourlyRates/projectSpecificRates/{id} | Delete project specific rate 
 | [**deleteByIds**](ProjecthourlyRatesprojectSpecificRatesApi.md#deleteByIds) | **DELETE** /project/hourlyRates/projectSpecificRates/list | Delete project specific rates.
 | [**get**](ProjecthourlyRatesprojectSpecificRatesApi.md#get) | **GET** /project/hourlyRates/projectSpecificRates/{id} | Find project specific rate by ID.
 | [**post**](ProjecthourlyRatesprojectSpecificRatesApi.md#post) | **POST** /project/hourlyRates/projectSpecificRates | Create new project specific rate. 
 | [**postList**](ProjecthourlyRatesprojectSpecificRatesApi.md#postList) | **POST** /project/hourlyRates/projectSpecificRates/list | Create multiple new project specific rates.
 | [**put**](ProjecthourlyRatesprojectSpecificRatesApi.md#put) | **PUT** /project/hourlyRates/projectSpecificRates/{id} | Update a project specific rate.
 | [**putList**](ProjecthourlyRatesprojectSpecificRatesApi.md#putList) | **PUT** /project/hourlyRates/projectSpecificRates/list | Update multiple project specific rates.
 | [**search**](ProjecthourlyRatesprojectSpecificRatesApi.md#search) | **GET** /project/hourlyRates/projectSpecificRates | Find project specific rates corresponding with sent data.

### ProjectorderlineApi

```typescript
import { ProjectorderlineApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**_delete**](ProjectorderlineApi.md#_delete) | **DELETE** /project/orderline/{id} | [BETA] Delete order line by ID.
 | [**get**](ProjectorderlineApi.md#get) | **GET** /project/orderline/{id} | [BETA] Get order line by ID.
 | [**post**](ProjectorderlineApi.md#post) | **POST** /project/orderline | [BETA] Create order line. When creating several order lines, use /list for better performance.
 | [**postList**](ProjectorderlineApi.md#postList) | **POST** /project/orderline/list | [BETA] Create multiple order lines.
 | [**put**](ProjectorderlineApi.md#put) | **PUT** /project/orderline/{id} | [BETA] Update project orderline.

### ProjectparticipantApi

```typescript
import { ProjectparticipantApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**deleteByIds**](ProjectparticipantApi.md#deleteByIds) | **DELETE** /project/participant/list | [BETA] Delete project participants.
 | [**get**](ProjectparticipantApi.md#get) | **GET** /project/participant/{id} | [BETA] Find project participant by ID.
 | [**post**](ProjectparticipantApi.md#post) | **POST** /project/participant | [BETA] Add new project participant.
 | [**postList**](ProjectparticipantApi.md#postList) | **POST** /project/participant/list | [BETA] Register new projects. Multiple projects for different users can be sent in the same request.
 | [**put**](ProjectparticipantApi.md#put) | **PUT** /project/participant/{id} | [BETA] Update project participant.

### ReminderApi

```typescript
import { ReminderApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](ReminderApi.md#get) | **GET** /reminder/{id} | Get reminder by ID.
 | [**search**](ReminderApi.md#search) | **GET** /reminder | Find reminders corresponding with sent data.

### SalarypayslipApi

```typescript
import { SalarypayslipApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**downloadPdf**](SalarypayslipApi.md#downloadPdf) | **GET** /salary/payslip/{id}/pdf | [BETA] Find payslip (PDF document) by ID.
 | [**get**](SalarypayslipApi.md#get) | **GET** /salary/payslip/{id} | [BETA] Find payslip by ID.
 | [**search**](SalarypayslipApi.md#search) | **GET** /salary/payslip | [BETA] Find payslips corresponding with sent data.

### SalarysettingsApi

```typescript
import { SalarysettingsApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](SalarysettingsApi.md#get) | **GET** /salary/settings | [BETA] Get salary settings of logged in company.
 | [**put**](SalarysettingsApi.md#put) | **PUT** /salary/settings | [BETA] Update settings of logged in company.

### SalarysettingsholidayApi

```typescript
import { SalarysettingsholidayApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**deleteByIds**](SalarysettingsholidayApi.md#deleteByIds) | **DELETE** /salary/settings/holiday/list | [BETA] delete multiple holiday settings of current logged in company.
 | [**post**](SalarysettingsholidayApi.md#post) | **POST** /salary/settings/holiday | [BETA] Create a holiday setting of current logged in company.
 | [**postList**](SalarysettingsholidayApi.md#postList) | **POST** /salary/settings/holiday/list | [BETA] Create multiple holiday settings of current logged in company.
 | [**put**](SalarysettingsholidayApi.md#put) | **PUT** /salary/settings/holiday/{id} | [BETA] update a holiday setting of current logged in company.
 | [**putList**](SalarysettingsholidayApi.md#putList) | **PUT** /salary/settings/holiday/list | [BETA] update multiple holiday settings of current logged in company.
 | [**search**](SalarysettingsholidayApi.md#search) | **GET** /salary/settings/holiday | [BETA] Find holiday settings of current logged in company.

### SalarytransactionApi

```typescript
import { SalarytransactionApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**_delete**](SalarytransactionApi.md#_delete) | **DELETE** /salary/transaction/{id} | [BETA] Delete salary transaction by ID.
 | [**get**](SalarytransactionApi.md#get) | **GET** /salary/transaction/{id} | [BETA] Find salary transaction by ID.
 | [**post**](SalarytransactionApi.md#post) | **POST** /salary/transaction | [BETA] Create a new salary transaction.

### SalarytypeApi

```typescript
import { SalarytypeApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](SalarytypeApi.md#get) | **GET** /salary/type/{id} | [BETA] Find salary type by ID.
 | [**search**](SalarytypeApi.md#search) | **GET** /salary/type | [BETA] Find salary type corresponding with sent data.

### SupplierApi

```typescript
import { SupplierApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](SupplierApi.md#get) | **GET** /supplier/{id} | Get supplier by ID.
 | [**post**](SupplierApi.md#post) | **POST** /supplier | Create supplier. Related supplier addresses may also be created.
 | [**postList**](SupplierApi.md#postList) | **POST** /supplier/list | [BETA] Create multiple suppliers. Related supplier addresses may also be created.
 | [**put**](SupplierApi.md#put) | **PUT** /supplier/{id} | Update supplier. 
 | [**putList**](SupplierApi.md#putList) | **PUT** /supplier/list | [BETA] Update multiple suppliers. Addresses can also be updated.
 | [**search**](SupplierApi.md#search) | **GET** /supplier | Find suppliers corresponding with sent data.

### TimesheetentryApi

```typescript
import { TimesheetentryApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**_delete**](TimesheetentryApi.md#_delete) | **DELETE** /timesheet/entry/{id} | Delete timesheet entry by ID.
 | [**get**](TimesheetentryApi.md#get) | **GET** /timesheet/entry/{id} | Find timesheet entry by ID.
 | [**getRecentActivities**](TimesheetentryApi.md#getRecentActivities) | **GET** /timesheet/entry/&gt;recentActivities | Find recently used timesheet activities.
 | [**getRecentProjects**](TimesheetentryApi.md#getRecentProjects) | **GET** /timesheet/entry/&gt;recentProjects | Find projects with recent activities (timesheet entry registered).
 | [**getTotalHours**](TimesheetentryApi.md#getTotalHours) | **GET** /timesheet/entry/&gt;totalHours | Find total hours registered on an employee in a specific period.
 | [**post**](TimesheetentryApi.md#post) | **POST** /timesheet/entry | Add new timesheet entry. Only one entry per employee/date/activity/project combination is supported.
 | [**postList**](TimesheetentryApi.md#postList) | **POST** /timesheet/entry/list | Add new timesheet entry. Multiple objects for several users can be sent in the same request.
 | [**put**](TimesheetentryApi.md#put) | **PUT** /timesheet/entry/{id} | Update timesheet entry by ID. Note: Timesheet entry object fields which are present but not set, or set to 0, will be nulled.
 | [**putList**](TimesheetentryApi.md#putList) | **PUT** /timesheet/entry/list | Update timesheet entry. Multiple objects for different users can be sent in the same request.
 | [**search**](TimesheetentryApi.md#search) | **GET** /timesheet/entry | Find timesheet entry corresponding with sent data.

### TimesheetsettingsApi

```typescript
import { TimesheetsettingsApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](TimesheetsettingsApi.md#get) | **GET** /timesheet/settings | [BETA] Get timesheet settings of logged in company.

### TimesheettimeClockApi

```typescript
import { TimesheettimeClockApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](TimesheettimeClockApi.md#get) | **GET** /timesheet/timeClock/{id} | Find time clock entry by ID.
 | [**getPresent**](TimesheettimeClockApi.md#getPresent) | **GET** /timesheet/timeClock/present | Find a user’s present running time clock.
 | [**put**](TimesheettimeClockApi.md#put) | **PUT** /timesheet/timeClock/{id} | Update time clock by ID.
 | [**search**](TimesheettimeClockApi.md#search) | **GET** /timesheet/timeClock | Find time clock entries corresponding with sent data.
 | [**start**](TimesheettimeClockApi.md#start) | **PUT** /timesheet/timeClock/:start | Start time clock.
 | [**stop**](TimesheettimeClockApi.md#stop) | **PUT** /timesheet/timeClock/{id}/:stop | Stop time clock.

### TimesheetweekApi

```typescript
import { TimesheetweekApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**approve**](TimesheetweekApi.md#approve) | **PUT** /timesheet/week/:approve | Approve week. By ID or (ISO-8601 week and employeeId combination).
 | [**complete**](TimesheetweekApi.md#complete) | **PUT** /timesheet/week/:complete | Complete week. By ID or (ISO-8601 week and employeeId combination).
 | [**reopen**](TimesheetweekApi.md#reopen) | **PUT** /timesheet/week/:reopen | Reopen week. By ID or (ISO-8601 week and employeeId combination).
 | [**search**](TimesheetweekApi.md#search) | **GET** /timesheet/week | Find weekly status By ID, week/year combination, employeeId. or an approver
 | [**unapprove**](TimesheetweekApi.md#unapprove) | **PUT** /timesheet/week/:unapprove | Unapprove week. By ID or (ISO-8601 week and employeeId combination).

### TokenconsumerApi

```typescript
import { TokenconsumerApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**getByToken**](TokenconsumerApi.md#getByToken) | **GET** /token/consumer/byToken | Get consumer token by token string.

### TokenemployeeApi

```typescript
import { TokenemployeeApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**create**](TokenemployeeApi.md#create) | **PUT** /token/employee/:create | Create an employee token. Only selected consumers are allowed

### TokensessionApi

```typescript
import { TokensessionApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**_delete**](TokensessionApi.md#_delete) | **DELETE** /token/session/{token} | Delete session token.
 | [**create**](TokensessionApi.md#create) | **PUT** /token/session/:create | Create session token.
 | [**whoAmI**](TokensessionApi.md#whoAmI) | **GET** /token/session/&gt;whoAmI | Find information about the current user.

### TravelExpenseApi

```typescript
import { TravelExpenseApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**_delete**](TravelExpenseApi.md#_delete) | **DELETE** /travelExpense/{id} | [BETA] Delete travel expense.
 | [**approve**](TravelExpenseApi.md#approve) | **PUT** /travelExpense/:approve | [BETA] Approve travel expenses.
 | [**copy**](TravelExpenseApi.md#copy) | **PUT** /travelExpense/:copy | [BETA] Copy travel expense.
 | [**createVouchers**](TravelExpenseApi.md#createVouchers) | **PUT** /travelExpense/:createVouchers | [BETA] Create vouchers
 | [**deliver**](TravelExpenseApi.md#deliver) | **PUT** /travelExpense/:deliver | [BETA] Deliver travel expenses.
 | [**downloadAttachment**](TravelExpenseApi.md#downloadAttachment) | **GET** /travelExpense/{travelExpenseId}/attachment | Get attachment by travel expense ID.
 | [**get**](TravelExpenseApi.md#get) | **GET** /travelExpense/{id} | [BETA] Get travel expense by ID.
 | [**post**](TravelExpenseApi.md#post) | **POST** /travelExpense | [BETA] Create travel expense.
 | [**put**](TravelExpenseApi.md#put) | **PUT** /travelExpense/{id} | [BETA] Update travel expense.
 | [**search**](TravelExpenseApi.md#search) | **GET** /travelExpense | [BETA] Find travel expenses corresponding with sent data.
 | [**unapprove**](TravelExpenseApi.md#unapprove) | **PUT** /travelExpense/:unapprove | [BETA] Unapprove travel expenses.
 | [**undeliver**](TravelExpenseApi.md#undeliver) | **PUT** /travelExpense/:undeliver | [BETA] Undeliver travel expenses.
 | [**uploadAttachment**](TravelExpenseApi.md#uploadAttachment) | **POST** /travelExpense/{travelExpenseId}/attachment | Upload attachment to travel expense.

### TravelExpenseaccommodationAllowanceApi

```typescript
import { TravelExpenseaccommodationAllowanceApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**_delete**](TravelExpenseaccommodationAllowanceApi.md#_delete) | **DELETE** /travelExpense/accommodationAllowance/{id} | [BETA] Delete accommodation allowance.
 | [**get**](TravelExpenseaccommodationAllowanceApi.md#get) | **GET** /travelExpense/accommodationAllowance/{id} | [BETA] Get travel accommodation allowance by ID.
 | [**post**](TravelExpenseaccommodationAllowanceApi.md#post) | **POST** /travelExpense/accommodationAllowance | [BETA] Create accommodation allowance.
 | [**put**](TravelExpenseaccommodationAllowanceApi.md#put) | **PUT** /travelExpense/accommodationAllowance/{id} | [BETA] Update accommodation allowance.
 | [**search**](TravelExpenseaccommodationAllowanceApi.md#search) | **GET** /travelExpense/accommodationAllowance | [BETA] Find accommodation allowances corresponding with sent data.

### TravelExpensecostApi

```typescript
import { TravelExpensecostApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**_delete**](TravelExpensecostApi.md#_delete) | **DELETE** /travelExpense/cost/{id} | [BETA] Delete cost.
 | [**get**](TravelExpensecostApi.md#get) | **GET** /travelExpense/cost/{id} | [BETA] Get cost by ID.
 | [**post**](TravelExpensecostApi.md#post) | **POST** /travelExpense/cost | [BETA] Create cost.
 | [**put**](TravelExpensecostApi.md#put) | **PUT** /travelExpense/cost/{id} | [BETA] Update cost.
 | [**search**](TravelExpensecostApi.md#search) | **GET** /travelExpense/cost | [BETA] Find costs corresponding with sent data.

### TravelExpensecostCategoryApi

```typescript
import { TravelExpensecostCategoryApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](TravelExpensecostCategoryApi.md#get) | **GET** /travelExpense/costCategory/{id} | [BETA] Get cost category by ID.
 | [**search**](TravelExpensecostCategoryApi.md#search) | **GET** /travelExpense/costCategory | [BETA] Find cost category corresponding with sent data.

### TravelExpensemileageAllowanceApi

```typescript
import { TravelExpensemileageAllowanceApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**_delete**](TravelExpensemileageAllowanceApi.md#_delete) | **DELETE** /travelExpense/mileageAllowance/{id} | [BETA] Delete mileage allowance.
 | [**get**](TravelExpensemileageAllowanceApi.md#get) | **GET** /travelExpense/mileageAllowance/{id} | [BETA] Get mileage allowance by ID.
 | [**post**](TravelExpensemileageAllowanceApi.md#post) | **POST** /travelExpense/mileageAllowance | [BETA] Create mileage allowance.
 | [**put**](TravelExpensemileageAllowanceApi.md#put) | **PUT** /travelExpense/mileageAllowance/{id} | [BETA] Update mileage allowance.
 | [**search**](TravelExpensemileageAllowanceApi.md#search) | **GET** /travelExpense/mileageAllowance | [BETA] Find mileage allowances corresponding with sent data.

### TravelExpensepassengerApi

```typescript
import { TravelExpensepassengerApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**_delete**](TravelExpensepassengerApi.md#_delete) | **DELETE** /travelExpense/passenger/{id} | [BETA] Delete passenger.
 | [**get**](TravelExpensepassengerApi.md#get) | **GET** /travelExpense/passenger/{id} | [BETA] Get passenger by ID.
 | [**post**](TravelExpensepassengerApi.md#post) | **POST** /travelExpense/passenger | [BETA] Create passenger.
 | [**put**](TravelExpensepassengerApi.md#put) | **PUT** /travelExpense/passenger/{id} | [BETA] Update passenger.
 | [**search**](TravelExpensepassengerApi.md#search) | **GET** /travelExpense/passenger | [BETA] Find passengers corresponding with sent data.

### TravelExpensepaymentTypeApi

```typescript
import { TravelExpensepaymentTypeApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](TravelExpensepaymentTypeApi.md#get) | **GET** /travelExpense/paymentType/{id} | [BETA] Get payment type by ID.
 | [**search**](TravelExpensepaymentTypeApi.md#search) | **GET** /travelExpense/paymentType | [BETA] Find payment type corresponding with sent data.

### TravelExpenseperDiemCompensationApi

```typescript
import { TravelExpenseperDiemCompensationApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**_delete**](TravelExpenseperDiemCompensationApi.md#_delete) | **DELETE** /travelExpense/perDiemCompensation/{id} | [BETA] Delete per diem compensation.
 | [**get**](TravelExpenseperDiemCompensationApi.md#get) | **GET** /travelExpense/perDiemCompensation/{id} | [BETA] Get per diem compensation by ID.
 | [**post**](TravelExpenseperDiemCompensationApi.md#post) | **POST** /travelExpense/perDiemCompensation | [BETA] Create per diem compensation.
 | [**put**](TravelExpenseperDiemCompensationApi.md#put) | **PUT** /travelExpense/perDiemCompensation/{id} | [BETA] Update per diem compensation.
 | [**search**](TravelExpenseperDiemCompensationApi.md#search) | **GET** /travelExpense/perDiemCompensation | [BETA] Find per diem compensations corresponding with sent data.

### TravelExpenserateApi

```typescript
import { TravelExpenserateApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](TravelExpenserateApi.md#get) | **GET** /travelExpense/rate/{id} | [BETA] Get travel expense rate by ID.
 | [**search**](TravelExpenserateApi.md#search) | **GET** /travelExpense/rate | [BETA] Find rates corresponding with sent data.

### TravelExpenserateCategoryApi

```typescript
import { TravelExpenserateCategoryApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](TravelExpenserateCategoryApi.md#get) | **GET** /travelExpense/rateCategory/{id} | [BETA] Get travel expense rate category by ID.
 | [**search**](TravelExpenserateCategoryApi.md#search) | **GET** /travelExpense/rateCategory | [BETA] Find rate categories corresponding with sent data.

### TravelExpenserateCategoryGroupApi

```typescript
import { TravelExpenserateCategoryGroupApi } from 'tripletexjs';
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
 | [**get**](TravelExpenserateCategoryGroupApi.md#get) | **GET** /travelExpense/rateCategoryGroup/{id} | [BETA] Get travel report rate category group by ID.
 | [**search**](TravelExpenserateCategoryGroupApi.md#search) | **GET** /travelExpense/rateCategoryGroup | [BETA] Find rate categoriy groups corresponding with sent data.


## Documentation for Models

 - [.AbstractDTO](AbstractDTO.md)
 - [.AccommodationAllowance](AccommodationAllowance.md)
 - [.Account](Account.md)
 - [.AccountingPeriod](AccountingPeriod.md)
 - [.Activity](Activity.md)
 - [.AltinnCompanyModule](AltinnCompanyModule.md)
 - [.AnnualAccount](AnnualAccount.md)
 - [.ApiConsumer](ApiConsumer.md)
 - [.ApiError](ApiError.md)
 - [.ApiValidationMessage](ApiValidationMessage.md)
 - [.AppSpecific](AppSpecific.md)
 - [.Bank](Bank.md)
 - [.BankReconciliation](BankReconciliation.md)
 - [.BankReconciliationAdjustment](BankReconciliationAdjustment.md)
 - [.BankReconciliationMatch](BankReconciliationMatch.md)
 - [.BankReconciliationPaymentType](BankReconciliationPaymentType.md)
 - [.BankStatement](BankStatement.md)
 - [.BankTransaction](BankTransaction.md)
 - [.Banner](Banner.md)
 - [.CSVRecord](CSVRecord.md)
 - [.Change](Change.md)
 - [.CloseGroup](CloseGroup.md)
 - [.Company](Company.md)
 - [.CompanyAutoCompleteDTO](CompanyAutoCompleteDTO.md)
 - [.CompanyHoliday](CompanyHoliday.md)
 - [.ConsumerToken](ConsumerToken.md)
 - [.Contact](Contact.md)
 - [.Cost](Cost.md)
 - [.Country](Country.md)
 - [.Credentials](Credentials.md)
 - [.Currency](Currency.md)
 - [.CurrencyExchangeRate](CurrencyExchangeRate.md)
 - [.Customer](Customer.md)
 - [.CustomerCategory](CustomerCategory.md)
 - [.CustomerTripletexAccount](CustomerTripletexAccount.md)
 - [.DeliveryAddress](DeliveryAddress.md)
 - [.Department](Department.md)
 - [.Division](Division.md)
 - [.Document](Document.md)
 - [.Employee](Employee.md)
 - [.EmployeeCompanyDTO](EmployeeCompanyDTO.md)
 - [.EmployeeToken](EmployeeToken.md)
 - [.Employment](Employment.md)
 - [.EmploymentDetails](EmploymentDetails.md)
 - [.EmploymentType](EmploymentType.md)
 - [.Entitlement](Entitlement.md)
 - [.EventInfoDescription](EventInfoDescription.md)
 - [.ExternalProduct](ExternalProduct.md)
 - [.HolidayAllowanceEarned](HolidayAllowanceEarned.md)
 - [.HourlyCostAndRate](HourlyCostAndRate.md)
 - [.ImportConfigDTO](ImportConfigDTO.md)
 - [.ImportReportDTO](ImportReportDTO.md)
 - [.InternationalId](InternationalId.md)
 - [.Inventories](Inventories.md)
 - [.Inventory](Inventory.md)
 - [.Invoice](Invoice.md)
 - [.Job](Job.md)
 - [.JobDetailDTO](JobDetailDTO.md)
 - [.LeaveOfAbsence](LeaveOfAbsence.md)
 - [.LeaveOfAbsenceType](LeaveOfAbsenceType.md)
 - [.LedgerAccount](LedgerAccount.md)
 - [.Link](Link.md)
 - [.ListResponseAccommodationAllowance](ListResponseAccommodationAllowance.md)
 - [.ListResponseAccount](ListResponseAccount.md)
 - [.ListResponseAccountingPeriod](ListResponseAccountingPeriod.md)
 - [.ListResponseActivity](ListResponseActivity.md)
 - [.ListResponseAnnualAccount](ListResponseAnnualAccount.md)
 - [.ListResponseBank](ListResponseBank.md)
 - [.ListResponseBankReconciliation](ListResponseBankReconciliation.md)
 - [.ListResponseBankReconciliationAdjustment](ListResponseBankReconciliationAdjustment.md)
 - [.ListResponseBankReconciliationMatch](ListResponseBankReconciliationMatch.md)
 - [.ListResponseBankReconciliationPaymentType](ListResponseBankReconciliationPaymentType.md)
 - [.ListResponseBankStatement](ListResponseBankStatement.md)
 - [.ListResponseBankTransaction](ListResponseBankTransaction.md)
 - [.ListResponseBanner](ListResponseBanner.md)
 - [.ListResponseCloseGroup](ListResponseCloseGroup.md)
 - [.ListResponseCompany](ListResponseCompany.md)
 - [.ListResponseCompanyAutoCompleteDTO](ListResponseCompanyAutoCompleteDTO.md)
 - [.ListResponseCompanyHoliday](ListResponseCompanyHoliday.md)
 - [.ListResponseContact](ListResponseContact.md)
 - [.ListResponseCost](ListResponseCost.md)
 - [.ListResponseCountry](ListResponseCountry.md)
 - [.ListResponseCurrency](ListResponseCurrency.md)
 - [.ListResponseCustomer](ListResponseCustomer.md)
 - [.ListResponseCustomerCategory](ListResponseCustomerCategory.md)
 - [.ListResponseDeliveryAddress](ListResponseDeliveryAddress.md)
 - [.ListResponseDepartment](ListResponseDepartment.md)
 - [.ListResponseDivision](ListResponseDivision.md)
 - [.ListResponseEmployee](ListResponseEmployee.md)
 - [.ListResponseEmployeeCompanyDTO](ListResponseEmployeeCompanyDTO.md)
 - [.ListResponseEmployment](ListResponseEmployment.md)
 - [.ListResponseEmploymentDetails](ListResponseEmploymentDetails.md)
 - [.ListResponseEmploymentType](ListResponseEmploymentType.md)
 - [.ListResponseEntitlement](ListResponseEntitlement.md)
 - [.ListResponseExternalProduct](ListResponseExternalProduct.md)
 - [.ListResponseHourlyCostAndRate](ListResponseHourlyCostAndRate.md)
 - [.ListResponseInventories](ListResponseInventories.md)
 - [.ListResponseInventory](ListResponseInventory.md)
 - [.ListResponseInvoice](ListResponseInvoice.md)
 - [.ListResponseLeaveOfAbsence](ListResponseLeaveOfAbsence.md)
 - [.ListResponseLeaveOfAbsenceType](ListResponseLeaveOfAbsenceType.md)
 - [.ListResponseLedgerAccount](ListResponseLedgerAccount.md)
 - [.ListResponseMileageAllowance](ListResponseMileageAllowance.md)
 - [.ListResponseMunicipality](ListResponseMunicipality.md)
 - [.ListResponseNextOfKin](ListResponseNextOfKin.md)
 - [.ListResponseNotification](ListResponseNotification.md)
 - [.ListResponseOccupationCode](ListResponseOccupationCode.md)
 - [.ListResponseOrder](ListResponseOrder.md)
 - [.ListResponseOrderLine](ListResponseOrderLine.md)
 - [.ListResponseOrderOffer](ListResponseOrderOffer.md)
 - [.ListResponsePassenger](ListResponsePassenger.md)
 - [.ListResponsePaymentType](ListResponsePaymentType.md)
 - [.ListResponsePaymentTypeOut](ListResponsePaymentTypeOut.md)
 - [.ListResponsePayslip](ListResponsePayslip.md)
 - [.ListResponsePerDiemCompensation](ListResponsePerDiemCompensation.md)
 - [.ListResponsePersonAutoCompleteDTO](ListResponsePersonAutoCompleteDTO.md)
 - [.ListResponsePosting](ListResponsePosting.md)
 - [.ListResponseProduct](ListResponseProduct.md)
 - [.ListResponseProductLine](ListResponseProductLine.md)
 - [.ListResponseProductUnit](ListResponseProductUnit.md)
 - [.ListResponseProject](ListResponseProject.md)
 - [.ListResponseProjectCategory](ListResponseProjectCategory.md)
 - [.ListResponseProjectHourlyRate](ListResponseProjectHourlyRate.md)
 - [.ListResponseProjectInvoiceDetails](ListResponseProjectInvoiceDetails.md)
 - [.ListResponseProjectOrderLine](ListResponseProjectOrderLine.md)
 - [.ListResponseProjectParticipant](ListResponseProjectParticipant.md)
 - [.ListResponseProjectSpecificRate](ListResponseProjectSpecificRate.md)
 - [.ListResponseProspect](ListResponseProspect.md)
 - [.ListResponseReminder](ListResponseReminder.md)
 - [.ListResponseRemunerationType](ListResponseRemunerationType.md)
 - [.ListResponseSalarySpecification](ListResponseSalarySpecification.md)
 - [.ListResponseSalaryTransaction](ListResponseSalaryTransaction.md)
 - [.ListResponseSalaryType](ListResponseSalaryType.md)
 - [.ListResponseSearchCompletionDTO](ListResponseSearchCompletionDTO.md)
 - [.ListResponseStandardTime](ListResponseStandardTime.md)
 - [.ListResponseStocktaking](ListResponseStocktaking.md)
 - [.ListResponseSubscription](ListResponseSubscription.md)
 - [.ListResponseSupplier](ListResponseSupplier.md)
 - [.ListResponseSupplierBalance](ListResponseSupplierBalance.md)
 - [.ListResponseTimeClock](ListResponseTimeClock.md)
 - [.ListResponseTimesheetEntry](ListResponseTimesheetEntry.md)
 - [.ListResponseTravelCostCategory](ListResponseTravelCostCategory.md)
 - [.ListResponseTravelExpense](ListResponseTravelExpense.md)
 - [.ListResponseTravelExpenseRate](ListResponseTravelExpenseRate.md)
 - [.ListResponseTravelExpenseRateCategory](ListResponseTravelExpenseRateCategory.md)
 - [.ListResponseTravelExpenseRateCategoryGroup](ListResponseTravelExpenseRateCategoryGroup.md)
 - [.ListResponseTravelPaymentType](ListResponseTravelPaymentType.md)
 - [.ListResponseVatType](ListResponseVatType.md)
 - [.ListResponseVoucher](ListResponseVoucher.md)
 - [.ListResponseVoucherType](ListResponseVoucherType.md)
 - [.ListResponseWeek](ListResponseWeek.md)
 - [.ListResponseWorkingHoursScheme](ListResponseWorkingHoursScheme.md)
 - [.LoggedInUserInfoDTO](LoggedInUserInfoDTO.md)
 - [.MaritimeEmployment](MaritimeEmployment.md)
 - [.MaventaEventDataDTO](MaventaEventDataDTO.md)
 - [.MaventaStatusDTO](MaventaStatusDTO.md)
 - [.MileageAllowance](MileageAllowance.md)
 - [.MobileAppLogin](MobileAppLogin.md)
 - [.ModelDelete](ModelDelete.md)
 - [.Modules](Modules.md)
 - [.MonthlyStatus](MonthlyStatus.md)
 - [.Municipality](Municipality.md)
 - [.NextOfKin](NextOfKin.md)
 - [.Notification](Notification.md)
 - [.OccupationCode](OccupationCode.md)
 - [.Order](Order.md)
 - [.OrderLine](OrderLine.md)
 - [.OrderOffer](OrderOffer.md)
 - [.PG2CallbackDTO](PG2CallbackDTO.md)
 - [.Passenger](Passenger.md)
 - [.PaymentType](PaymentType.md)
 - [.PaymentTypeOut](PaymentTypeOut.md)
 - [.Payslip](Payslip.md)
 - [.PerDiemCompensation](PerDiemCompensation.md)
 - [.PersonAutoCompleteDTO](PersonAutoCompleteDTO.md)
 - [.Posting](Posting.md)
 - [.Product](Product.md)
 - [.ProductLine](ProductLine.md)
 - [.ProductUnit](ProductUnit.md)
 - [.Project](Project.md)
 - [.ProjectCategory](ProjectCategory.md)
 - [.ProjectHourlyRate](ProjectHourlyRate.md)
 - [.ProjectInvoiceDetails](ProjectInvoiceDetails.md)
 - [.ProjectOrderLine](ProjectOrderLine.md)
 - [.ProjectParticipant](ProjectParticipant.md)
 - [.ProjectSpecificRate](ProjectSpecificRate.md)
 - [.Prospect](Prospect.md)
 - [.Reminder](Reminder.md)
 - [.RemunerationType](RemunerationType.md)
 - [.ResponseWrapperAccommodationAllowance](ResponseWrapperAccommodationAllowance.md)
 - [.ResponseWrapperAccount](ResponseWrapperAccount.md)
 - [.ResponseWrapperAccountingPeriod](ResponseWrapperAccountingPeriod.md)
 - [.ResponseWrapperActivity](ResponseWrapperActivity.md)
 - [.ResponseWrapperAltinnCompanyModule](ResponseWrapperAltinnCompanyModule.md)
 - [.ResponseWrapperAnnualAccount](ResponseWrapperAnnualAccount.md)
 - [.ResponseWrapperApiConsumer](ResponseWrapperApiConsumer.md)
 - [.ResponseWrapperAppSpecific](ResponseWrapperAppSpecific.md)
 - [.ResponseWrapperBankReconciliation](ResponseWrapperBankReconciliation.md)
 - [.ResponseWrapperBankReconciliationMatch](ResponseWrapperBankReconciliationMatch.md)
 - [.ResponseWrapperBankReconciliationPaymentType](ResponseWrapperBankReconciliationPaymentType.md)
 - [.ResponseWrapperBankStatement](ResponseWrapperBankStatement.md)
 - [.ResponseWrapperBankTransaction](ResponseWrapperBankTransaction.md)
 - [.ResponseWrapperBanner](ResponseWrapperBanner.md)
 - [.ResponseWrapperBoolean](ResponseWrapperBoolean.md)
 - [.ResponseWrapperCloseGroup](ResponseWrapperCloseGroup.md)
 - [.ResponseWrapperCompany](ResponseWrapperCompany.md)
 - [.ResponseWrapperCompanyHoliday](ResponseWrapperCompanyHoliday.md)
 - [.ResponseWrapperConsumerToken](ResponseWrapperConsumerToken.md)
 - [.ResponseWrapperContact](ResponseWrapperContact.md)
 - [.ResponseWrapperCost](ResponseWrapperCost.md)
 - [.ResponseWrapperCountry](ResponseWrapperCountry.md)
 - [.ResponseWrapperCurrency](ResponseWrapperCurrency.md)
 - [.ResponseWrapperCurrencyExchangeRate](ResponseWrapperCurrencyExchangeRate.md)
 - [.ResponseWrapperCustomer](ResponseWrapperCustomer.md)
 - [.ResponseWrapperCustomerCategory](ResponseWrapperCustomerCategory.md)
 - [.ResponseWrapperDeliveryAddress](ResponseWrapperDeliveryAddress.md)
 - [.ResponseWrapperDepartment](ResponseWrapperDepartment.md)
 - [.ResponseWrapperDivision](ResponseWrapperDivision.md)
 - [.ResponseWrapperDocument](ResponseWrapperDocument.md)
 - [.ResponseWrapperDouble](ResponseWrapperDouble.md)
 - [.ResponseWrapperEmployee](ResponseWrapperEmployee.md)
 - [.ResponseWrapperEmployeeToken](ResponseWrapperEmployeeToken.md)
 - [.ResponseWrapperEmployment](ResponseWrapperEmployment.md)
 - [.ResponseWrapperEmploymentDetails](ResponseWrapperEmploymentDetails.md)
 - [.ResponseWrapperEntitlement](ResponseWrapperEntitlement.md)
 - [.ResponseWrapperExternalProduct](ResponseWrapperExternalProduct.md)
 - [.ResponseWrapperHourlyCostAndRate](ResponseWrapperHourlyCostAndRate.md)
 - [.ResponseWrapperInteger](ResponseWrapperInteger.md)
 - [.ResponseWrapperInventory](ResponseWrapperInventory.md)
 - [.ResponseWrapperInvoice](ResponseWrapperInvoice.md)
 - [.ResponseWrapperLeaveOfAbsence](ResponseWrapperLeaveOfAbsence.md)
 - [.ResponseWrapperListJob](ResponseWrapperListJob.md)
 - [.ResponseWrapperLoggedInUserInfoDTO](ResponseWrapperLoggedInUserInfoDTO.md)
 - [.ResponseWrapperMapStringEventInfoDescription](ResponseWrapperMapStringEventInfoDescription.md)
 - [.ResponseWrapperMileageAllowance](ResponseWrapperMileageAllowance.md)
 - [.ResponseWrapperModules](ResponseWrapperModules.md)
 - [.ResponseWrapperMonthlyStatus](ResponseWrapperMonthlyStatus.md)
 - [.ResponseWrapperNextOfKin](ResponseWrapperNextOfKin.md)
 - [.ResponseWrapperNotification](ResponseWrapperNotification.md)
 - [.ResponseWrapperObject](ResponseWrapperObject.md)
 - [.ResponseWrapperOrder](ResponseWrapperOrder.md)
 - [.ResponseWrapperOrderLine](ResponseWrapperOrderLine.md)
 - [.ResponseWrapperOrderOffer](ResponseWrapperOrderOffer.md)
 - [.ResponseWrapperPassenger](ResponseWrapperPassenger.md)
 - [.ResponseWrapperPaymentType](ResponseWrapperPaymentType.md)
 - [.ResponseWrapperPaymentTypeOut](ResponseWrapperPaymentTypeOut.md)
 - [.ResponseWrapperPayslip](ResponseWrapperPayslip.md)
 - [.ResponseWrapperPerDiemCompensation](ResponseWrapperPerDiemCompensation.md)
 - [.ResponseWrapperPosting](ResponseWrapperPosting.md)
 - [.ResponseWrapperProduct](ResponseWrapperProduct.md)
 - [.ResponseWrapperProductLine](ResponseWrapperProductLine.md)
 - [.ResponseWrapperProductUnit](ResponseWrapperProductUnit.md)
 - [.ResponseWrapperProject](ResponseWrapperProject.md)
 - [.ResponseWrapperProjectCategory](ResponseWrapperProjectCategory.md)
 - [.ResponseWrapperProjectHourlyRate](ResponseWrapperProjectHourlyRate.md)
 - [.ResponseWrapperProjectInvoiceDetails](ResponseWrapperProjectInvoiceDetails.md)
 - [.ResponseWrapperProjectOrderLine](ResponseWrapperProjectOrderLine.md)
 - [.ResponseWrapperProjectParticipant](ResponseWrapperProjectParticipant.md)
 - [.ResponseWrapperProjectSpecificRate](ResponseWrapperProjectSpecificRate.md)
 - [.ResponseWrapperProspect](ResponseWrapperProspect.md)
 - [.ResponseWrapperReminder](ResponseWrapperReminder.md)
 - [.ResponseWrapperSalarySettings](ResponseWrapperSalarySettings.md)
 - [.ResponseWrapperSalarySpecification](ResponseWrapperSalarySpecification.md)
 - [.ResponseWrapperSalaryTransaction](ResponseWrapperSalaryTransaction.md)
 - [.ResponseWrapperSalaryType](ResponseWrapperSalaryType.md)
 - [.ResponseWrapperSessionToken](ResponseWrapperSessionToken.md)
 - [.ResponseWrapperStandardTime](ResponseWrapperStandardTime.md)
 - [.ResponseWrapperStocktaking](ResponseWrapperStocktaking.md)
 - [.ResponseWrapperString](ResponseWrapperString.md)
 - [.ResponseWrapperSubscription](ResponseWrapperSubscription.md)
 - [.ResponseWrapperSupplier](ResponseWrapperSupplier.md)
 - [.ResponseWrapperSystemMessage](ResponseWrapperSystemMessage.md)
 - [.ResponseWrapperTimeClock](ResponseWrapperTimeClock.md)
 - [.ResponseWrapperTimesheetEntry](ResponseWrapperTimesheetEntry.md)
 - [.ResponseWrapperTimesheetSettings](ResponseWrapperTimesheetSettings.md)
 - [.ResponseWrapperTravelCostCategory](ResponseWrapperTravelCostCategory.md)
 - [.ResponseWrapperTravelExpense](ResponseWrapperTravelExpense.md)
 - [.ResponseWrapperTravelExpenseRate](ResponseWrapperTravelExpenseRate.md)
 - [.ResponseWrapperTravelExpenseRateCategory](ResponseWrapperTravelExpenseRateCategory.md)
 - [.ResponseWrapperTravelExpenseRateCategoryGroup](ResponseWrapperTravelExpenseRateCategoryGroup.md)
 - [.ResponseWrapperTravelPaymentType](ResponseWrapperTravelPaymentType.md)
 - [.ResponseWrapperTripDTO](ResponseWrapperTripDTO.md)
 - [.ResponseWrapperTripletexAccountReturn](ResponseWrapperTripletexAccountReturn.md)
 - [.ResponseWrapperUnreadCountDTO](ResponseWrapperUnreadCountDTO.md)
 - [.ResponseWrapperVatType](ResponseWrapperVatType.md)
 - [.ResponseWrapperVoucher](ResponseWrapperVoucher.md)
 - [.ResponseWrapperVoucherOptions](ResponseWrapperVoucherOptions.md)
 - [.ResponseWrapperVoucherType](ResponseWrapperVoucherType.md)
 - [.ResponseWrapperWeek](ResponseWrapperWeek.md)
 - [.Result](Result.md)
 - [.SalarySettings](SalarySettings.md)
 - [.SalarySpecification](SalarySpecification.md)
 - [.SalaryTransaction](SalaryTransaction.md)
 - [.SalaryType](SalaryType.md)
 - [.SearchCompletionDTO](SearchCompletionDTO.md)
 - [.SessionToken](SessionToken.md)
 - [.SmartScanWebhook](SmartScanWebhook.md)
 - [.StandardTime](StandardTime.md)
 - [.Stock](Stock.md)
 - [.Stocktaking](Stocktaking.md)
 - [.Subscription](Subscription.md)
 - [.Supplier](Supplier.md)
 - [.SupplierBalance](SupplierBalance.md)
 - [.SystemMessage](SystemMessage.md)
 - [.TimeClock](TimeClock.md)
 - [.TimesheetEntry](TimesheetEntry.md)
 - [.TimesheetEntrySearchResponse](TimesheetEntrySearchResponse.md)
 - [.TimesheetSettings](TimesheetSettings.md)
 - [.TravelCostCategory](TravelCostCategory.md)
 - [.TravelDetails](TravelDetails.md)
 - [.TravelExpense](TravelExpense.md)
 - [.TravelExpenseRate](TravelExpenseRate.md)
 - [.TravelExpenseRateCategory](TravelExpenseRateCategory.md)
 - [.TravelExpenseRateCategoryGroup](TravelExpenseRateCategoryGroup.md)
 - [.TravelPaymentType](TravelPaymentType.md)
 - [.TriggerDTO](TriggerDTO.md)
 - [.TripDTO](TripDTO.md)
 - [.TripletexAccount](TripletexAccount.md)
 - [.TripletexAccountReturn](TripletexAccountReturn.md)
 - [.UnreadCountDTO](UnreadCountDTO.md)
 - [.VNTCStatusDTO](VNTCStatusDTO.md)
 - [.VatType](VatType.md)
 - [.Voucher](Voucher.md)
 - [.VoucherOptions](VoucherOptions.md)
 - [.VoucherSearchResponse](VoucherSearchResponse.md)
 - [.VoucherType](VoucherType.md)
 - [.Week](Week.md)
 - [.WorkingHoursScheme](WorkingHoursScheme.md)


## Documentation for Authorization


### tokenAuthScheme

- **Type**: HTTP basic authentication


## Contributing

Send bug reports, feature requests, and code contributions to this
repository. The repository is maintained by Bjerk AS (Simen A. W. Olsen).

Contributions to this library is much appreciated. We are currently
working on creating a script that automatically updates the repository
when Tripletex updates their Swagger file. Please have a look at <thead>
project tab or issues for more information on current help-needed.

## Disclaimer

This project is not associated with Tripletex AS at all. The maintainer works with their platform and have
done so for many years. The Tripletex logo belongs to Tripletex AS. We put it there only so people would
know we are speaking of the Tripletex accounting software, owned and provided by the Norwegian registered
company Tripletex AS.
