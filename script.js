const arrList = [
    'pane',
    'pasta',
    'pesce',
    'vino',
    'acqua',
    'pesce'
]

const eleList = document.querySelector('#list');

const eleBtn = document.querySelector('#add');


let i = 0 ;
while (i < arrList.length) {
    console.log(arrList[i]);
    eleList.innerHTML += `<li>${arrList[i]}</li>`;
    i++
}

let addToList = document.querySelector('#input-add');

eleBtn.addEventListener ('click', function () {
    addToList = document.getElementById('input-add').value;
    console.log(addToList);

    arrList.push(addToList)

    eleList.innerHTML += `<li>${addToList}</li>`;
})