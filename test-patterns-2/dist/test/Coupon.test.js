"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Coupon_1 = __importDefault(require("../src/Coupon"));
test("Should create a valid discount coupon", function () {
    const coupon = new Coupon_1.default("VALE20", 20, new Date("2023-02-12"));
    const today = new Date("2023-02-06");
    const isValid = coupon.isValid(today);
    expect(isValid).toBeTruthy();
});
test("Should create a expired discount coupon", function () {
    const coupon = new Coupon_1.default("VALE20", 20, new Date("2023-01-12"));
    const today = new Date("2023-02-06");
    const isExpired = coupon.isExpired(today);
    expect(isExpired).toBeTruthy();
});
test("Should create a valid discount coupon and calculate the discount", function () {
    const coupon = new Coupon_1.default("VALE20", 20);
    const discount = coupon.calculateDiscount(1000);
    expect(discount).toBe(200);
});
