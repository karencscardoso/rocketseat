import * as sounds from '../sounds.js'
import * as el from './elements.js'

export function stopAllSounds(currentButton, currentColor) {
    sounds.forest.pause()
    sounds.forest.currentTime = 0
    sounds.rain.pause()
    sounds.rain.currentTime = 0
    sounds.cafeteria.pause()
    sounds.cafeteria.currentTime = 0
    sounds.fireplace.pause()
    sounds.fireplace.currentTime = 0

    const buttons = [el.forest, el.rain, el.cafeteria, el.fireplace];
    buttons.forEach(button => {
        if (button !== currentButton) {
            button.classList.remove('btn-selected');
        }
    });

    const colorWhite = [el.iforest, el.irain, el.icafeteria, el.ifireplace];
    colorWhite.forEach(color => {
        if (color !== currentColor) {
            color.classList.remove('color-white');
        }
    });
}

export function toggleSound(sound, button, color) {
    if (sound.paused) {
        stopAllSounds(button, color)
        sound.play()
        button.classList.add('btn-selected')
        color.classList.add('color-white')


    } else {
        sound.pause()
        button.classList.remove('btn-selected')
        color.classList.remove('color-white')

    }
}

export function forest() {
    toggleSound(sounds.forest, el.forest, el.iforest);
}


export function rain() {
    toggleSound(sounds.rain, el.rain, el.irain)
}

export function cafeteria() {
    toggleSound(sounds.cafeteria, el.cafeteria, el.icafeteria)
}

export function fireplace() {
    toggleSound(sounds.fireplace, el.fireplace, el.ifireplace)
}

