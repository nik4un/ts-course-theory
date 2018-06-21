var myName = 'str';
var myAge = 50;
function getMyName() {
    return myName;
}
function getMyAge() {
    return myAge;
}
function getMyHeight(height, prefix) {
    if (prefix === void 0) { prefix = 'Height'; }
    return prefix + ": " + height;
}
var consoleLog = function (str) {
    console.log(str);
};
var mySum;
var sum = function (num1, num2) { return num1 + num2; };
mySum = sum;
consoleLog('Test string');
console.log(mySum(15, 5));
console.log(getMyName());
console.log(getMyAge());
console.log(getMyHeight(170, 'My height is'));
console.log(getMyHeight(160));
