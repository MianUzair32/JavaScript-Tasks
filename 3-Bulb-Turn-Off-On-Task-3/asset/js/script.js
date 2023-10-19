const img = document.querySelector('#bulb');
const buttonSwitch = document.querySelector('#btn');
buttonSwitch.addEventListener('click',()=>{
console.log(img.src);

if(img.src.match('off')){
    img.src='asset/img/pic_bulbon.gif';
    buttonSwitch.innerHTML= 'Turn Off';
}
else{
    img.src='asset/img/pic_bulboff.gif';
    buttonSwitch.innerHTML='Turn On';
}
});
