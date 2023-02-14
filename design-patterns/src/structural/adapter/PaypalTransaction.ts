export default class PaypalTransaction {

    constructor (
        readonly id: number, 
        readonly amount: number,
        readonly status: string
    ) {}
}