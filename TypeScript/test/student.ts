import { Teacher } from './teacher';

class Student extends Teacher {
  study(): string {
    return `${this.name}는 공부중!`;
  }
}

const student = new Student('덕배');
console.log(student.sayHoo());
console.log(student.study());
