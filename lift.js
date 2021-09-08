const lift= document.getElementById('lift_1');
const lift1=document.getElementById('lift_2');
const lift2= document.getElementById('lift_3');

const callBtn= document.querySelectorAll('button');
let counter = true;

function moveLift(el){

  var position = parseFloat(lift.style.bottom);
  var position1 = parseFloat(lift1.style.bottom);
  var position2 = parseFloat(lift2.style.bottom);

  if(counter){
      lift2.style.bottom = '5.3%';
      lift1.style.bottom = '5.3%';
      lift.style.bottom = '5.3%';
      counter = false;
  }

  switch(el.id){

    case 'level10':
      lift.style.bottom = '90.8%';
      break;

    case 'level9':
      lift.style.bottom='81.4%';
      break;

    case 'level8':
      if(position >81.4 && position1 >=52.4)
      lift1.style.bottom='71.7%';
      else
      lift.style.bottom='71.7%';
      break;

    case 'level7':
      if(position > 71.7 && position1 >= 42.7)
      lift1.style.bottom = '62.2%';
      else
      lift.style.bottom='62.2%';
      break;

    case 'level6':
      if(position >62.2 && position1 >= 33.4 
        && position1 <= 71.7 && position2!= 42.7)
      lift1.style.bottom = '52.4%';
      else if(position1 >=71.7 && position2 >= 33.4)
      lift2.style.bottom = '52.4%';
      else
      lift.style.bottom='52.4%';
      break;

    case 'level5':
      if(position > 62.2 && position1 >= 23.8 && position1 <= 62.2)
      lift1.style.bottom = '42.7%';
      else if(position1 >=62.2 && position2 >= 23.8)
      lift2.style.bottom ='42.7%';
      else
      lift.style.bottom='42.7%';
      break;

    case 'level4':
      if( position >= 52.4 && position1 < 52.4)
      lift1.style.bottom='33.4%';
      else if(position1 >= 52.4)
      lift2.style.bottom='33.4%';
      else
      lift.style.bottom= '33.4%';
      break;
      
    case 'level3':
      if(position >= 42.7 && position1 <42.7)
      lift1.style.bottom = '23.8%';
      else if(position1 >=42.7)
      lift2.style.bottom = '23.8%';
      else
      lift.style.bottom='23.8%';
      break;

    case 'level2':
      if(position >= 33.4 && position1 < 33.4)
      lift1.style.bottom= '14.6%';
      else if(position1 >= 33.4)
      lift2.style.bottom = '14.6%';
      else
      lift.style.bottom='14.6%';
      break;
    case 'level1':
      lift2.style.bottom = '5.3%';
      lift1.style.bottom = '5.3%';
      lift.style.bottom = '5.3%';
      break;
        
  }
}

callBtn.forEach(btn=> btn.addEventListener('click',(e)=>{moveLift(e.target);}))
