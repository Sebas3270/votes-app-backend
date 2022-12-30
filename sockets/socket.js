const { io } = require('../index')
const Sports = require('../models/sports');
const Sport = require('../models/sport')


const sports = new Sports()

sports.addSport(new Sport('Crossfit', 5));
sports.addSport(new Sport('Soccer', 1));
sports.addSport(new Sport('Basketball', 2));
sports.addSport(new Sport('Tenis', 4));
sports.addSport(new Sport('Swimming', 2));

console.log(sports);

io.on('connection', client => {
    
    console.log('Client connected: ', client.id)

    client.emit('active-sports', sports.getSports())

    client.on('disconnect', () => { 
        console.log('Client disconnected: ', client.id)
    });

    client.on('message', (payload) => {
        console.log(payload)

        io.emit('message', {message: 'New message'})
    })

    client.on('emit-message', (payload) => {
        console.log('I listened')
        client.broadcast.emit('new-message', payload);
    })

    client.on('active-sports', (sports) => {
        console.log(sports)
    })

    client.on('vote-sport', (payload) => {
        sports.voteSport(payload.id);
        io.emit('active-sports', sports.getSports());
    })

    client.on('add-sports',(payload) => {
        sports.addSport(new Sport(payload.name));
        io.emit('active-sports', sports.getSports());
    });

    client.on('delete-sports',(payload) => {
        sports.deleteSport(payload.id);
        io.emit('active-sports', sports.getSports());
    });

});