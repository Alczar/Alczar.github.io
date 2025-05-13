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

function d20() {
    return Math.floor(Math.random() * (20 - 1 + 1) + 1);
}

for (let i = 0; i < 50; i++) {
    let i = d10_0();
    console.log(i);
}