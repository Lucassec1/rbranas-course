import Beer from "../../../src/behavioral/template_method/Beer";
import Invoice from "../../../src/behavioral/template_method/Invoice";
import Water from "../../../src/behavioral/template_method/Water";
import Whisky from "../../../src/behavioral/template_method/Whisky";

test("Deve criar uma nota fiscal", function () {
    const invoice = new Invoice();
    invoice.addItem(new Beer("Heineken", 10));
    invoice.addItem(new Whisky("Jack Daniels", 100));
    invoice.addItem(new Water("Santa Catarina", 5));
    const taxes = invoice.getTaxes();
    expect(taxes).toBe(21); 
});