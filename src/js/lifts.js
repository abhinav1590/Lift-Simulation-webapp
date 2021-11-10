import { varButton, buttonId } from "./constants.js";

// This is where no. of lifts, position, speed gets calculated
let right = 45; 
let i = 1;
var liftArray = [];
var rightDoors = [];
var leftDoors = [];
while(i !== 5){

    liftArray.push(document.getElementById(`${'lift'.concat(i.toString())}`));
    rightDoors.push(document.getElementById(`${'rightDoor'.concat(i.toString())}`))
    leftDoors.push(document.getElementById(`${'leftDoor'.concat(i.toString())}`))
    liftArray[i-1].style.right = (right).toString() + '%';
    right -= 10;
    i++ ; 
}

let counter = true;
if(counter){
    liftArray.forEach(lift => {lift.style.bottom = '5%';});
    counter = false;
}

let trans = 2;
buttonId.onclick = () => {
    var second = parseInt(varButton.innerHTML);
    console.log(second);
    if(second == 2){
      varButton.innerHTML = '4s /floor';
      trans = 4;
    }
    else if(second == 4){
      varButton.innerHTML = '6s /floor';
      trans = 6;
    }
    else{
      varButton.innerHTML = '2s /floor';
      trans = 2;
    }
}
const liftTrans = (initial_pos) => {
  liftArray.forEach(item => {
    item.style.transitionDuration = (trans*Math.abs((parseInt(item.style.bottom) - initial_pos)/10)).toString()+'s';
  });
}

export { liftArray, liftTrans, leftDoors, rightDoors };
