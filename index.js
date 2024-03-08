const button1 = document.querySelector('#btn-1');
const button2 = document.querySelector('#btn-2');
const body = document.querySelector('body');
const copyCode = document.querySelector('.copyCode');
let color1 = '#fff';
let color2 = '#000';

button1.addEventListener('click', function () {
    const hexaValue = '0123456789abcdef';
    let colors = '#'; 
    for (let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * 16);
        colors = `${colors}${hexaValue[random]}`
        color1 = colors;
    }
    console.log(colors);
    body.style.backgroundImage = `linear-gradient(to right, ${color1},${color2})`;
    copyCode.innerText = `background-image: linear-gradient(to right, ${color1}, 
    #a8eb12);`
   button1.innerHTML = color1;
            
}); 

button2.addEventListener('click', function () {
    const hexaValue = '0123456789abcdef';
    let colors = '#';
    for (let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * 16);
        colors = `${colors}${hexaValue[random]}`
        color2 = colors;
    }
    console.log(colors);
    body.style.backgroundImage = `linear-gradient(to right, ${color1},${color2})`;
    copyCode.innerText = `background-image: linear-gradient(to right, ${color1}, 
    ${color2});`
   button2.innerHTML = color2;
});

copyCode.addEventListener('click',function(){

    navigator.clipboard.writeText(copyCode.innerText);
    alert('Copied!')
});




