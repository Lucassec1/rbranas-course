"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    constructor(currencyAPI) {
        this.balance = 0;
        this.currencyAPI = currencyAPI;
    }
    credit(amount, currency) {
        if (currency) {
            amount = this.currencyAPI.convert(amount, currency);
        }
        this.balance += amount;
    }
    debit(amount) {
        this.balance -= amount;
    }
    getBalance() {
        return this.balance;
    }
}
exports.default = Account;
