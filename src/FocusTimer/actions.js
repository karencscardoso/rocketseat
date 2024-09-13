import state from './state.js'
import * as sounds from '../sounds.js'
import * as timer from './timer.js'
import * as el from './elements.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()

    sounds.buttonPress.play()

}

export function reset() {
    state.minutes = 0;
    state.seconds = 0

    timer.updateDisplay()

    state.isRunning = false
    document.documentElement.classList.remove('running')

    sounds.buttonPress.play()
    
}

export function setMinutes() {    
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
    sounds.buttonPress.play()
}

export function setSeconds() {
    el.seconds.setAttribute('contenteditable', true)
    el.seconds.focus()
    sounds.buttonPress.play()
}

export function up() {
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds += 5

    if(seconds => 60) {
        minutes += Math.floor(seconds / 60)
        seconds = seconds % 60
    }

    state.minutes = minutes
    state.seconds = seconds

    timer.updateDisplay(minutes, seconds)

    sounds.buttonPress.play()

}

export function down() {
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds -= 5

    if(seconds < 0) {
        if(minutes < 0) {
            minutes -= 1
            seconds += 60
        } else {
            seconds = 0
        }

    }

    state.minutes = minutes
    state.seconds = seconds

    timer.updateDisplay(minutes, seconds)

    sounds.buttonPress.play()

}
