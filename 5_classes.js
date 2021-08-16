var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return "[" + name + "]: Typescript version is " + this.version;
    };
    return Typescript;
}());
// class Car {
//   readonly model: string;
//   readonly numberOfWheels: number = 5;
//   constructor(theModel: string) {
//     this.model = theModel;
//   }
// }
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
        this.numberOfWheels = 5;
    }
    return Car;
}());
//===
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = "";
        this.color = "black";
        this.go();
    }
    Animal.prototype.go = function () {
        console.log("Go");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
        //  this.go() -
        //Property 'go' is private and only accessible within class 'Animal'.
    };
    return Cat;
}(Animal));
var cat = new Cat();
//cat.voice -Property 'voice' is protected and only accessible within class 'Animal' and its subclasses.
console.log(cat.color);
cat.setVoice("meow");
//====
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppCom = /** @class */ (function (_super) {
    __extends(AppCom, _super);
    function AppCom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCom.prototype.render = function () {
        console.log("Component on render");
    };
    AppCom.prototype.info = function () {
        return "this is info";
    };
    return AppCom;
}(Component));
