const TicketManager = require('./ticketManager')

const ticketManager = new TicketManager(4)

ticketManager.on('buy', () => {
    console.log('Alguien compró un ticket.');
})

ticketManager.once('buy', () => {
    console.log('Cualquier cosa, una única vez');
})
