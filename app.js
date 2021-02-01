
function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    } else {
        console.log('pin', pin);
        return getPin();
    }
}

// display
function generatePin() {
    const pinInput = document.getElementById("pin-generated");
    pinInput.value = getPin();
}
// handel calculator
const digitsContainer = document.getElementById("digits-container");
digitsContainer.addEventListener("click", function (event) {
    const digit = event.target.innerText;
    console.log('target', digit);
    if (isNaN(digit)) {
        // handle backspace
        // handle clear
        if (digit === 'C') {
            const typeInput = document.getElementById("typed-input");
            typeInput.value = '';
        }
    } else {
        const typeInput = document.getElementById("typed-input");
        typeInput.value = typeInput.value + digit;
        console.log('object');
    }
})
// verify pin
function verifyPin() {
    const pin = document.getElementById("pin-generated").value;
    const typedPin = document.getElementById("typed-input").value;
    if (pin === typedPin) {
        console.log('right');
        // const correctPin = document.getElementById("correct-pin");
        // correctPin.style.display = 'block';
        // const incorrectPin = document.getElementById("incorrect-pin");
        // incorrectPin.style.display = 'none';
        displayMatch('block', 'none');

    } else {
        console.log('wrong');
        // const correctPin = document.getElementById("correct-pin");
        // correctPin.style.display = 'none';
        // const incorrectPin = document.getElementById("incorrect-pin");
        // incorrectPin.style.display = 'block';
        displayMatch('none', 'block');
    }

    const tryCount = document.getElementById("try-count");
    
}
function displayMatch(correctStatus, incorrectStatus) {
    const correctPin = document.getElementById("correct-pin");
    correctPin.style.display = correctStatus;
    const incorrectPin = document.getElementById("incorrect-pin");
    incorrectPin.style.display = incorrectStatus;
}