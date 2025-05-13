//LOGIC GATES
//**STATEMENTS**
//BUTTONS
let bool1;
//document.getElementById('status1').textContent = boolFirst
let bool2;

let bool3_1;
let bool3_2;

let bool4_1;
let bool4_2;

let bool5_1;
let bool5_2;

let bool6_1;
let bool6_2;

let bool7_1;
let bool7_2;

let bool8_1;
let bool8_2;

//DOORS
let door1; //
let door2;
let door3;
let door4;
let door5;
let door6;
let door7;
let door8;

function debug() {
//console.log(bool3_1 || bool3_2);
}

debug();

//**FUNCTIONS**
//BUTTON
function offOn(bolVal) {
    return bolVal = !bolVal;
}

//GATES
    //Gate YN
    function ynGate(btn1, door) {
        if (btn1 === undefined) {
            door = undefined;
        } else if (btn1 === true) {
            door = true;
        } else if (btn1 === false) {
            door = false;
        }
        return door;
    }
    
    //Gate NOT
    function notGate(btn1, door) {
        if (btn1 === undefined) {
            door = undefined;
        } else if (!btn1) {
            door = true;
        } else {
            door = false;
        }
        return door;
    }
    
    //Gate AND
    function andGate(btn1, btn2, door) {
        if (btn1 === undefined || btn2 === undefined) {
            door = undefined;
        } else if (btn1 && btn2) {
            door = true;    
        } else {
            door = false;
        }
        return door;
    }
    
    //Gate OR
    function orGate(btn1, btn2, door) {
        if (btn1 === undefined || btn2 === undefined) {
            door = undefined;
        } else if (btn1 || btn2) {
            door = true;    
        } else {
            door = false;
        }
        return door;
    }

    //Gate NAND
    function nandGate(btn1, btn2, door) {
        if (btn1 === undefined || btn2 === undefined) {
            door = undefined;
        } else if (!btn1 || !btn2) {
            door = true;    
        } else {
            door = false;
        }
        return door;
    }

    //Gate NOR
    function norGate(btn1, btn2, door) {
        if (btn1 === undefined || btn2 === undefined) {
            door = undefined;
        } else if (!btn1 && !btn2) {
            door = true;    
        } else {
            door = false;
        }
        return door;
    }

    //Gate XOR
    function xorGate(btn1, btn2, door) {
        if (btn1 === undefined || btn2 === undefined) {
            door = undefined;
        } else if ((btn1 && !btn2) || (!btn1 && btn2)) /*also "if (btn1 === btn2)" works marvels...*/ { 
            door = true;    
        } else {
            door = false;
        }
        return door;
    }

    //Gate XNOR
    function xnorGate(btn1, btn2, door) {
        if (btn1 === undefined || btn2 === undefined) {
            door = undefined;
        } else if ((btn1 && btn2) || (!btn1 && !btn2)) {
            door = true;    
        } else {
            door = false;
        }
        return door;
    }

//**EVENT LISTENER**
//DOOR1/YN
const switch1 = document.getElementById('switch1');
switch1.addEventListener("click", ynGateKeeper);

function ynGateKeeper(event) {
    bool1 = offOn(bool1);
    //Button1
    if (bool1) {
        document.getElementById('switch1').innerHTML = 'On';
        switch1.style.color = 'lime';
        switch1.style.backgroundColor = 'green';
    } else {
        document.getElementById('switch1').innerHTML = 'Off';
        switch1.style.color = 'pink';
        switch1.style.backgroundColor = 'red';
    }
    //Door1
    door1 = ynGate(bool1, door1);
    if (door1) {
        document.getElementById('status1').innerHTML = true;
        status1.style.color = 'green';
    } else {
        document.getElementById('status1').innerHTML = false;
        status1.style.color = 'red';
    }
}

//DOOR2/NOT
const switch2 = document.getElementById('switch2');
switch2.addEventListener("click", notGateKeeper);

function notGateKeeper(event) {
    bool2 = offOn(bool2);
    //Button2
    if (bool2) {
        document.getElementById('switch2').innerHTML = 'On';
        switch2.style.color = 'lime';
        switch2.style.backgroundColor = 'green';
    } else {
        document.getElementById('switch2').innerHTML = 'Off';
        switch2.style.color = 'pink';
        switch2.style.backgroundColor = 'red';
    }
    //Door2
    door2 = notGate(bool2, door2);
    if (door2) {
        document.getElementById('status2').innerHTML = true;
        status2.style.color = 'green';
    } else {
        document.getElementById('status2').innerHTML = false;
        status2.style.color = 'red';
    }
}

//DOOR3/AND
const switch3_1 = document.getElementById('switch3_1');
const switch3_2 = document.getElementById('switch3_2');

switch3_1.addEventListener("click", andGateKeeper);
switch3_2.addEventListener("click", andGateKeeper);

function andGateKeeper(event) {
    const clickedSwitch = event.target;

    if (clickedSwitch === switch3_1) {
        bool3_1 = offOn(bool3_1);
        //Button3_1
        if (bool3_1) {
            document.getElementById('switch3_1').innerHTML = 'On';
            switch3_1.style.color = 'lime';
            switch3_1.style.backgroundColor = 'green';
        } else {
            document.getElementById('switch3_1').innerHTML = 'Off';
            switch3_1.style.color = 'pink';
            switch3_1.style.backgroundColor = 'red';
        }
    } else if (clickedSwitch === switch3_2) {
        bool3_2 = offOn(bool3_2);
        //Button3_2
        if (bool3_2) {
            document.getElementById('switch3_2').innerHTML = 'On';
            switch3_2.style.color = 'lime';
            switch3_2.style.backgroundColor = 'green';
        } else {
            document.getElementById('switch3_2').innerHTML = 'Off';
            switch3_2.style.color = 'pink';
            switch3_2.style.backgroundColor = 'red';
        }
    }
    //Door3
    door3 = andGate(bool3_1, bool3_2, door3);
    if (door3 === undefined) {
        null;
    } else if (door3) {
        document.getElementById('status3').innerHTML = true;
        status3.style.color = 'green';
    } else {
        document.getElementById('status3').innerHTML = false;
        status3.style.color = 'red';
    }
}

//DOOR4/OR
const switch4_1 = document.getElementById('switch4_1');
const switch4_2 = document.getElementById('switch4_2');

switch4_1.addEventListener("click", orGateKeeper);
switch4_2.addEventListener("click", orGateKeeper);

function orGateKeeper(event) {
    const clickedSwitch = event.target;

    if (clickedSwitch === switch4_1) {
        bool4_1 = offOn(bool4_1);
        //Button4_1
        if (bool4_1) {
            document.getElementById('switch4_1').innerHTML = 'On';
            switch4_1.style.color = 'lime';
            switch4_1.style.backgroundColor = 'green';
        } else {
            document.getElementById('switch4_1').innerHTML = 'Off';
            switch4_1.style.color = 'pink';
            switch4_1.style.backgroundColor = 'red';
        }
    } else if (clickedSwitch === switch4_2) {
        bool4_2 = offOn(bool4_2);
        //Button4_2
        if (bool4_2) {
            document.getElementById('switch4_2').innerHTML = 'On';
            switch4_2.style.color = 'lime';
            switch4_2.style.backgroundColor = 'green';
        } else {
            document.getElementById('switch4_2').innerHTML = 'Off';
            switch4_2.style.color = 'pink';
            switch4_2.style.backgroundColor = 'red';
        }
    }
    //Door4
    door4 = orGate(bool4_1, bool4_2, door4);
    if (door4 === undefined) {
        null;
    } else if (door4) {
        document.getElementById('status4').innerHTML = true;
        status4.style.color = 'green';
    } else {
        document.getElementById('status4').innerHTML = false;
        status4.style.color = 'red';
    }
}


//**ADVANCED GATES**
//DOOR5/NAND(NotAND)
const switch5_1 = document.getElementById('switch5_1');
const switch5_2 = document.getElementById('switch5_2');

switch5_1.addEventListener("click", nandGateKeeper);
switch5_2.addEventListener("click", nandGateKeeper);

function nandGateKeeper(event) {
    const clickedSwitch = event.target;

    if (clickedSwitch === switch5_1) {
        bool5_1 = offOn(bool5_1);
        //Button5_1
        if (bool5_1) {
            document.getElementById('switch5_1').innerHTML = 'On';
            switch5_1.style.color = 'lime';
            switch5_1.style.backgroundColor = 'green';
        } else {
            document.getElementById('switch5_1').innerHTML = 'Off';
            switch5_1.style.color = 'pink';
            switch5_1.style.backgroundColor = 'red';
        }
    } else if (clickedSwitch === switch5_2) {
        bool5_2 = offOn(bool5_2);
        //Button5_2
        if (bool5_2) {
            document.getElementById('switch5_2').innerHTML = 'On';
            switch5_2.style.color = 'lime';
            switch5_2.style.backgroundColor = 'green';
        } else {
            document.getElementById('switch5_2').innerHTML = 'Off';
            switch5_2.style.color = 'pink';
            switch5_2.style.backgroundColor = 'red';
        }
    }
    //Door5
    door5 = nandGate(bool5_1, bool5_2, door5);
    if (door5 === undefined) {
        null;
    } else if (door5) {
        document.getElementById('status5').innerHTML = true;
        status5.style.color = 'green';
    } else {
        document.getElementById('status5').innerHTML = false;
        status5.style.color = 'red';
    }
}

//DOOR6/NOR(NotOR)
const switch6_1 = document.getElementById('switch6_1');
const switch6_2 = document.getElementById('switch6_2');

switch6_1.addEventListener("click", norGateKeeper);
switch6_2.addEventListener("click", norGateKeeper);

function norGateKeeper(event) {
    const clickedSwitch = event.target;

    if (clickedSwitch === switch6_1) {
        bool6_1 = offOn(bool6_1);
        //Button6_1
        if (bool6_1) {
            document.getElementById('switch6_1').innerHTML = 'On';
            switch6_1.style.color = 'lime';
            switch6_1.style.backgroundColor = 'green';
        } else {
            document.getElementById('switch6_1').innerHTML = 'Off';
            switch6_1.style.color = 'pink';
            switch6_1.style.backgroundColor = 'red';
        }
    } else if (clickedSwitch === switch6_2) {
        bool6_2 = offOn(bool6_2);
        //Button6_2
        if (bool6_2) {
            document.getElementById('switch6_2').innerHTML = 'On';
            switch6_2.style.color = 'lime';
            switch6_2.style.backgroundColor = 'green';
        } else {
            document.getElementById('switch6_2').innerHTML = 'Off';
            switch6_2.style.color = 'pink';
            switch6_2.style.backgroundColor = 'red';
        }
    }
    //Door6
    door6 = norGate(bool6_1, bool6_2, door6);
    if (door6 === undefined) {
        null;
    } else if (door6) {
        document.getElementById('status6').innerHTML = true;
        status6.style.color = 'green';
    } else {
        document.getElementById('status6').innerHTML = false;
        status6.style.color = 'red';
    }
}

//DOOR7/XOR(ExclusiveOR)
const switch7_1 = document.getElementById('switch7_1');
const switch7_2 = document.getElementById('switch7_2');

switch7_1.addEventListener("click", xorGateKeeper);
switch7_2.addEventListener("click", xorGateKeeper);

function xorGateKeeper(event) {
    const clickedSwitch = event.target;

    if (clickedSwitch === switch7_1) {
        bool7_1 = offOn(bool7_1);
        //Button7_1
        if (bool7_1) {
            document.getElementById('switch7_1').innerHTML = 'On';
            switch7_1.style.color = 'lime';
            switch7_1.style.backgroundColor = 'green';
        } else {
            document.getElementById('switch7_1').innerHTML = 'Off';
            switch7_1.style.color = 'pink';
            switch7_1.style.backgroundColor = 'red';
        }
    } else if (clickedSwitch === switch7_2) {
        bool7_2 = offOn(bool7_2);
        //Button7_2
        if (bool7_2) {
            document.getElementById('switch7_2').innerHTML = 'On';
            switch7_2.style.color = 'lime';
            switch7_2.style.backgroundColor = 'green';
        } else {
            document.getElementById('switch7_2').innerHTML = 'Off';
            switch7_2.style.color = 'pink';
            switch7_2.style.backgroundColor = 'red';
        }
    }
    //Door7
    door7 = xorGate(bool7_1, bool7_2, door7);
    if (door7 === undefined) {
        null;
    } else if (door7) {
        document.getElementById('status7').innerHTML = true;
        status7.style.color = 'green';
    } else {
        document.getElementById('status7').innerHTML = false;
        status7.style.color = 'red';
    }
}

//DOOR8/XNOR(ExclusiveNotOR)
const switch8_1 = document.getElementById('switch8_1');
const switch8_2 = document.getElementById('switch8_2');

switch8_1.addEventListener("click", xnorGateKeeper);
switch8_2.addEventListener("click", xnorGateKeeper);

function xnorGateKeeper(event) {
    const clickedSwitch = event.target;

    if (clickedSwitch === switch8_1) {
        bool8_1 = offOn(bool8_1);
        //Button8_1
        if (bool8_1) {
            document.getElementById('switch8_1').innerHTML = 'On';
            switch8_1.style.color = 'lime';
            switch8_1.style.backgroundColor = 'green';
        } else {
            document.getElementById('switch8_1').innerHTML = 'Off';
            switch8_1.style.color = 'pink';
            switch8_1.style.backgroundColor = 'red';
        }
    } else if (clickedSwitch === switch8_2) {
        bool8_2 = offOn(bool8_2);
        //Button8_2
        if (bool8_2) {
            document.getElementById('switch8_2').innerHTML = 'On';
            switch8_2.style.color = 'lime';
            switch8_2.style.backgroundColor = 'green';
        } else {
            document.getElementById('switch8_2').innerHTML = 'Off';
            switch8_2.style.color = 'pink';
            switch8_2.style.backgroundColor = 'red';
        }
    }
    //Door8
    door8 = xnorGate(bool8_1, bool8_2, door8);
    if (door8 === undefined) {
        null;
    } else if (door8) {
        document.getElementById('status8').innerHTML = true;
        status8.style.color = 'green';
    } else {
        document.getElementById('status8').innerHTML = false;
        status8.style.color = 'red';
    }
}

//MORE_LISTENERS
const buttonColor = document.getElementsByClassName('gateButton');
function testLog() {
    console.log(document.getElementsByClassName('gateButton')); 
    console.log(buttonColor.lenght + ' this');
    console.log(buttonColor[0]);
    console.log(buttonColor[i]);
}

/*function testColor() {
    switch1.style.backgroundColor = 'purple';
}

testColor();*/

//switch1.addEventListener("click", changeColor);
function changeColor(event) {
    //testLog();
    for (let i = 0; i < buttonColor.length; i++) {
        buttonColor[i].style.color = 'lime';
        buttonColor[i].style.backgroundColor = 'green';
    }
}

/*window.onload = function() {
    testLog();
    changeColor();
};*/


/*buttonColor.addEventListener("click", changeColor);

function changeColor(event) {
    targetElement.style.color = 'blue';
}*/