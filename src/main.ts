//тип "enum" служит в основном для задания констант
enum Job {
  Frontend,
  Backend,
  Designer = 50,
  Manager
}
const job1: Job = Job.Frontend;
console.log(job1); // 0
const job2: Job = Job.Backend;
console.log(job2); // 1
const job3: Job = Job.Designer;
console.log(job3); // 50
const job4: Job = Job.Manager;
console.log(job4); // 51

// тип "null"
let myNum: number | null = 20;
console.log(myNum);
myNum = null;
console.log(myNum);
myNum = undefined;
console.log(myNum);

// для функций выбрасывающих ошибки, но ничего не возвращающих
// придуман тип "never"
const throwNewError = (err: string): never => {
  throw new Error(err);
};
throwNewError('Ups!');
