var h1 = document.getElementsByTagName('h1')[0];
var inputage = document.getElementsByTagName('input')[0];
var p = document.getElementsByTagName('p')[0];
console.log(inputage);
function decrease() {
    inputage.value = parseInt(inputage.value) - 1;
    console.log(inputage.value);
}

function increase() {
    inputage.value = parseInt(inputage.value) + 1;
    console.log(inputage.value);
}

function reset() {
    inputage.value = 0;
    console.log(inputage.value);
}