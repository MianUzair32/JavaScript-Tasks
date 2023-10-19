let passwordOutput = document.querySelector('#password-output');
let lengthInput = document.querySelector('#length-input');
let uppercaseInput = document.querySelector('#uppercase-input');
let lowecaseInput = document.querySelector('#lowercase-input');
let numberInput = document.querySelector('#number-input');
let symbolInput = document.querySelector('#symbol-input');
let generateButton = document.querySelector('#generate-btn');


const getRandomLower = ()=>{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
const getRandomUpper = ()=>{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
const getRandomNumber = ()=>{
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
const getRandomSymbol = ()=>{
    const symbol = '!@#$%^&*(){}[]=<>/,.';
    return symbol[Math.floor(Math.random() * symbol.length)];
}

const generatePassword = ()=>{
    const length = parseInt(lengthInput.value);
    if (isNaN(length) || length < 8  || length > 32) {
        alert('Please enter a valid password length between 8 and 32.');
        return;
    }
    let password = '';
    let characterFunc = [];
    if(uppercaseInput.checked){
        characterFunc.push(getRandomUpper);
    }
    if (lowecaseInput.checked) {
        characterFunc.push(getRandomLower);
    }
    if (numberInput.checked) {
        characterFunc.push(getRandomNumber);
    }
    if (symbolInput.checked) {
        characterFunc.push(getRandomSymbol);
    }
    if (characterFunc.length===0) {
        alert('Please select at least one type of character.');
        return;
    }
    for(let i = 0; i < length; i++){
        const randomFunc = characterFunc[Math.floor(Math.random() * characterFunc.length)];
        password += randomFunc();
    }
  passwordOutput.textContent=password;
}
generateButton.addEventListener('click',generatePassword);