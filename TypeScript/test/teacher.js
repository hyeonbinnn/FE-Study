"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
class Teacher {
    constructor(name) {
        this.name = name;
    }
    sayHoo() {
        return '안녕!' + this.name;
    }
}
exports.Teacher = Teacher;
