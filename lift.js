const lift= document.getElementById('lift');
const callBtn= document.querySelectorAll('button');
const t1 = '1.5s'
const t2 = '3.0s'
function moveLift(el){
  var position = parseFloat(lift.style.bottom);
  if(position >= 62.2 || position <=33.4)
    lift.style.transitionDuration = t1;
  else
    lift.style.transitionDuration= t2;
  switch(el.id){
    case 'level10':
      if(position == 81.4)
      lift.style.transitionDuration = t1;
      else
      lift.style.transitionDuration= t2;
      lift.style.bottom = '90.8%';
      break;
    case 'level9':
      if(position == 71.7 || position == 90.8)
      lift.style.transitionDuration = t1;
      else
      lift.style.transitionDuration= t2;
      lift.style.bottom='81.4%';
      break;
    case 'level8':
      if(position == 62.2 || position == 81.4)
      lift.style.transitionDuration = t1;
      else
      lift.style.transitionDuration= t2;
      lift.style.bottom='71.7%';
      break;
    case 'level7':
      if(position == 52.4 || position == 71.7)
      lift.style.transitionDuration = t1;
      else
      lift.style.transitionDuration= t2;
      lift.style.bottom='62.2%';
      break;
    case 'level6':
      if(position == 42.7 || position == 62.2)
      lift.style.transitionDuration = t1;
      else
      lift.style.transitionDuration= t2;
      lift.style.bottom='52.4%';
      break;
    case 'level5':
      if(position == 33.4 || position == 52.4)
      lift.style.transitionDuration = t1;
      else
      lift.style.transitionDuration= t2;
      lift.style.bottom='42.7%';
      break;
    case 'level4':
      if(position == 23.8 || position == 42.7)
      lift.style.transitionDuration = t1;
      else
      lift.style.transitionDuration= t2;
      lift.style.bottom='33.4%';
      break;
    case 'level3':
      if(position == 33.4 || position == 14.6)
      lift.style.transitionDuration =t1;
      else
      lift.style.transitionDuration= t2;
      lift.style.bottom='23.8%';
      break;
    case 'level2':
      if(position == 5.3 || position == 23.8)
      lift.style.transitionDuration = t1;
      else
      lift.style.transitionDuration= t2;
      lift.style.bottom='14.6%';
    break;
    case 'level1':
      if(position == 14.6)
      lift.style.transitionDuration = t1;
      else
      lift.style.transitionDuration= t2;
      lift.style.bottom='5.3%';
      break;
  }
}
callBtn.forEach(btn=> btn.addEventListener('click',(e)=>{moveLift(e.target);}))
