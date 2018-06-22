class User {
  /*
  name: string; // если не указан тип, то по-умолчанию это public
  public job: string;
  */
  public gender: string; // переменная доступна и внутри и снаружи
  private IsTeacher: boolean; // доступна только внутри
  protected age: number = 30; // то же, что и private, только переменной
  // можно воспользоваться при расширении класса

  /*
  constructor (theName: string, theJob: string) {
    this.name = theName;
    this.job = theJob;
  }
  */
  // компактное задание конструктора (вместо закоментированных полей):
  constructor(public name: string, public job: string) {}

  // private и protected переменные можно менять снаружи только посредством метода класса
  increaseAge() {
    console.log(`до: ${this.age}`);
    this.age += 1;
    return this.age;
  }
}
const user1 = new User('Gray', 'Aviator');
console.log(user1);

console.log(`после: ${user1.increaseAge()}`);
