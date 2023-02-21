import GetOrders from "../../../src/application/query/get_orders/GetOrders";
import PlaceOrder from "../../../src/application/usecase/place_order/PlaceOrder";
import OrderDAODatabase from "../../../src/infra/dao/OrderDAODatabase";
import PgPromiseConnectionAdapter from "../../../src/infra/database/PgPromiseConnectionAdapter";
import DatabaseRepositoryFactory from "../../../src/infra/factory/DatabaseRepositoryFactory";
import OrderRepositoryDatabase from "../../../src/infra/repository/database/OrderRepositoryDatabase";

let placeOrder: PlaceOrder;
let getOrders: GetOrders;
let orderRepository: OrderRepositoryDatabase;

beforeEach(function () {
  const connection = PgPromiseConnectionAdapter.getInstance();
  orderRepository = new OrderRepositoryDatabase(connection);
  const repositoryFactory = new DatabaseRepositoryFactory();
  placeOrder = new PlaceOrder(repositoryFactory);
  const orderDAO = new OrderDAODatabase(connection);
  getOrders = new GetOrders(orderDAO);
});

test("Deve obter todos os pedidos", async function () {
  const input = {
    cpf: "839.435.452-10",
    orderItems: [
      { idItem: 1, quantity: 1 },
      { idItem: 2, quantity: 1 },
      { idItem: 3, quantity: 3 },
    ],
    date: new Date("2022-12-10"),
    coupon: "VALE20",
  };
  await placeOrder.execute(input);
  const getOrdersOutput = await getOrders.execute();
  expect(getOrdersOutput.orders).toHaveLength(1);
});

afterEach(async function () {
  await orderRepository.clear();
});
