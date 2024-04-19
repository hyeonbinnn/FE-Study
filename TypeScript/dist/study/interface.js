"use strict";
function logAge(obj) {
    console.log(obj.age);
}
let person = { name: '덕수', age: 35 };
logAge(person); // 35
let todo;
todo = { id: 1, content: 'typescript', completed: true };
const squareFunc = function (num) {
    return num * num;
};
console.log(squareFunc(10)); // 100
class Memo {
    constructor(id, content, completed) {
        this.id = id;
        this.content = content;
        this.completed = completed;
    }
}
const memo = new Memo(1, 'typescript', false);
console.log(memo);
class Note {
    constructor(name) {
        this.name = name;
    }
    sayHoo() {
        console.log(`안녕, ${this.name}! 노트필기를 하자!`);
    }
}
function greeter(note) {
    note.sayHoo();
}
const no = new Note('덕배');
greeter(no); // 안녕, 덕배! 노트필기를 하자!
class OneDuck {
    quack() {
        console.log('꽥꽥!');
    }
}
class TwoDuck {
    quack() {
        console.log('꽤애액꽤애액');
    }
}
function makeNoise(duck) {
    duck.quack();
}
makeNoise(new OneDuck()); // 꽥꽥!
makeNoise(new TwoDuck()); // 꽤애액꽤애액
const userInfo = {
    username: '최강덕배',
    password: '123456',
};
console.log(userInfo); // { username: '최강덕배', password: '123456' }
const son = {
    name: '덕배',
    age: 30,
    grade: 3,
    phone: '010-1234-1234',
};
console.log(son);
//# sourceMappingURL=interface.js.map