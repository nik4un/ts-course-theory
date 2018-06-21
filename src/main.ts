type User = { name: string, age: number, logName: () => void, jobs: string[], getJobs?: () => string[] };

let user: User =
  {
    name: 'Grey',
    age: 50,
    logName(): void {
      console.log(this.name);
    },
    jobs: ['a', 'b'],
    getJobs(): string[] {
        return this.jobs;
}
  };

let user2: User =
  {
    name: 'Max',
    age: 30,
    logName(): void {
      console.log(this.name);
    },
    jobs: ['c', 'd'],
  };

console.log(user, user2);
