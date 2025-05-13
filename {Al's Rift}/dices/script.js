//DICES
/*script.js*/

function d4() {
    return Math.floor(Math.random() * (4 - 1 + 1) + 1);
}

function d6() {
    return Math.floor(Math.random() * (6 - 1 + 1) + 1);
}

function d8() {
    return Math.floor(Math.random() * (8 - 1 + 1) + 1);
}

function d10() {
    return Math.floor(Math.random() * (9 - 0 + 0) + 0);
}

function d10_0() {
    return Math.floor(Math.random() * (9 - 0 + 0) + 0) + '0';
}

function d12() {
    return Math.floor(Math.random() * (12 - 1 + 1) + 1);
}

function d20() {
    return Math.floor(Math.random() * (20 - 1 + 1) + 1);
}


//TEST
/*for (let i = 0; i < 50; i++) {
    let i = d10_0();
    console.log(i);
}*/

//EVENT_LISTENERS
//D4
const d4roll = document.getElementById('d4');
d4roll.addEventListener("click", d4throw);

function d4throw(event) {
    d4result = d4();
    //D4Result
    document.getElementById('d4r').innerHTML = d4result;
}

//D6
const d6roll = document.getElementById('d6');
d6roll.addEventListener("click", d6throw);

function d6throw(event) {
    d6result = d6();
    //D6Result
    document.getElementById('d6r').innerHTML = d6result;
}

//D8
const d8roll = document.getElementById('d8');
d8roll.addEventListener("click", d8throw);

function d8throw(event) {
    d8result = d8();
    //D8Result
    document.getElementById('d8r').innerHTML = d8result;
}

//D10
const d10roll = document.getElementById('d10');
d10roll.addEventListener("click", d10throw);

function d10throw(event) {
    d10result = d10();
    //D10Result
    document.getElementById('d10r').innerHTML = d10result;
}

//D100
const d10_0roll = document.getElementById('d10_0');
d10_0roll.addEventListener("click", d10_0throw);

function d10_0throw(event) {
    d10_0result = d10_0();
    //D10_0Result
    document.getElementById('d10_0r').innerHTML = d10_0result;
}

//D12
const d12roll = document.getElementById('d12');
d12roll.addEventListener("click", d12throw);

function d12throw(event) {
    d12result = d12();
    //D12Result
    document.getElementById('d12r').innerHTML = d12result;
}

//D20
const d20roll = document.getElementById('d20');
d20roll.addEventListener("click", d20throw);

function d20throw(event) {
    d20result = d20();
    //D20Result
    document.getElementById('d20r').innerHTML = d20result;
}