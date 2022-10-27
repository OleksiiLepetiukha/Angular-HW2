let a: (text: string) => void;
let text: string = "Привет!";
a = function (text) {
    alert(text);
};

let cube: (digital: number) => number;
cube = function (digital) {
    return Math.pow(3, digital);
};

let avg2: (num1: number, num2: number) => number;
avg2 = function (num1, num2) {
    return (num1 + num2) / 2;
};

let sum3: (x?: number, y?: number, z?: number) => number;
sum3 = function() {
    let result = 0;
    for(let i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
};

let intRandom: (min: number, max?: number) => number;
intRandom = function(min, max){
    if(max === undefined){
        max = min;
        min = 0;
    }
    return Math.round(Math.random() * (max - min +1) + min);
};

let greetAll: (kotik1: string, kotik2: string, kotik3: string) => string;
greetAll = function () {
    let result: string = 'Hello';
    for(let i = 0; i < arguments.length; i++){
        result += ' ' + arguments[i] + ',';
    }
    return result.slice(0, -1);
}

let dates: string | null = prompt('enter function name', '');
switch(dates?.toLowerCase()){
    case 'a': a('Hello!');
    break;
    case 'cube': cube(3);
    break;
    case 'avg2': avg2(5,7);
    break;
    case 'sum3': sum3(12,5,3);
    break;
    case 'intRandom': intRandom(3,12);
    break;
    case 'greetAll': greetAll('Barsik', 'Tolik', 'Tom');
    break;
    default: 'This function not found';
}