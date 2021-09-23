import { liftArray } from "./lifts.js";

function liftDistance(pos){

    var distance = [];
    liftArray.forEach(item => {distance.push(Math.abs(parseInt(item.style.bottom) - pos));});
  
    if(distance[0] === distance[1] && distance[1] === distance[2] && distance[2] === distance[3])
    liftArray[0].style.bottom = pos.toString() +'%';
    else if(distance[0] < distance[1] && distance[0] < distance[2] && distance[0] < distance[3])
    liftArray[0].style.bottom = pos.toString() + '%';
    else if(distance[1] < distance[0] && distance[1] < distance[2] && distance[1] < distance[3])
    liftArray[1].style.bottom = pos.toString() + '%';
    else if(distance[2] < distance[0] && distance[2] < distance[1] && distance[2] < distance[3])
    liftArray[2].style.bottom = pos.toString() + '%';
    else if(distance[3] < distance[0] && distance[3] < distance[1] && distance[3] < distance[2])
    liftArray[3].style.bottom = pos.toString() + '%';
    else if(distance[0] == distance[1])
    liftArray[0].style.bottom = pos.toString() + '%';
    else if(distance[1] == distance[2])
    liftArray[1].style.bottom = pos.toString() + '%';
    else if(distance[2] == distance[3])
    liftArray[2].style.bottom = pos.toString() + '%';
}

export { liftDistance };

