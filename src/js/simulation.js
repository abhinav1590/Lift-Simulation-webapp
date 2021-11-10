import { liftTrans } from "./lifts.js";
import { callBtn } from "./constants.js";
import {liftDistance, addAnimation} from "./distance.js";
import switcher from "./constants.js";

const moveLift = (el) => {
  let level = switcher[el.id];
  liftTrans(level);
  liftDistance(level);
  addAnimation();
}

callBtn.forEach(btn=> btn.addEventListener('click',(e)=>{moveLift(e.target);}))
