// generic
// благодаря такой записи TS в зависимости от типа данных, переданных в функцию
// подставляет соответствующий переданным параметрам тип данных и может выдать ошибки на этапе компиляции
//  см. log 2
function genericGetter<T>(data: T): T {
  return  data;
}

console.log(genericGetter('Tom').length); // log1
// console.log(genericGetter(100).length); // log2

// можно специально укказать generic какой тип данных будет использоваться:
console.log(genericGetter<string>('Tom').length);
console.log(genericGetter<number>(100).toFixed(2));

const arr: Array<number> = [1, 2, 3]; // такое объявление массива - это generic
console.log(arr);

const newGenericFunc: <T>(data: T) => T = genericGetter;

console.log(newGenericFunc<string>('Tom').length);
console.log(newGenericFunc<number>(100).toFixed(2));

class Multiply<T extends number | string> { // указываем generic, что он можетнаследоваться от данного типа
  constructor(private a: T, private b: T) {}

  public getResult(): number {
    return +this.a * +this.b; // Number(this.a) * Number(this.b)
  }
}
const mNum = new Multiply<number>(10, 5); // так же при создании экземпляра класса можно указать тип данных
console.log('mNum: ', mNum.getResult());

const mStr = new Multiply<string>('5', '12');
console.log('mStr: ', mStr.getResult());