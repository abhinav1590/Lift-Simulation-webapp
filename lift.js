const lift= document.getElementById('lift_1');
const lift1=document.getElementById('lift_2');
const lift2= document.getElementById('lift_3');

const callBtn= document.querySelectorAll('button');
let counter = true;
var trans = 2;

function liftTrans(lift_id,pos1,pos2){
lift_id.style.transitionDuration = (trans*Math.abs((pos2 - pos1)/10)).toString()+'s';}

function moveLift(el){

  var position = parseFloat(lift.style.bottom);
  var position1 = parseFloat(lift1.style.bottom);
  var position2 = parseFloat(lift2.style.bottom);

  if(counter){
      lift2.style.bottom = '5%';
      lift1.style.bottom = '5%';
      lift.style.bottom = '5%';
      counter = false;
  }

  switch(el.id){

    case 'level10':
      liftTrans(lift,95,position);
      lift.style.bottom = '95%';
      break;

    case 'level9':
      liftTrans(lift,85,position);
      lift.style.bottom='85%';
      break;

    case 'level8':
      liftTrans(lift,75,position);
      liftTrans(lift1,75,position1);
      if(position >85 && position1 >=55)
      lift1.style.bottom='75%';
      else
      lift.style.bottom='75%';
      break;

    case 'level7':
      liftTrans(lift,65,position);
      liftTrans(lift1,65,position1);
      if(position > 75 && position1 >= 45)
      lift1.style.bottom = '65%';
      else
      lift.style.bottom='65%';
      break;

    case 'level6':
      liftTrans(lift,55,position);
      liftTrans(lift1,55,position1);
      liftTrans(lift2,55,position2);
      if(position !== 55 && position1 !== 55 && position2 !==55){
        if(position > 65 && position1 >= 35
        && position1 <= 75 && position2 < 45)
        lift1.style.bottom = '55%';
        else if(position1 >=65 && position2 >= 35)
        lift2.style.bottom = '55%';
        else
        lift.style.bottom='55%';
      }
      break;

    case 'level5':
      liftTrans(lift,45,position);
      liftTrans(lift1,45,position1);
      liftTrans(lift2,45,position2);
      if(position > 55 && position1 >= 25 && position1 <= 55)
      lift1.style.bottom = '45%';
      else if(position1 >55 && position2 >= 25)
      lift2.style.bottom ='45%';
      else
      lift.style.bottom='45%';
      break;

    case 'level4':
      liftTrans(lift,35,position);
      liftTrans(lift1,35,position1);
      liftTrans(lift2,35,position2);
      if( position >= 45 && position1 < 55)
      lift1.style.bottom='35%';
      else if(position1 >= 55)
      lift2.style.bottom='35%';
      else
      lift.style.bottom= '35%';
      break;
      
    case 'level3':
      liftTrans(lift,25,position);
      liftTrans(lift1,25,position1);
      liftTrans(lift2,25,position2);
      if(position >= 45 && position1 <45)
      lift1.style.bottom = '25%';
      else if(position1 >=45)
      lift2.style.bottom = '25%';
      else
      lift.style.bottom='25%';
      break;

    case 'level2':
      liftTrans(lift,15,position);
      liftTrans(lift1,15,position1);
      liftTrans(lift2,15,position2);
      if(position >= 35 && position1 < 35)
      lift1.style.bottom= '15.0%';
      else if(position1 >= 35)
      lift2.style.bottom = '15.0%';
      else
      lift.style.bottom='15.0%';
      break;
    case 'level1':
      liftTrans(lift,5,position);
      liftTrans(lift1,5,position1);
      liftTrans(lift2,5,position2);
      lift2.style.bottom = '5.0%';
      lift1.style.bottom = '5.0%';
      lift.style.bottom = '5.0%';
      break;
        
  }
}

callBtn.forEach(btn=> btn.addEventListener('click',(e)=>{moveLift(e.target);}))
