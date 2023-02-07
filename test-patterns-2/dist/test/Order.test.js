"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Coupon_1 = __importDefault(require("../src/Coupon"));
const Item_1 = __importDefault(require("../src/Item"));
const Order_1 = __importDefault(require("../src/Order"));
test("Should create an empty order with valid CPF", function () {
    const cpf = "839.435.452-10";
    const order = new Order_1.default(cpf);
    const total = order.getTotal();
    expect(total).toBe(0);
});
test("Should try create an empty order with invalid CPF", function () {
    const cpf = "111.111.111-11";
    expect(() => new Order_1.default(cpf)).toThrow(new Error("Invalid cpf"));
});
test("Should create an order with 3 items", function () {
    const cpf = "839.435.452-10";
    const order = new Order_1.default(cpf);
    order.addItem(new Item_1.default(1, "Música", "CD", 30), 3);
    order.addItem(new Item_1.default(2, "Vídeo", "DVD", 50), 1);
    order.addItem(new Item_1.default(3, "Vídeo", "VHS", 10), 2);
    const total = order.getTotal();
    expect(total).toBe(160);
});
test("Should create an order with 3 items with a discount coupon", function () {
    const cpf = "839.435.452-10";
    const order = new Order_1.default(cpf);
    order.addItem(new Item_1.default(1, "Música", "CD", 30), 3);
    order.addItem(new Item_1.default(2, "Vídeo", "DVD", 50), 1);
    order.addItem(new Item_1.default(3, "Vídeo", "VHS", 10), 2);
    order.addCoupon(new Coupon_1.default("VALE20", 20));
    const total = order.getTotal();
    expect(total).toBe(128);
});
