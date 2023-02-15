// Liskov Substitution Principle: Se "S" (Beer, Whisky, Water) é subclasse de "T" (Item), então os objetos do tipo T (Item) podem ser substituídos por objetos do tipo "S", SEM QUEBRAR O COMPORTAMENTO DO PROGRAMA

// Interface Segregation Principle: Uma subclasse NÃO DEVE IMPLEMENTAS MÉTODOS QUE ELA NÃO PRECISA, quebre em múltiplas interfaces

import Item from "./Item";

export default class Water extends Item {
    constructor (description: string, price: number) {
        super("Water", description, price);
    }
}