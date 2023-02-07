import Coupon from "../src/Coupon";
import Item from "../src/Item";
import Order from "../src/Order";

test("Should create an empty order with valid CPF", function () {
    const cpf = "839.435.452-10";
    const order = new Order(cpf);
    const total = order.getTotal();
    expect(total).toBe(0);
});

test("Should try create an empty order with invalid CPF", function () {
    const cpf = "111.111.111-11";
    expect(() => new Order(cpf)).toThrow(new Error("Invalid cpf"));
});

test("Should create an order with 3 items", function () {
    const cpf = "839.435.452-10";
    const order = new Order(cpf);
    order.addItem(new Item(1, "Música", "CD", 30), 3)
    order.addItem(new Item(2, "Vídeo", "DVD", 50), 1)
    order.addItem(new Item(3, "Vídeo", "VHS", 10), 2)
    const total = order.getTotal();
    expect(total).toBe(160);
});

test("Should create an order with 3 items with a discount coupon", function () {
    const cpf = "839.435.452-10";
    const order = new Order(cpf);
    order.addItem(new Item(1, "Música", "CD", 30), 3)
    order.addItem(new Item(2, "Vídeo", "DVD", 50), 1)
    order.addItem(new Item(3, "Vídeo", "VHS", 10), 2)
    order.addCoupon(new Coupon("VALE20", 20));
    const total = order.getTotal();
    expect(total).toBe(128);
});