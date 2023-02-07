import Coupon from "../src/Coupon";
import DefaultFreightCalculator from "../src/DefaultFreightCalculator";
import FixedFreightCalculator from "../src/FixedFreightCalculator";
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

test("Should create an order with 3 items with a discount expired coupon", function () {
    const cpf = "839.435.452-10";
    const order = new Order(cpf, new Date("2023-02-15"));
    order.addItem(new Item(1, "Música", "CD", 30), 3)
    order.addItem(new Item(2, "Vídeo", "DVD", 50), 1)
    order.addItem(new Item(3, "Vídeo", "VHS", 10), 2)
    order.addCoupon(new Coupon("VALE20", 20, new Date("2023-02-06")));
    const total = order.getTotal();
    expect(total).toBe(160);
});

test("Should create an order with 3 items with the freight calculation with default strategy", function () {
    const cpf = "839.435.452-10";
    const order = new Order(cpf, new Date(), new DefaultFreightCalculator());
    order.addItem(new Item(4, "Instrumentos Musicais", "Guitarra", 1000, 100, 30, 10, 3), 1)
    order.addItem(new Item(5, "Instrumentos Musicais", "Amplificador", 5000, 100, 50, 50, 20), 1)
    order.addItem(new Item(6, "Acessórios", "Cabo", 30, 10, 10, 10, 0.9), 3)
    const freight = order.getFreight();
    expect(freight).toBe(260);
});

test("Should create an order with 3 items with the freight calculation with fixed strategy", function () {
    const cpf = "839.435.452-10";
    const order = new Order(cpf, new Date(), new FixedFreightCalculator());
    order.addItem(new Item(4, "Instrumentos Musicais", "Guitarra", 1000, 100, 30, 10, 3), 1)
    order.addItem(new Item(5, "Instrumentos Musicais", "Amplificador", 5000, 100, 50, 50, 20), 1)
    order.addItem(new Item(6, "Acessórios", "Cabo", 30, 10, 10, 10, 0.9), 3)
    const freight = order.getFreight();
    expect(freight).toBe(50);
});