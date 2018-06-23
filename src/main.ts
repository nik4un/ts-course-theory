interface ILength  {
  length: number; // здесь ставится не "," а ";"
}

const getLength = (variable: {length: number}): void => { // такая запись означает,
  // что передаваемый параметр д.б. объект, у которого должно обязательно присутствовать
  // поле length
  console.log(`getLength: ${variable.length}`);
};

// предыдущую функцию можно переписать с помощью интерфейса
const getLengthI = (variable: ILength): void => {
  console.log(`getLengthI: ${variable.length}`);
};

getLength([1, 2, 3, 4, 5]);

const box = {
  name: 'Gray',
  length: 20,
};

getLengthI(box);
getLengthI([1, 2, 3, 4, 5]);

interface IUser {
  name: string;
  age?: number; // необязательный параметр
  logInfo(info: string) : void;
}

interface IGetYear {
  getYear(): number;
}

const user: IUser = {
  name: 'Tom',
  age: 20,
  logInfo(info) {
    console.log(`Info: ${info}`);
  }
};

// по интерфейсам также можно создавать и классы для этого
// нужно имплементироваться от интерфейса или от нескольких
// суть интерфейса в том, чтобы реализовать минимальное количество параметров
class Man implements  IUser, IGetYear {
  name: string = 'NoName';
  // новые параметры могут присутствовать в любом количестве
  job: string;
  newAge: number;

  logInfo(info: string) {
    console.log(`Info: ${info}`);
  }
  getYear(): number  {
    return 2010;
  }
}
const man = new Man;

console.log(user);
console.log(man);