import PriceCalculator from "./PriceCalculator";

export default class AirportPriceCalculator implements PriceCalculator {
    calculate(hours: number): number {
        let price = 20;
        const minHours = 3;
        const remaningHours = hours - minHours;  
        if (remaningHours <= 0) return price;
        return price += remaningHours * 10;
    }
}