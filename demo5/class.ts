
/**
 * 继承
 */

//  class Animal {
//    private name: string;
//    constructor(theName: string) {
//     this.name = theName;
//    }
//    move (distanceInMeters: number = 0) {
//     console.log(`${this.name} moved ${distanceInMeters}`);
//    }
//  }


//  class Snake extends Animal {
//    constructor(name: string) {
//     super(name);
//    }
//    move(distanceInMeters = 5) {
//      console.log("Slithering...");
//      super.move(distanceInMeters);
//    }
//  }

//  class Horse extends Animal {
//    constructor(name: string) {
//     super(name);
//    }
//    move(distanceInMeters = 45) {
//     console.log("Galloping....");
//     super.move(distanceInMeters);
//    }
//  }


//  let sam = new Snake("Sammy the Python");
//  let tom: Animal = new Horse("Tommy thre Palomino");
//  let animal: Animal = new Animal("Animal...");

//  sam.move();
// //  console.log(sam.name);
//  tom.move();
//  tom.move(34);

/**
 * protected 和private的区别
 */


//   class Person {
//     protected name:string;
//     age: number;
//     public constructor(name:string, age: number) {
//       this.name = name;
//       this.age = age;
//     }

//     printMess() {
//       console.log(`name: ${this.name}, age: ${this.age}`);
//     }
//   }

//   class Student extends Person {
//     private work:string;
//     constructor(name:string, age: number, work:string) {
//       super(name, age);
//       this.work = work;
//     }

//     printMess() {
//       console.log(`name: ${this.name}, age: ${this.age}, work: ${this.work}`);
//     }
//   }

//   class Doctor extends Person {
//     private work : string;
//     constructor(name: string, age:number, work: string) {
//       super(name, age);
//       this.work = work;
//     }
  
//     printMess() {
//       console.log(`name: ${this.name}, age: ${this.age}, work: ${this.work}`);
//     }
//   }

//   let perosn = new Person("张三", 12);
//   perosn.printMess();
//   let student = new Student("李四", 15, "学生");
//   student.printMess();
//   let doctor = new Doctor("王二", 34, "医生");
// doctor.printMess();

/**
 * 存取器
 */

//  let passcode = "secret passcode";

//  class Employee {
//    private _fullName: string;
//    get fullName() :string {
//      return this._fullName;
//    }

//    set fullName(newName: string) {
//      if(passcode && passcode == "secret passcode") {
//         this._fullName = newName;
//      }else {
//        console.log("You not have!");
//      }
//    }
//  }

//  let employee = new Employee();

//  employee.fullName = "zhangsan";

//  if(employee.fullName) {
//   console.log(employee.fullName);
//  }

/**
 * 函数
 */

//  let myAdd: (x: number, y :number) => number = function(x: number, y: number): number {
//     return x + y;
//  }
// let myAdd = function(x: number, y: number): number {return x+y};

//  console.log(myAdd(2, 3));

// let buildNameFun =  function buildName(firstName: string, ...restOfName: (string| number| object)[]): string {
//   return firstName + " " + restOfName.join(" ");
// }

// console.log(buildNameFun("张三", "李四", 123));

/**
 * this 和箭头函数
 */

//  interface Card {
//    suit: string;
//    card: number;
//  }

//  interface Deck {
//    suits: string[];
//    cards: number[];
//    createCardPicker(this: Deck): () => Card;
//  }

//  let deck: Deck = {
//    suits: ["hearts", "spades", "clubs", "diamonds"],
//    cards: Array(52),
//    createCardPicker: function(this: Deck) {
//      return () => {
//        let pickedCard = Math.floor(Math.random() * 52);
//        let pickedSuit = Math.floor(pickedCard / 13);

//        return { suit: this.suits[pickedSuit], card: pickedSuit % 13 };
//      }
//    }
//  }

//  let cardPicker = deck.createCardPicker();
//  let pickedCard = cardPicker();

//  console.log("card: " + pickedCard.card + " of " + pickedCard.suit);


/**
 * 泛型
 */

 //使用泛型变量

//  function identity<T>(arg: T): T {
//   return arg;
//  }

//  let myIdentity: <T>(arg: T) => T = identity;

//  console.log(myIdentity(["123"]));

  //泛型类型

  interface GenericIdentityFn {
    <T>(arg: T): T;
  }

  function Identity<T>(arg: T): T {
    return arg;
  }

  let myIndentity: GenericIdentityFn = Identity;

  
