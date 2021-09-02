
var elem = document.getElementById("lift");
const floor1 = 1125
const floor2 = 1005
const floor3 = 882
const floor4 = 760
const floor5 = 640
const floor6 = 515
const floor7 = 393
const floor8 = 274
const floor9 = 150
const floor10 = 33
pos = floor1;

const interval = 6

function MoveToFloor1() {

    var id = setInterval(frame,interval);
    function frame() {
        if (pos == floor1) {
        clearInterval(id);
        counter++;
        }   else {
            pos++;
            elem.style.top = pos + 'px';
    }
  }
}
function MoveDownFloor2() {

    if (pos!= floor1){
    var id = setInterval(frame, interval);
    function frame() {
        if(pos == floor2){
            clearInterval(id);
        }
             else {
                pos++;
                elem.style.top = pos + "px";
            }
        }
    }
}
function MoveUpFloor2()
{
    if(pos > floor3){
    var id = setInterval(frame,interval);
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
    var id = setInterval(frame, interval);
  
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
    var id = setInterval(frame, interval);
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
function MoveUpFloor4()
{
    if(pos > floor5){
    var id = setInterval(frame, interval);
    function frame()
    {
        if(pos == floor4)
        clearInterval(id);

        else{
            pos --;
            elem.style.top = pos + "px";
        }
    }
}}
function MoveDownFloor4()
{
    if( pos< floor3){
    var id = setInterval(frame , interval);
    function frame()
    {
        if(pos == floor4)
        clearInterval(id);
        else{
            pos ++;
            elem.style.top = pos + "px";
         } 
     }
  }
}
function MoveUpFloor5()
{
    if(pos > floor6){
    var id = setInterval(frame, interval);
    function frame()
    {
        if(pos == floor5)
        clearInterval(id);

        else{
            pos --;
            elem.style.top = pos + "px";
        }
    }
}}
function MoveDownFloor5()
{
    if( pos< floor4){
    var id = setInterval(frame , interval);
    function frame()
    {
        if(pos == floor5)
        clearInterval(id);
        else{
            pos ++;
            elem.style.top = pos + "px";
         } 
     }
  }
}
function MoveUpFloor6()
{
    if(pos > floor7){
    var id = setInterval(frame, interval);
    function frame()
    {
        if(pos == floor6)
        clearInterval(id);

        else{
            pos --;
            elem.style.top = pos + "px";
        }
    }
}}
function MoveDownFloor6()
{
    if( pos< floor5){
    var id = setInterval(frame , interval);
    function frame()
    {
        if(pos == floor6)
        clearInterval(id);
        else{
            pos ++;
            elem.style.top = pos + "px";
         } 
     }
  }
}
function MoveUpFloor7()
{
    if(pos > floor8){
    var id = setInterval(frame, interval);
    function frame()
    {
        if(pos == floor7)
        clearInterval(id);

        else{
            pos --;
            elem.style.top = pos + "px";
        }
    }
}}
function MoveDownFloor7()
{
    if( pos< floor6){
    var id = setInterval(frame , interval);
    function frame()
    {
        if(pos == floor7)
        clearInterval(id);
        else{
            pos ++;
            elem.style.top = pos + "px";
         } 
     }
  }
}
function MoveUpFloor8()
{
    if(pos > floor9){
    var id = setInterval(frame, interval);
    function frame()
    {
        if(pos == floor8)
        clearInterval(id);

        else{
            pos --;
            elem.style.top = pos + "px";
        }
    }
}}
function MoveDownFloor8()
{
    if( pos< floor7){
    var id = setInterval(frame , interval);
    function frame()
    {
        if(pos == floor8)
        clearInterval(id);
        else{
            pos ++;
            elem.style.top = pos + "px";
         } 
     }
  }
}
function MoveUpFloor9()
{
    if(pos > floor10){
    var id = setInterval(frame, interval);
    function frame()
    {
        if(pos == floor9)
        clearInterval(id);

        else{
            pos --;
            elem.style.top = pos + "px";
        }
    }
}}
function MoveDownFloor9()
{
    if( pos< floor8){
    var id = setInterval(frame , interval);
    function frame()
    {
        if(pos == floor9)
        clearInterval(id);
        else{
            pos ++;
            elem.style.top = pos + "px";
         } 
     }
  }
}
function MoveToFloor10()
{
    var id = setInterval(frame, interval);
    function frame()
    {
        if(pos == floor10)
        clearInterval(id);
        else 
        {
            pos--;
            elem.style.top = pos + "px";
        }
    }
}
