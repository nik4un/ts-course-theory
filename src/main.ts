// декоратор - это функция, которая принимает в себя конструктор класса, за которым он закреплен
// декоратор не может иметь аргументов
function logger(constrFn: Function) {
  console.log(constrFn);
}
function shouldLog(flag: boolean): any {
  return flag ? logger : null;
}

@shouldLog(false)
class User1 {
  constructor(public name: string, public  age: number) {
    console.log('I am nw user');
  }
}

// =================================

function addShowAbility(constructorFn: Function) {
  constructorFn.prototype.showHtml = function () {
    const pre = document.createElement('pre');
    pre.innerHTML = JSON.stringify(this);
    document.body.appendChild(pre);
  }
}

@addShowAbility
class User2 {
  constructor(public name: string, public  age: number, public job : string) {};
}

const user = new User2('Tom', 25, 'Aviator');
console.log(user);
(<any>user).showHtml();