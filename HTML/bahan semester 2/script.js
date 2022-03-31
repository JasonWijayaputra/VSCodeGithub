//const judul = document.getElementById('judul');
//judul.style.color = 'red';
//judul.style.backgroundColor = 'blue';
//judul.innerHTML = 'Jason Wijayaputra';

//const p = document.getElementsByTagName('p');
//for (let i = 0; i < p.length; i++) {
//    p[i].style.backgroundColor = 'cyan';
//}
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini diubah dari javascript';

//const p4 = document.querySelector('#b p');
//p4.style.color = 'green';
//p4.style.color = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(1)');
li2.style.backgroundColor = 'orange';


const p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

const sectionb = document.querySelector('section#b');
const p4 = sectionb.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';