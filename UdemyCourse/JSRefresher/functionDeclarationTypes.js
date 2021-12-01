function functionType1(name){
    return name;
}

const functionType2 = function (name){
    return name;
};

const functionType3 = (name) => {
    return name;
}

const functionType4 = name => {
    return name;
}

const functionType5 = name => 'Type 5';

const functionType6 = () => {
    return "Type 6";
}

console.log(functionType1("Type 1"));
console.log(functionType2("Type 2"));
console.log(functionType3("Type 3"));
console.log(functionType4("Type 4"));
console.log(functionType5("Type 5"));
console.log(functionType6());