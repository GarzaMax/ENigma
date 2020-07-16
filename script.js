let button_crypt = document.querySelector('.button__crypt');
let button_encrypt = document.querySelector('.button__encrypt');

function cryptInputMessage () {
    let inputValue = document.querySelector('.input__text');
    const num_1 = document.querySelector('#num_1');
    const num_2 = document.querySelector('#num_2');
    const num_3 = document.querySelector('#num_3');
    const num_4 = document.querySelector('#num_4');
    const num_5 = document.querySelector('#num_5');
    let outputValue = document.querySelector('.output__text');
    const cryptString = inputValue.value;
    const valueNum_1 = num_1.value;
    const valueNum_2 = num_2.value;
    const valueNum_3 = num_3.value;
    const valueNum_4 = num_4.value;
    const valueNum_5 = num_5.value;
    const listCryptString = cryptString.split('');
    let outputString = ''

    outputValue.textContent = ''

    for (let i = 0; i < listCryptString.length; i++){
        listCryptString[i] = listCryptString[i].charCodeAt(0);
    }

    for (let i = 0; i < listCryptString.length; i++) {
        listCryptString[i] = listCryptString[i] * parseInt(valueNum_1) + parseInt(valueNum_2) + parseInt(valueNum_3) - parseInt(valueNum_4) - parseInt(valueNum_5);
    }

    for (let i = 0; i < listCryptString.length; i++) {
        listCryptString[i] = String.fromCharCode(listCryptString[i]);
    }

    for (let i = 0; i < listCryptString.length; i++){
        outputString += listCryptString[i];
    }
    
    outputValue.textContent = outputString;

}

function encryptInputMessage () {
        let inputValue = document.querySelector('.input__text');
        const num_1 = document.querySelector('#num_1');
        const num_2 = document.querySelector('#num_2');
        const num_3 = document.querySelector('#num_3');
        const num_4 = document.querySelector('#num_4');
        const num_5 = document.querySelector('#num_5');
        let outputValue = document.querySelector('.output__text');
        const cryptString = inputValue.value;
        const valueNum_1 = num_1.value;
        const valueNum_2 = num_2.value;
        const valueNum_3 = num_3.value;
        const valueNum_4 = num_4.value;
        const valueNum_5 = num_5.value;
        const listCryptString = cryptString.split('');
        let outputString = '';

        outputValue.textContent = '';

        for (let i = 0; i < listCryptString.length; i++){
            listCryptString[i] = listCryptString[i].charCodeAt(0);
        }

        for (let i = 0; i < listCryptString.length; i++) {
            listCryptString[i] = (listCryptString[i] - parseInt(valueNum_2) - parseInt(valueNum_3) + parseInt(valueNum_4) + parseInt(valueNum_5)) / parseInt(valueNum_1);
        }

        for (let i = 0; i < listCryptString.length; i++) {
            listCryptString[i] = String.fromCharCode(listCryptString[i]);
        }

        for (let i = 0; i < listCryptString.length; i++){
            outputString += listCryptString[i];
        }
        outputValue.textContent = outputString;
    }
    
    

button_crypt.addEventListener("click", cryptInputMessage);
button_encrypt.addEventListener("click", encryptInputMessage);