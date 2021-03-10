function getinputValue(){
    let input = event.target.innerText;
     console.log(input);
     output(input)
}

function output(val){
    let out = document.querySelector("#result");
    let current = out.innerHTML;

    if(out.innerHTML =="0"){
        if(val !="C" && val !="DEL"){
            out.innerHTML ="";
            out.innerHTML += val;
        }
    }else{
        if(val =="DEL"){
            out.innerHTML = current.slice(0,-1);
            if(out.innerHTML.length <=1){
                out.innerHTML = "0";
            }
        }
        if (val !='C' && val !="DEL" && val !="="){
            out.innerHTML += val;
        }
        if(val =="C"){
            out.innerHTML="0";
        }
        if(val =="="){
            let res = out.innerHTML;
            out.innerHTML = eval(res);
        }
    }
}


//-------------------------------------------------------------


let num = document.getElementsByTagName("button");
for(var i = 0; i < num.length; i++) {
    num[i].setAttribute('onclick','getinputValue()');
}