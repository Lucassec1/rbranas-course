"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = __importDefault(require("../src/Account"));
const CurrencyAPIFake_1 = __importDefault(require("../src/CurrencyAPIFake"));
let account;
beforeEach(function () {
    const currencyAPI = new CurrencyAPIFake_1.default();
    account = new Account_1.default(currencyAPI);
});
test("Should create a account", function () {
    const balance = account.getBalance();
    expect(balance).toBe(0);
});
test("Should make a credit of R$100,00", function () {
    account.credit(100);
    const balance = account.getBalance();
    expect(balance).toBe(100);
});
test("Should make a debit of R$50,00", function () {
    account.credit(100);
    account.debit(50);
    const balance = account.getBalance();
    expect(balance).toBe(50);
});
test("Should make a credit of U$100,00", function () {
    account.credit(100, "USD");
    const balance = account.getBalance();
    expect(balance).toBe(500);
});
