const lift= document.getElementById('lift');
const lift1=document.getElementById('lift1');
const callBtn= document.querySelectorAll('button');
const t1 = '1.5s'
const t2 = '3s'
function moveLift(el){

  var position = parseFloat(lift.style.bottom);
  var position1 = parseFloat(lift1.style.bottom);

  switch(el.id){
    case 'level10':
      //transition
      if(position == 81.4)
      lift.style.transitionDuration = t1;
      else
      lift.style.transitionDuration= t2;
      
      lift.style.bottom = '90.8%';
      break;
    case 'level9':
      //transition
      if(position == 71.7 || position == 90.8)
      lift.style.transitionDuration = t1;
      else
      lift.style.transitionDuration= t2;

      lift.style.bottom='81.4%';
      break;
    case 'level8':
      //transition
      if(position == 62.2 || position == 81.4)
      {lift.style.transitionDuration = t1;
        lift1.style.transitionDuration = t1;}
      else{
      lift.style.transitionDuration= t2;
        lift1.style.transitionDuration = t2;}
      
      // lift movement
      if(position >81.4 && position1 >=52.4)
      lift1.style.bottom='71.7%';
      else
      lift.style.bottom='71.7%';
      break;
    case 'level7':
      //transition
      if(position == 52.4 || position == 71.7)
      {lift.style.transitionDuration = t1;
        lift1.style.transitionDuration= t1;}
      else
      {lift.style.transitionDuration= t2;
        lift1.style.transitionDuration= t2;}
      
      // lift movement
      if(position > 71.7 && position1 >= 42.7)
      lift1.style.bottom = '62.2%';
      else
      lift.style.bottom='62.2%';
      break;
    case 'level6':
      //transition
      if(position == 42.7 || position == 62.2)
      {lift.style.transitionDuration = t1;
        lift1.style.transitionDuration = t1;}
      else
      {lift.style.transitionDuration= t2;
        lift1.style.transitionDuration= t2;}

      // lift movement
      if(position >62.2 && position1 >= 33.4)
      lift1.style.bottom = '52.4%';
      else
      lift.style.bottom='52.4%';
      break;
    case 'level5':
      //transition
      if(position == 33.4 || position == 52.4)
      {lift.style.transitionDuration = t1;
        lift1.style.transitionDuration= t1;}
      else
      {lift.style.transitionDuration= t2;
        lift1.style.transitionDuration= t2;}

      // lift movement
      if(position > 52.4 && position1 >= 23.8)
      lift1.style.bottom = '42.7%';
      else
      lift.style.bottom='42.7%';
      break;
    case 'level4':
      //transition
      if(position == 23.8 || position == 42.7)
      {lift.style.transitionDuration = t1;
        lift1.style.transitionDuration = t1;}
      else
      {lift.style.transitionDuration= t2;
        lift1.style.transitionDuration= t2;}

      // lift movement
      if( position >= 52.4)
      lift1.style.bottom='33.4%';
      else
      lift.style.bottom= '33.4%';
      break;
    case 'level3':
      //transition
      if(position == 33.4 || position == 14.6)
      {lift.style.transitionDuration =t1;
        lift1.style.transitionDuration =t1;}
      else
      {lift.style.transitionDuration= t2;
        lift1.style.transitionDuration= t2;}
      //lift movement  
      if(position >= 42.7 )
      lift1.style.bottom = '23.8%';
      else
      lift.style.bottom='23.8%';
      break;
    case 'level2':
      //transition
      if(position == 5.3 || position == 23.8)
      {lift.style.transitionDuration = t1;
      lift1.style.transitionDuration = t1;}
      else
      {lift.style.transitionDuration= t2;
      lift1.style.transitionDuration = t2;}
      //lift movement
      if(position >= 33.4 )
      lift1.style.bottom= '14.6%';
      else
      lift.style.bottom='14.6%';
      break;
    case 'level1':
      //transition
      if(position == 14.6)
      {lift.style.transitionDuration = t1;
      lift1.style.transitionDuration= t1;}
      else
      {lift.style.transitionDuration= t2;
        lift1.style.transitionDuration= t2;}
      // lift movement
      lift1.style.bottom ='5.3%';
      lift.style.bottom='5.3%';
      break;
  }
}
callBtn.forEach(btn=> btn.addEventListener('click',(e)=>{moveLift(e.target);}))
