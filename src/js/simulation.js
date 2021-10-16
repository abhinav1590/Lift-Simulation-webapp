import { liftTrans } from "./lifts.js";
import { callBtn } from "./constants.js";
import { liftDistance } from "./distance.js";
import switcher from "./constants.js";

function moveLift(el){
  let level = switcher[el.id];
  liftTrans(level);
  liftDistance(level);
}

callBtn.forEach(btn=> btn.addEventListener('click',(e)=>{moveLift(e.target);}))
