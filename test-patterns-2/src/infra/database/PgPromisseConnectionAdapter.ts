import Connection from "./Connection";
import pgp from "pg-promise";

export default class PgPromisseConnectionAdapter implements Connection {
    pgp: any;
    
    constructor () {
        this.pgp = pgp()("postgres://postgres:root@localhost:5432/app");
    }

    query(statement: string, params: any[]): Promise<any> {
        return this.pgp.query(statement, params);
    }
}