const EventEmitter = require('events');
const { timestamp } = require('events');
const ks = new EventEmitter()
ks.on('greet', (name) => {
    console.log(`Hello there, ${name}!`);
});
ks.on(`exit`,(number)=>{
    console.log(`Exiting....thankyou ${number}`);
})
ks.emit('greet', 'jivisha');
ks.emit('exit', 110);

class Button extends EventEmitter {
    click(){
        console.log('Button clicked');
        this.emit('click',{timestamp: Date.now()});
    }
}
const button = new Button();
button.on('click', (event) => {
    console.log(`Button was clicked at ${event.timestamp}`);
});
button.click();