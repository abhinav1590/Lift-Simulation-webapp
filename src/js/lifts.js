import { varButton, buttonId, liftArray } from "./constants.js";

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

export default liftTrans;
