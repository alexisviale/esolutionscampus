const TicketManager = require('./ticketManager')
const EmailServices = require('./emailServices')
const DatabaseService = require('./databaseService')
const EmailService = require('./emailServices')

const ticketManager = new TicketManager()
const emailService = new EmailService()
const databaseService = new DatabaseService()

ticketManager.on('buy', (email, price, date) => {
    emailService.send(email)
    databaseService.save(email, price, date)
})

ticketManager.on('error', (error) => {
    ticketManager.removeAllListeners('buy')
    console.log(`Ahora si, se maneja el error: ${error}`);
})

const onBuy = () => {
    console.log('Me voy a ir pronto...');
}

ticketManager.buy('homero@mail.com', 20)
ticketManager.buy('homero@mail.com', 20)
ticketManager.buy('homero@mail.com', 20)
ticketManager.buy('homero@mail.com', 20)


console.log(`Para el evento buy, tenemos: ${ticketManager.listenerCount('buy')} escucha(s)`);
console.log(`Para el evento error, tenemos: ${ticketManager.listenerCount('error')} escucha(s)`);
