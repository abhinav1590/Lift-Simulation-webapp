import {liftArray} from "./lifts.js";
import {slider, output, callBtn } from "./constants.js";
import {liftDistance} from "./distance.js";


let counter = true;
var trans = 2;
output.innerHTML = slider.value;

slider.oninput = function() {
output.innerHTML = this.value;
trans = this.value;
}

function liftTrans(initial_pos){

  liftArray.forEach(item => 
    {item.style.transitionDuration = (trans*Math.abs((parseInt(item.style.bottom) - initial_pos)/10)).toString()+'s';});
}

function moveLift(el){

  if(counter){
    liftArray.forEach(lift => {lift.style.bottom = '5%';});
    counter = false;
  }

  switch(el.id){

    case 'level10':
      liftTrans(95);
      liftArray[0].style.bottom = '92%';
      break;

    case 'level9':
      liftTrans(85);
      liftArray[0].style.bottom='84%';
      break;

    case 'level8':
      liftTrans(75);
      liftDistance(74);
      break;

    case 'level7':
      liftTrans(65);
      liftDistance(64);
      break;

    case 'level6':
      liftTrans(55);
      liftDistance(54);
      break;

    case 'level5':
      liftTrans(45);
      liftDistance(44);
      break;

    case 'level4':
      liftTrans(35);
      liftDistance(34);
      break;
      
    case 'level3':
      liftTrans(25);
      liftDistance(24);
      break;

    case 'level2':
      liftTrans(15);
      liftDistance(14);
      break;
    case 'level1':
      liftTrans(5);
      liftDistance(5);
      break;
        
  }
}

callBtn.forEach(btn=> btn.addEventListener('click',(e)=>{moveLift(e.target);}))

