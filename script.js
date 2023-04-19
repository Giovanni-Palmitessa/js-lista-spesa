const arrList = [
    'pane',
    'pasta',
    'pesce',
    'vino',
    'acqua',
    'pesce'
]

const eleList = document.getElementById('#list');

i = 0 ;

while (i < arrList.lenght) {
    console.log(arrList[i]);
    eleList.innerHTML += `<li>${arrList[i]}</li>`;
    i++
}