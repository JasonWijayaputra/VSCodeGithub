// const p3 = document.querySelector('.p3');

// function ubahwarnap2(){
// p2.style.backgorundColor = 'lightblue';
// }
// function ubahwarnap3(){
//     p3.style.backgorundColor = 'lightblue';
//     }
// const p2 = document.querySelector('.p2');
// p2.onclick = ubahwarnap2;


const p1 = document.querySelector('section#a p');
p1.addEventListener('mouseenter',function(){
    const ul = document.querySelector('section#a p');
    const li = document.createElement('p');
    const text = document.createTextNode('New Paragraph has added');
    li.appendChild(text);
    ul.appendChild(li);
   
});

const p2 = document.querySelector('.p2');
p2.addEventListener('mouseenter', function(){
    p2.style.backgroundColor = 'orange';
});
p2.addEventListener('mouseleave', function(){
    p2.style.backgroundColor = 'blue';
});

const p3 = document.querySelector('.p3');
// p3.onclick = function(){
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function(){
//     p3.style.color = 'red';
// }
p3.addEventListener('mouseenter', function(){
    p3.style.backgroundColor = 'pink';
});
p3.addEventListener('mouseleave', function(){
    p3.style.backgroundColor = 'yellow';
});

const p4 = document.querySelector('section#b p');
p4.addEventListener('mouseenter',function(){
    const ul = document.querySelector('section#b ul');
    const li = document.createElement('li');
    const text = document.createTextNode('New Item has added');
    li.appendChild(text);
    ul.appendChild(li);
});


