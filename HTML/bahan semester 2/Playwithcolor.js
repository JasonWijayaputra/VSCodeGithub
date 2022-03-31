const change = document.getElementById('Changecolor');
change.onclick = function(){
    // document.body.style.backgroundColor = 'lightgreen';
    document.body.classList.toggle('biru-muda');
}

const Acakwarna = document.createElement('button');
const buttons = document.createTextNode('Acak Warna');
Acakwarna.appendChild(buttons);
Acakwarna.setAttribute('type', 'button');
change.after(Acakwarna);
Acakwarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';

});
const slidermerah = document.querySelector('input[name=slidemerah]');
const sliderhijau = document.querySelector('input[name=slidehijau]');
const sliderbiru = document.querySelector('input[name=slidebiru]');
slidermerah.addEventListener('input', function(){
    const r = slidermerah.value;
    const g = sliderhijau.value;
    const b = sliderbiru.value;

 document.body.style.backgroundColor = 'rgb('+r+', '+g+','+b+')';
});
    
sliderhijau.addEventListener('input', function(){
    const r = slidermerah.value;
    const g = sliderhijau.value;
    const b = sliderbiru.value;
 document.body.style.backgroundColor = 'rgb('+r+', '+g+','+b+')';
});

sliderbiru.addEventListener('input', function(){
    const r = slidermerah.value;
    const g = sliderhijau.value;
    const b = sliderbiru.value;
 document.body.style.backgroundColor = 'rgb('+r+', '+g+','+b+')';
});

document.body.addEventListener('mousemove', function(event){
    //event.clientX
    const posisiX = Math.round((event.clientX / window.innerWidth) * 255);
    const posisiY = Math.round((event.clientY / window.innerHeight) * 255);
    
    document.body.style.backgroundColor = 'rgb('+posisiX+', '+posisiY+', 100)'
});