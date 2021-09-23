var liftArray = [];
let i = 1;
while(i !== 5){
    liftArray.push(document.getElementById(`${'lift'.concat(i.toString())}`));
    i++ ; 
}
export { liftArray };
