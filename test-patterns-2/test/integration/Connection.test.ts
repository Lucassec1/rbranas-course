import PgPromiseConnectionAdapter from "../../src/infra/database/PgPromiseConnectionAdapter";

test("Deve criar uma conexão com o banco de dados", async function () {
  const connection = PgPromiseConnectionAdapter.getInstance();
  const itemsDate = await connection.query("select * from ccca.item", []);
  expect(itemsDate).toHaveLength(6);
});
