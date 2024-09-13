import * as el from "./elements.js";
import * as actions from './actions.js'
import state from "./state.js";
import { updateDisplay } from "./timer.js";

export function eventsTimer() {
    el.minutes.addEventListener('focus', () => { el.minutes.textContent = "" })
    el.seconds.addEventListener('focus', () => { el.seconds.textContent = "" })

    el.minutes.onkeypress = (event) => /\d/.test(event.key)
    el.seconds.onkeypress = (event) => /\d/.test(event.key)
}

export function registerControls() {
    el.controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function") {
            return
        }

        actions[action]()
        
    })
    
}

export function registerTimer() {
    el.controlTimer.addEventListener('click', (event) => {
        const actionTimer = event.target.dataset.action

        if(typeof actions[actionTimer] != 'function') {
            return
        }
        
        actions[actionTimer]()
        
    })
    
}

export function setupMinutes() {
    eventsTimer()

    el.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent

        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        updateDisplay()
    })
}

export function setupSeconds() {
    eventsTimer()

    el.seconds.addEventListener('blur', (event) => {
        let timeSeconds = event.currentTarget.textContent

        timeSeconds = timeSeconds > 59 ? 59 : timeSeconds

        state.seconds = timeSeconds
        updateDisplay()
    })
}