
elem = document.getElementById("lift");
floor1 = 403
floor2 = 276
floor3 = 155
floor4 = 33
pos = floor1;
function MoveDownFloor1() {

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

    var id = setInterval(frame, 12);
  
    function frame() {
  
        if (pos == floor2 ) {
            clearInterval(id);
        } else {
            if(elem.style.top < floor2 + "px") {
                pos++;
                elem.style.top = pos + "px";
        }   else {
                    if( elem.style.top < floor4){
                        pos = floor2
                        elem.style.top = floor1 + "px";
                    }
                    else{
                pos--;
                elem.style.top = pos + "px"; }
            }
    }
  }
}

function MoveDownFloor3() {

    var id = setInterval(frame, 12);
  
    function frame() {
  
      if (pos == floor3) {
        clearInterval(id);
      } else {
        if(elem.style.top < floor3 + "px") {
            pos++;
            elem.style.top = pos + "px";
        }else  {
            if( elem.style.top < floor4){
                pos = floor3
                elem.style.top = floor3 + "px";
            } 
            else{
            pos--;
            elem.style.top = pos + "px"; }
        }
        }
    }
}

function MoveDownFloor4()
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