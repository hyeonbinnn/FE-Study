"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const teacher_1 = require("./teacher");
class Student extends teacher_1.Teacher {
    study() {
        return `${this.name}는 공부중!`;
    }
}
const student = new Student('덕배');
console.log(student.sayHoo());
console.log(student.study());
//# sourceMappingURL=student.js.map