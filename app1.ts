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
sum3 = function () {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
};

let intRandom: (min: number, max?: number) => number;
intRandom = function (min, max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return Math.round(Math.random() * (max - min + 1) + min);
};

let greetAll: (...kotikName: string[]) => string;
greetAll = function (...kotikName) {
    return 'Hello ' + kotikName.join(', ');
}

let dates: string | null = prompt('enter function name', '');
switch (dates) {
    case 'a': a('Hello!');
        break;
    case 'cube': console.log(cube(3));
        break;
    case 'avg2': console.log(avg2(5, 7));
        break;
    case 'sum3': console.log(sum3(12, 5, 3));
        break;
    case 'intRandom': console.log(intRandom(3, 12));
        break;
    case 'greetAll': console.log(greetAll('Barsik', 'Tolik', 'Tom'));
        break;
    default: console.log('This function not found');
}