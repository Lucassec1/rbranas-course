import Order from "../../domain/entity/Order";
import ItemRepository from "../../domain/repository/ItemRepository";
import OrderRepository from "../../domain/repository/OrderRepository";
import PlaceOrderInput from "./PlaceOrderInput";
import PlaceOrderOutput from "./PlaceOrderOutput";

export default class PlaceOrder {
    
    constructor (
        readonly itemRepository: ItemRepository,
        readonly orderRepository: OrderRepository,
        readonly couponRepository: CouponRepository
    ) {}

    async execute(input: PlaceOrderInput): Promise<PlaceOrderOutput> {
        const order = new Order(input.cpf, input.date);
        for (const orderItem of input.orderItems) {
            const item = await this.itemRepository.findById(orderItem.idItem);
            if (!item) throw new Error("Item not found");
            order.addItem(item, orderItem.quantity);
        }
        if (input.coupon) {
            order.addCoupon()
        }
        await this.orderRepository.save(order);
        const total = order.getTotal();
        const output = new PlaceOrderOutput(total);
        return output;
    }
}