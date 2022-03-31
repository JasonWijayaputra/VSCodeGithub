// document.createElement(); document.createTextNode();
const pbaru = document.createElement('p');
const textbaru = document.createTextNode('Text has changed');
// document.appendChild() menampilkan var t di akhir text;
pbaru.appendChild(textbaru);


const section_a = document.getElementById('a');
section_a.appendChild(pbaru);
const libaru = document.createElement('li');
const textlibaru = document.createTextNode('New item has inserted');
libaru.appendChild(textlibaru);

const ul = document.querySelector('section#b ul');
const li2 = document.querySelector('li:nth-child(2)');

ul.insertBefore(libaru, li2);

const link = document.getElementsByTagName('a')[0];
section_a.removeChild(link);


const section_b = document.getElementById('b');
const p4 = section_b.querySelector('p');

const h2baru = document.createElement('h2');
const texth2baru = document.createTextNode('New title has changed');

h2baru.appendChild(texth2baru);
section_b.replaceChild(h2baru, p4);

pbaru.style.backgroundColor = 'lightgreen';
h2baru.style.backgroundColor = 'orange';
libaru.style.backgroundColor = 'red';

