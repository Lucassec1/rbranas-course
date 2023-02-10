import PgPromisseConnectionAdapter from "../../src/infra/database/PgPromisseConnectionAdapter";

test("Deve criar uma conexão com o banco de dados", async function () {
    const connection = new PgPromisseConnectionAdapter();
    const itemsDate = await connection.query("select * from ccca.item", []);
    console.log(itemsDate);
    expect(itemsDate).toHaveLength(6);
});