const myName: string = 'str';
const myAge: number = 50;

function getMyName(): string {
  return myName;
}

function getMyAge(): number {
  return myAge;
}

function getMyHeight(height: number, prefix: string = 'Height'): string {
  return `${prefix}: ${height}`;
}

const consoleLog = (str: string): void => {
  console.log(str);
};

let mySum: (a: number, b: number) => number;
const sum = (num1: number, num2: number) => num1 + num2;
mySum = sum;

consoleLog('Test string');
console.log(mySum(15, 5));


console.log(getMyName());
console.log(getMyAge());
console.log(getMyHeight(170, 'My height is'));
console.log(getMyHeight(160));
