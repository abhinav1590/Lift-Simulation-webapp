import { liftArray,leftDoors, rightDoors } from "./constants.js";

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

export { liftDistance, liftSel, doorLeft, doorRight }; 