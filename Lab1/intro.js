var mathLib = require('./myMath');

function homework(){
    //print the first 20 even numbers

        for (var i=1;i<20;i++){
            if(i % 2 === 0) {
                console.log(i + " ");
            }
        }
        
        //if(num % 2 === 0) {
        //    return true;
        //}
        //    return false;
};


function init(){
/*
    console.log('Hello World!');

    let age = 90;
    console.log(age);

    let name = "pavel aragon";
    console.log("My name is" + name);

    mathLib.sayHello("HELLLO"); //excecute the function on the module
    var res = mathLib.sum(21, 21);
    console.log(res);

    var g = mathLib.greater(123131, 34243);
    console.log(g);

    console.log(mathLib.greater(-1, -2));

    console.log(mathLib.isEven(1));
    */

    homework();
};

init();