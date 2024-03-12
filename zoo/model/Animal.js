export class Animal {
    constructor(sound) {
        this.sound = sound
    }

    speak(message) {
        return message.split(' ').map(word => `${word} ${this.sound} `).join('')
    }

}