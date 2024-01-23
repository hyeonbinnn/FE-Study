class Me {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHoo() {
    return '안녕~' + this.name;
  }
}

const me = new Me('덕배');
console.log(me.sayHoo());
