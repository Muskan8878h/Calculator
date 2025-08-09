document.addEventListener("DOMContentLoaded", function(){
    //console.log("Document is ready");
    const display=document.getElementById('calc-display');
    const buttons=document.getElementsByClassName('btn');
    //console.log(display);
    //console.log(buttons);

    let currVal="";
    
    function evaluateResult(){
        console.log('current value', currVal);
        //convert the times to multiply and divion also
        const convertVal=currVal
            .replace("×","*")
            .replace("÷","/")
            .replace('%','*0.01');
    
        const result=eval(convertVal);
        currVal=result.toString();
        display.value=currVal;
    }

    for(let i=0;i<buttons.length;i++){
        const button=buttons[i];
        button.addEventListener('click',function(){
            const value=button.innerText;
            if(value=='AC'){
                currVal="";
                display.value=currVal;
            }
            else if(value== '='){
                evaluateResult();
            }
            else{
                currVal+=value;
                display.value=currVal;
            }
        })
    }
    
});
