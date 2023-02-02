import Account from '../src/Account';
import CurrencyAPIFake from '../src/CurrencyAPIFake';
import sinon from 'sinon';
import CurrencyAPI from '../src/CurrencyAPI';

let account: Account;
let currencyAPI: CurrencyAPI

beforeEach(function () {
    currencyAPI = new CurrencyAPIFake();
    account = new Account(currencyAPI);
});

test("Should create a account", function () {
    const balance = account.getBalance();
    expect(balance).toBe(0); 
});

test("Should make a credit of R$100,00", function() {
    account.credit(100);
    const balance = account.getBalance();
    expect(balance).toBe(100);
});

test("Should make a debit of R$50,00", function() {
    account.credit(100);
    account.debit(50);
    const balance = account.getBalance();
    expect(balance).toBe(50);
});

test("Should make a credit of U$100,00 with fake", function() {
    account.credit(100, "USD");
    const balance = account.getBalance();
    expect(balance).toBe(500);
});

test("Should make a credit of U$100,00 with stub", function() {
    sinon.stub(currencyAPI, "convert").returns(600)
    account.credit(100, "USD");
    const balance = account.getBalance();
    expect(balance).toBe(500);
});

test("Should make a account with spy", function() {
    const spy = sinon.spy(account, "getBalance");
    account.getBalance();
    sinon.assert.calledOnce(spy);
});
test("Should make a credit of U$100,00 with mock", function() {
    const mock = sinon.mock(account);
    mock.expects("credit").once().withArgs(100, "USD");
    mock.expects("getBalance").once().returns(600);
    account.credit(100, "USD");
    const balance = account.getBalance();
    expect(balance).toBe(600);
    mock.verify();
});