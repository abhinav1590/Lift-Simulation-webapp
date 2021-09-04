const lift= document.getElementById('lift');
const callBtn= document.querySelectorAll('button');

function moveLift(el){
  switch(el.id){
    case 'level10':
    lift.style.bottom = '90.8%';
    break;
    case 'level9':
    lift.style.bottom='81.4%';
    break;
    case 'level8':
    lift.style.bottom='71.7%';
    break;
    case 'level7':
    lift.style.bottom='62.2%';
    break;
    case 'level6':
    lift.style.bottom='52.4%';
    break;
    case 'level5':
    lift.style.bottom='42.7%';
    break;
    case 'level4':
    lift.style.bottom='33.4%';
    break;
    case 'level3':
    lift.style.bottom='23.8%';
    break;
    case 'level2':
    lift.style.bottom='14.6%';
    break;
    case 'level1':
    lift.style.bottom='5.4%';
    break;
  }
}
callBtn.forEach(btn=> btn.addEventListener('click',(e)=>{
  moveLift(e.target);
}))
