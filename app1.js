var a;
var text = "Привет!";
a = function (text) {
    alert(text);
};
var cube;
cube = function (digital) {
    return Math.pow(3, digital);
};
var avg2;
avg2 = function (num1, num2) {
    return (num1 + num2) / 2;
};
var sum3;
sum3 = function () {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
};
var intRandom;
intRandom = function (min, max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return Math.round(Math.random() * (max - min + 1) + min);
};
var greetAll;
greetAll = function () {
    var kotikName = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        kotikName[_i] = arguments[_i];
    }
    return 'Hello ' + kotikName.join(', ');
};
var dates = prompt('enter function name', '');
switch (dates) {
    case 'a':
        a('Hello!');
        break;
    case 'cube':
        console.log(cube(3));
        break;
    case 'avg2':
        console.log(avg2(5, 7));
        break;
    case 'sum3':
        console.log(sum3(12, 5, 3));
        break;
    case 'intRandom':
        console.log(intRandom(3, 12));
        break;
    case 'greetAll':
        console.log(greetAll('Barsik', 'Tolik', 'Tom'));
        break;
    default: console.log('This function not found');
}
