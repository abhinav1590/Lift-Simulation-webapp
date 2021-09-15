const lift= document.getElementById('lift_1');
const lift1=document.getElementById('lift_2');
const lift2= document.getElementById('lift_3');

const callBtn= document.querySelectorAll('button');
let counter = true;

function liftTrans(lift_id1,lift_id2,lift_id3,initial_pos){

  var trans = 2;
  lift_id1.style.transitionDuration = (trans*Math.abs((parseInt(lift_id1.style.bottom) - initial_pos)/10)).toString()+'s';
  lift_id2.style.transitionDuration = (trans*Math.abs((parseInt(lift_id2.style.bottom) - initial_pos)/10)).toString()+'s';
  lift_id3.style.transitionDuration = (trans*Math.abs((parseInt(lift_id3.style.bottom) - initial_pos)/10)).toString()+'s';
}

function moveLift(el){

  var position = parseInt(lift.style.bottom);
  var position1 = parseInt(lift1.style.bottom);
  var position2 = parseInt(lift2.style.bottom);

  if(counter){
    lift2.style.bottom = '5%';
    lift1.style.bottom = '5%';
    lift.style.bottom = '5%';
    counter = false;
  }
  switch(el.id){

    case 'level10':
      liftTrans(lift,lift1,lift2,95);
      lift.style.bottom = '95%';
      break;

    case 'level9':
      liftTrans(lift,lift1,lift2,85);
      lift.style.bottom='85%';
      break;

    case 'level8':
      liftTrans(lift,lift1,lift2,75);
      if(position >85 && position1 >=55)
      lift1.style.bottom='75%';
      else
      lift.style.bottom='75%';
      break;

    case 'level7':
      liftTrans(lift,lift1,lift2,65);
      if(position > 75 && position1 >= 45)
      lift1.style.bottom = '65%';
      else
      lift.style.bottom='65%';
      break;

    case 'level6':
      liftTrans(lift,lift1,lift2,55);
        if(position > 65 && position1 >= 35
        && position1 <= 75 && position2 < 45)
        lift1.style.bottom = '55%';
        else if(position1 >=65 && position2 >= 35)
        lift2.style.bottom = '55%';
        else
        lift.style.bottom='55%';
      break;

    case 'level5':
      liftTrans(lift,lift1,lift2,45);
      if(position > 55 && position1 >= 25 && position1 <= 55)
      lift1.style.bottom = '45%';
      else if(position1 >55 && position2 >= 25)
      lift2.style.bottom ='45%';
      else
      lift.style.bottom='45%';
      break;

    case 'level4':
      liftTrans(lift,lift1,lift2,35);
      if( position >= 45 && position1 < 55)
      lift1.style.bottom='35%';
      else if(position1 >= 55)
      lift2.style.bottom='35%';
      else
      lift.style.bottom= '35%';
      break;
      
    case 'level3':
      liftTrans(lift,lift1,lift2,25);
      if(position >= 45 && position1 <45)
      lift1.style.bottom = '25%';
      else if(position1 >=45)
      lift2.style.bottom = '25%';
      else
      lift.style.bottom='25%';
      break;

    case 'level2':
      liftTrans(lift,lift1,lift2,15);
      if(position >= 35 && position1 < 35)
      lift1.style.bottom= '15.0%';
      else if(position1 >= 35)
      lift2.style.bottom = '15.0%';
      else
      lift.style.bottom='15.0%';
      break;
    case 'level1':
      liftTrans(lift,lift1,lift2,5);
      lift2.style.bottom = '5.0%';
      lift1.style.bottom = '5.0%';
      lift.style.bottom = '5.0%';
      break;
        
  }
}

callBtn.forEach(btn=> btn.addEventListener('click',(e)=>{moveLift(e.target);}))
