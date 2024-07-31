const display=document.getElementById("display")

function appendToDisplay(input){
     
    

    
    if(display.value.length==0){
        display.value += input;
    }
    
    
    
    
    else if(display.value.charAt(display.value.length -1) === '+' || display.value.charAt(display.value.length -1) === "-" || display.value.charAt(display.value.length -1) ==="*" || display.value.charAt(display.value.length -1) === "/" || display.value.charAt(display.value.length -1) ==="%"){
           let k=input
           if(k !="+" && k != "-" && k != "*" && k !="/" && k != "%"){
            display.value += input;
            }

        }  
    else{
        
            display.value += input;
        
        
    }
    
    
}



function cleardisplay(input){
    display.value = "";
}

function back() {
    
    display.value = display.value.slice(0,-1);
    
}

function calculate(){
    try{

    
    display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}