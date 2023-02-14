// CONVERTER a interface de uma classe em outra interface, esperada pelos clientes, permitindo que as classes com interfaces incompatíveis trabalhem juntas

import PaypalTransaction from "../../../src/structural/adapter/PaypalTransaction";
import PaypalTransactionAdapter from "../../../src/structural/adapter/PaypalTransactionAdapter";
import StripeTransaction from "../../../src/structural/adapter/StripeTransaction";
import StripeTransactionAdapter from "../../../src/structural/adapter/StripeTransactionAdapter";

test("Deve criar uma transação do Stripe", function () {
    const stripeTransaction = new StripeTransaction("AHN786AB8", 1000, 2);
    expect(stripeTransaction.code).toBe("AHN786AB8");
});

test("Deve criar uma transação do Paypal", function () {
    const stripeTransaction = new PaypalTransaction(78978978, 1000, "S");
    expect(stripeTransaction.id).toBe(78978978);
});

test("Deve criar uma transação a partir do Stripe", function () {
    const stripeTransaction = new StripeTransaction("AHN786AB8", 1000, 2);
    const transaction = new StripeTransactionAdapter(stripeTransaction);
    expect(transaction.trackNumber).toBe("AHN786AB8");
    expect(transaction.amount).toBe(1000);
    expect(transaction.status).toBe("paid");
});

test("Deve criar uma transação a partir do Paypal", function () {
    const paypalTransaction = new PaypalTransaction(78978978, 1000, "S");
    const transaction = new PaypalTransactionAdapter(paypalTransaction);
    expect(transaction.trackNumber).toBe("78978978");
    expect(transaction.amount).toBe(1000);
    expect(transaction.status).toBe("paid");
});