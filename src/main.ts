class User {
  private IsTeacher: boolean;
  protected age: number = 30;

  constructor(public name: string, public job: string) {}

  public getAge(): string | number {
    return this.age;
  }
}

class MySelf extends User {

  constructor(job: string) {
    super('Fred', job);
    this.age = 65; // в дочернем классе мы имеем доступ к переменной protected
    // а к переменной private нет
  }

  getAge(): string {
    return `Hello, age is ${this.age}`;
  }
}
const user = new User('Gray', 'Aviator');
console.log(user);
const mySelf = new MySelf('Proctologist')
console.log(mySelf, mySelf.getAge());

// абстрактные классы - это классы, от которых нелзя создавать экземпляры
// от них можно только наследовать своего рода шаблон для дочерних классов
abstract class Car {
  model: string;
  year: number = 2010;

  // абстрактный метод - описание интерфейса метода, т.е. как он будет выглядеть
  abstract logInfo(info: string): void;

  getCarYear(): number {
    return this.year;
  }
}

class Ford extends Car {
  logInfo(theInfo: string): void {
    console.log(theInfo);
  }
}

const car = new Ford;

console.log(car);
car.logInfo('red');
console.log(car.getCarYear());
