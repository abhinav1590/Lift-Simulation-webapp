// all constants come here 
export const callBtn= document.querySelectorAll('button');
export const varButton = document.getElementById('variable');
export const buttonId = document.getElementById('buttonId');

let switcher = {};
let level = 94;
for( let i=10 ;i >= 1;i--){
    switcher[`level${i}`] = level;
    level = level - 10;
}

export default switcher;