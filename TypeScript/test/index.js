'use strict';
class Me {
  constructor(name) {
    this.name = name;
  }
  sayHoo() {
    return '안녕~' + this.name;
  }
}
const me = new Me('덕배');
console.log(me.sayHoo());
//# sourceMappingURL=index.js.map
