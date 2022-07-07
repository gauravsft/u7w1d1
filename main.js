const add=require("./add");
const divide=require("./divide");
const multiply=require("./multiply");
const subtract=require("./subtract");


function calculator(operation,a,b){
    if(operation=="add"){
        add(a,b);
    }
    else if(operation=="subtract"){
        subtract(a,b);
    }
    else if(operation=="multiply"){
        multiply(a,b);
    }
    else if(operation=="divide"){
        divide(a,b);
    }
    else {
        console.log("Choose different operations")
    }
}
calculator("add",5,6);
calculator("subtract",5,6);
calculator("multiply",5,6);
calculator("divide",5,6);
calculator("default",5,6);