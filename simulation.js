
elem = document.getElementById("lift");
floor1 = 403
floor2 = 276
floor3 = 155
floor4 = 33
pos = floor1;
function MoveToFloor1() {

    var id = setInterval(frame, 12);

    function frame() {

    if (pos == floor1) {
        clearInterval(id);
    } else {
        pos++;
        elem.style.top = pos + 'px';
    }
  }
}
function MoveDownFloor2() {

    if (pos!= floor1){
    var id = setInterval(frame, 12);
  
    function frame() {
  
        if (pos == floor2 ) {
            clearInterval(id);
        } else {
                pos++;
                elem.style.top = pos + "px";
            }
        }
    }
}
function MoveUpFloor2()
{
    if(pos > floor3){
    var id = setInterval(frame, 12);
    function frame(){
            if(pos == floor2){
                clearInterval(id);
            }
            else {
            
                pos--;
                elem.style.top = pos + "px";
            }
        }
   }
}
function MoveDownFloor3() {

    if (pos!= floor1 && pos!= floor2){
    var id = setInterval(frame, 12);
  
    function frame() {
  
      if (pos == floor3) {
        clearInterval(id);
      } else {
            pos++;
            elem.style.top = pos + "px";
            }
        }
    }
}
function MoveUpFloor3()
{
    if(pos > floor4){
    var id = setInterval(frame, 12);
    function frame(){
        if(pos == floor3){
            clearInterval(id);
        }
        else {
            pos--;
            elem.style.top = pos + "px";
            }
        }
    }
}
function MoveToFloor4()
{
    var id = setInterval(frame, 12);
    function frame()
    {
        if(pos == floor4)
        clearInterval(id);
        else 
        {
            pos--;
            elem.style.top = pos + "px";
        }
    }
}
