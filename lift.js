const lift= document.getElementById('lift');
const callBtn= document.querySelectorAll('button');

function moveLift(el){
  switch(el.id){
    case 'level10':
    lift.style.bottom = '90.5%';
    break;
    case 'level9':
    lift.style.bottom='81.1%';
    break;
    case 'level8':
    lift.style.bottom='71.5%';
    break;
    case 'level7':
    lift.style.bottom='61.9%';
    break;
    case 'level6':
    lift.style.bottom='52.1%';
    break;
    case 'level5':
    lift.style.bottom='42.5%';
    break;
    case 'level4':
    lift.style.bottom='33.0%';
    break;
    case 'level3':
    lift.style.bottom='23.2%';
    break;
    case 'level2':
    lift.style.bottom='13.5%';
    break;
    case 'level1':
    lift.style.bottom='4%';
    break;
  }
}
callBtn.forEach(btn=> btn.addEventListener('click',(e)=>{
  moveLift(e.target);
}))
