console.log("Hello World");
window.alert("HALLOW WORLD");
document.write("Written using document.write"); // Writes directly to the webpage
console.warn("I wouldn't..."); // Adds a warning to the console
console.error("You fucked up");// Adds an error to the console

let message = "This is a variable message";
console.log (message);

function messageFunc() {
    console.log("This came from a function");
}
messageFunc();

function getArgs(){
    return arguments; // gets all args passed into it
}

const calculate = (operator, num1, num2) => { // lambda function
    if (operator == "+"){
        return num1 + num2;
    }
    else if (operator == "-"){
        return num1 - num2;
    }
    else if (operator == "/"){
        return num1/num2;
    }
    else if (operator == "*"){
        return num1 * num2;
    } else {
        console.error("Invalid selection, try again");
    }
}

function multiply(a, b) {
    return a * b;
}

function multiplyPrint(a, b){
    let result = multiply(a,b);
    console.log(result);
}

const multiplyPrint2 = (a,b) => {
    let result = multiplyPrint(a, b);
    console.log(result);
}

function multiplyAll() {
    arguments;
    let answer = 1;
    for (let i = 0; i<arguments.length; i++) {
        answer *= arguments[i];
    }
    console.log(answer);
}