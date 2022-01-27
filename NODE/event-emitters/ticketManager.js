const EventEmmiter = require('events');
const { EventEmitter } = require('stream');

class TicketManager extends EventEmitter {
    constructor(supply) {
        super()
        this.supply = supply
    }

    buy(email, price) {
        if(this.supply > 0){
            this.supply--
            this.emit('buy', email, price, Date.now())
            return supply
        }
        this.emit('No hay más tickets')
    }
    

}

module.exports = TicketManager