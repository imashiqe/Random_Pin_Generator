function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
       return pin;
    }
    else{
        // console.log('pin not 3 digit found' , pin);
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    // display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

// calculator

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    if(isNaN(number)){
        if(number === 'c'){
             typedNumberField.value = '';
        }
        else if(number === '<'){
            console.log(pre)
        }
    }
   else{
       const typedNumberField = document.getElementById('typed-numbers');
       const previousTypeNumber =  typedNumberField.value;
       const newTypedNumber = previousTypeNumber + number;
       typedNumberField.value = newTypedNumber;
   }
})