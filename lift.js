const lift= document.getElementById('lift_1');
const lift1=document.getElementById('lift_2');
const lift2= document.getElementById('lift_3');
const lift3= document.getElementById('lift_4');

const callBtn= document.querySelectorAll('button');
let counter = true;
const liftArray = [lift, lift1, lift2, lift3];

function liftTrans(initial_pos){

  const trans = 2;
  liftArray.forEach(item => 
    {item.style.transitionDuration = (trans*Math.abs((parseInt(item.style.bottom) - initial_pos)/10)).toString()+'s';});
}

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

function moveLift(el){

  if(counter){
    liftArray.forEach(lift => {lift.style.bottom = '5%';});
    counter = false;
  }

  switch(el.id){

    case 'level10':
      liftTrans(95);
      lift.style.bottom = '95%';
      break;

    case 'level9':
      liftTrans(85);
      lift.style.bottom='85%';
      break;

    case 'level8':
      liftTrans(75);
      liftDistance(75);
      break;

    case 'level7':
      liftTrans(65);
      liftDistance(65);
      break;

    case 'level6':
      liftTrans(55);
      liftDistance(55);
      break;

    case 'level5':
      liftTrans(45);
      liftDistance(45);
      break;

    case 'level4':
      liftTrans(35);
      liftDistance(35);
      break;
      
    case 'level3':
      liftTrans(25);
      liftDistance(25);
      break;

    case 'level2':
      liftTrans(15);
      liftDistance(15);
      break;
    case 'level1':
      liftTrans(5);
      liftArray.forEach(lift => {lift.style.bottom = '5%';});
      break;
        
  }
}

callBtn.forEach(btn=> btn.addEventListener('click',(e)=>{moveLift(e.target);}))
