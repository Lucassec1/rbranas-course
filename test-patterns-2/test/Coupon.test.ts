import Coupon from "../src/Coupon"

test("Should create a valid discount coupon", function () {
    const coupon = new Coupon("VALE20", 20, new Date("2023-02-12"));
    const today = new Date("2023-02-06");
    const isValid = coupon.isValid(today);
    expect(isValid).toBeTruthy();
});

test("Should create a expired discount coupon", function () {
    const coupon = new Coupon("VALE20", 20, new Date("2023-01-12"));
    const today = new Date("2023-02-06")
    const isExpired = coupon.isExpired(today);
    expect(isExpired).toBeTruthy();
});

test("Should create a valid discount coupon and calculate the discount", function () {
    const coupon = new Coupon("VALE20", 20);
    const discount = coupon.calculateDiscount(1000);
    expect(discount).toBe(200);
});