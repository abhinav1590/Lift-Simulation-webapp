import {liftSel, doorLeft, doorRight } from './distance.js';

const addAnimation = () => {
    liftSel.addEventListener('transitionend', () => {
        doorLeft.style.animation = 'openDoor 2.5s';
        doorRight.style.animation = 'openDoor 2.5s';
        liftSel.addEventListener('animationend', () => {
            doorLeft.style.animation = 'closeDoor 2.5s';
        doorRight.style.animation = 'closeDoor 2.5s';
        });
    });
    doorLeft.style.removeProperty('animation');
    doorRight.style.removeProperty('animation');
}

export default addAnimation;