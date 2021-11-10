// all logic goes here 
let right = 45; 
let i = 1;
var liftArray = [];
var rightDoors = [];
var leftDoors = [];
let switcher = {};
let level = 94;
for( let i=10 ;i >= 1;i--){
    switcher[`level${i}`] = level;
    level = level - 10;
}
while(i !== 5){
    liftArray.push(document.getElementById(`${'lift'.concat(i.toString())}`));
    rightDoors.push(document.getElementById(`${'rightDoor'.concat(i.toString())}`))
    leftDoors.push(document.getElementById(`${'leftDoor'.concat(i.toString())}`))
    liftArray[i-1].style.right = (right).toString() + '%';
    right -= 10;
    i++ ; 
}

// all constant export here
export default switcher;
export { liftArray, rightDoors, leftDoors }
export const callBtn= document.querySelectorAll('button');
export const varButton = document.getElementById('variable');
export const buttonId = document.getElementById('buttonId');