import { liftArray } from "./lifts.js";

function liftDistance(pos){
    
    var distance = [];
    liftArray.forEach(item => {distance.push(Math.abs(parseInt(item.style.bottom) - pos));});
    
    let position = 0;
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
    position = ClosestLift(distance);
    liftArray[position].style.bottom = pos.toString() + '%';
}

export { liftDistance };
