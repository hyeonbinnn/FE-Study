export class Teacher {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHoo() {
    return '안녕!' + this.name;
  }
}
