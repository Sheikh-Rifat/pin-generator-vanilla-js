

function pinDigit4(){
    const random=Math.round(Math.random()*10000);
    const randomString=random + "";

    if(randomString.length==4){
        return random;
    }
    else{
        return pinDigit4();
    }
}



function generatePin(){
    

    document.getElementById("pin-display").value=pinDigit4();
}


// pin typing

document.getElementById("pin-type").addEventListener("click",function(event){

    const input=(event.target.innerText);

    const typedInput=document.getElementById("typed-number");

    if(isNaN(input)){
       if(input==("C")){
           typedInput.value="";
       }
       else if(input==("<")){
           typedInput.value=typedInput.value.slice(0, -1);
       }
    }
    else{
        const previousTypedInput=typedInput.value;
        const newTypedInput=previousTypedInput + input;
    
        typedInput.value=newTypedInput;
    }

   

})


// veryfying pin match

document.getElementById("submit-btn").addEventListener("click" , function(){

    const pinNumber=document.getElementById("pin-display").value;
    const typedNumber=document.getElementById("typed-number").value;

   

    const success=document.getElementById("success");
    const failed=document.getElementById("failed");
    if(pinNumber==typedNumber){
       

        success.style.display="block";
        failed.style.display="none";
    }
    else{
       
        failed.style.display="block";
        success.style.display="none";
      
        chancesLeft("chances-left");

    }
})


function chancesLeft(input){
    let chanceInput=document.getElementById(input);
    chanceInput.innerText --;
    if(chanceInput.innerText==0){
        let button=document.getElementById("submit-btn");
       button.disabled=true;
       button.style.background="#B2B1B9";
       button.style.cursor="not-allowed";
    }
}



    