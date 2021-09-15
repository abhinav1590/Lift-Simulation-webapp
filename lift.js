const lift= document.getElementById('lift_1');
const lift1=document.getElementById('lift_2');
const lift2= document.getElementById('lift_3');

const callBtn= document.querySelectorAll('button');
let counter = true;

function liftTrans(liftArray,initial_pos){

  const trans = 2;
  liftArray.forEach(item => 
    {item.style.transitionDuration = (trans*Math.abs((parseInt(item.style.bottom) - initial_pos)/10)).toString()+'s';});
}

function moveLift(el){

  const liftArray = [lift, lift1, lift2];
  var position = [parseInt(lift.style.bottom),parseInt(lift1.style.bottom),parseInt(lift2.style.bottom)];
  
  if(counter){
    liftArray.forEach(lift => {lift.style.bottom = '5%';})
    counter = false;
  }
  switch(el.id){

    case 'level10':
      liftTrans(liftArray,95);
      lift.style.bottom = '95%';
      break;

    case 'level9':
      liftTrans(liftArray,85);
      lift.style.bottom='85%';
      break;

    case 'level8':
      liftTrans(liftArray,75);
      if(position[0] >85 && position[1] >=55)
      lift1.style.bottom='75%';
      else
      lift.style.bottom='75%';
      break;

    case 'level7':
      liftTrans(liftArray,65);
      if(position[0] > 75 && position[1] >= 45)
      lift1.style.bottom = '65%';
      else
      lift.style.bottom='65%';
      break;

    case 'level6':
      liftTrans(liftArray,55);
        if(position[0] > 65 && position[1] >= 35
        && position[1] <= 75 && position[2] < 45)
        lift1.style.bottom = '55%';
        else if(position[1] >=65 && position[2] >= 35)
        lift2.style.bottom = '55%';
        else
        lift.style.bottom='55%';
      break;

    case 'level5':
      liftTrans(liftArray,45);
      if(position[0] > 55 && position[1] >= 15 && position[1] <= 65)
      lift1.style.bottom = '45%';
      else if(position[1] >55 && position[2] >= 15)
      lift2.style.bottom ='45%';
      else
      lift.style.bottom='45%';
      break;

    case 'level4':
      liftTrans(liftArray,35);
      if( position[0] >= 45 && position[1] < 55)
      lift1.style.bottom='35%';
      else if(position[1] >= 55)
      lift2.style.bottom='35%';
      else
      lift.style.bottom= '35%';
      break;
      
    case 'level3':
      liftTrans(liftArray,25);
      if(position[0] >= 45 && position[1] <45)
      lift1.style.bottom = '25%';
      else if(position[1] >=45)
      lift2.style.bottom = '25%';
      else
      lift.style.bottom='25%';
      break;

    case 'level2':
      liftTrans(liftArray,15);
      if(position[0] >= 35 && position[1] < 35)
      lift1.style.bottom= '15.0%';
      else if(position[1] >= 35)
      lift2.style.bottom = '15.0%';
      else
      lift.style.bottom='15.0%';
      break;
    case 'level1':
      liftTrans(liftArray,5);
      liftArray.forEach(lift => {lift.style.bottom = '5%';})
      break;
        
  }
}

callBtn.forEach(btn=> btn.addEventListener('click',(e)=>{moveLift(e.target);}))
