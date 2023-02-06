"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cpf_1 = __importDefault(require("../src/Cpf"));
test("Should validate a cpf", function () {
    const cpf = new Cpf_1.default("935.411.347-80");
    expect(cpf).toBeTruthy();
});
test("Should try validate a invalid cpf", function () {
    expect(() => new Cpf_1.default("123.456.789-99")).toThrow(new Error("Invalid cpf"));
});
test("Should try validate a cpf with all digits the same", function () {
    expect(() => new Cpf_1.default("111.111.111-11")).toThrow(new Error("Invalid cpf"));
});
test("should try to validate a very large invalid cpf", function () {
    expect(() => new Cpf_1.default("123.456.789-1000")).toThrow(new Error("Invalid cpf"));
});
test("should try to validate a very small invalid cpf", function () {
    expect(() => new Cpf_1.default("123.456")).toThrow(new Error("Invalid cpf"));
});
