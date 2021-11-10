import { liftArray,leftDoors, rightDoors } from "./lifts.js";

let liftSel, doorLeft, doorRight ;
const liftDistance = (pos) => {
    
    var distance = [];
    liftArray.forEach(item => {distance.push(Math.abs(parseInt(item.style.bottom) - pos));});
    
    const ClosestLift = (array) => {
        let first=array[0],count = 0 ;
        for (let i = 0; i < array.length; i ++)
        {   if (array[i] < first)
            {
                first = array[i];
                count = i;
            }
        }
        return count;
    }
    // The closest lift is called 
    var position = ClosestLift(distance);
    liftSel = liftArray[position];
    doorLeft = leftDoors[position];
    doorRight = rightDoors[position];
    liftArray[position].style.bottom = pos.toString() + '%';
}

const addAnimation = () => {
    liftSel.addEventListener('transitionend', () => {
        doorLeft.style.animation = 'openDoor 2.5s';
        doorRight.style.animation = 'openDoor 2.5s';
    });
    liftSel.addEventListener('animationend', () => {
        doorLeft.style.animation = 'closeDoor 2.5s';
    doorRight.style.animation = 'closeDoor 2.5s';
    });
    doorLeft.style.removeProperty('animation');
    doorRight.style.removeProperty('animation');
}

export {liftDistance, addAnimation}; 