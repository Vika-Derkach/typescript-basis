class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }
  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}
// class Car {
//   readonly model: string;
//   readonly numberOfWheels: number = 5;
//   constructor(theModel: string) {
//     this.model = theModel;
//   }
// }
class Car {
  readonly numberOfWheels: number = 5;
  constructor(readonly model: string) {}
}

//===
class Animal {
  protected voice: string = "";
  public color: string = "black";
  constructor() {
    this.go();
  }
  private go() {
    console.log("Go");
  }
}
class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
    //  this.go() -
    //Property 'go' is private and only accessible within class 'Animal'.
  }
}
const cat = new Cat();
//cat.voice -Property 'voice' is protected and only accessible within class 'Animal' and its subclasses.

console.log(cat.color);
cat.setVoice("meow");

//====
abstract class Component {
  abstract render(): void;
  abstract info(): string;
}
class AppCom extends Component {
  render(): void {
    console.log("Component on render");
  }
  info(): string {
    return "this is info";
  }
}
