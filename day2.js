const calculator = (a,b,operation) => {
    if (operation === "+"){
        return a + b;
    }
    else if (operation === "-"){
        return a - b;
    }
    else if (operation === "*"){

        return a*b;
    }
    else if (operation === "/"){

        return a/b;
    }

}
console.log(calculator(10, 5, "+"));   // 15
console.log(calculator(10, 5, "-"));   // 5
console.log(calculator(10, 5, "*"));   // 50
console.log(calculator(10, 5, "/"));   // 2