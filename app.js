document.addEventListener("DOMContentLoaded", function() {
   /* console.log("TERE!");

    let hello = "Hello World";
    console.log(hello);

    let rangeStart = 1;
    let rangeEnd = 100;
    let numberToCheck = 101;
    let inRange = false;

    for(let i = rangeStart; i <= rangeEnd; i++ ) {
        if(i === numberToCheck) {
            inRange = true;
            break;
        }
    }

    /*if(inRange) {
        console.log("The number is in range");
    } else {
        console.log("The number is out of range.");
    }*/

    //Ternary Operator
    //let result = inRange ? "In Range" : "Out of Range";
    //console.log(result);

    //Write a program to display the multiplication table of a given number
    //Test data
    //number: 5
    //Expected Output
    //5 X 1 = 5;
    //5 X 2 = 10;
    //...

   /* let number = 5;

    for(let i = 1; i <= 10; i++) {
        let string = `${number} X ${i} = ${number * i}`;
        console.log(string);

        //console.log(number, " X ", i, " = ", number*i);
    }*/

    let stringLength;
    let string = "Hello World!";
    stringLength = string.length;
    console.log(stringLength);

    /*for(let i = 0; i < 12; i++) {
        console.log(string[i]);
    }*/
    /*for(let i = string.length-1; i >= 0; i--) {
        console.log(string[i]);
    }*/


    for(let i = 0; i < 12; i++) {
        if(string[i] === 'o') {
            console.log('*');
        } else {
            console.log(string[i]);
        }        
    }

    let substitute = string.replace("o", "*");

    console.log(substitute);

});