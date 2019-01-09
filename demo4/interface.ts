(function(){

  // interface labelledObjValue {
  //   label: string,
  //   color?: string,
  // }

  // interface Point {
  //   readonly x: number,
  //   readonly y: number,
  // }


  // function printLabel(labelledObj: labelledObjValue, point?: Point) {
  //   // if(point.x) {
  //   //   point.x = 10; 只读
  //   // }
  // }


  // let myObj = { size: 10, label: "size 10 Obj", color: "red" };
  // let myPoint = { x : 100, y : 100};

  // printLabel(myObj);

  

  //额外的属性检查
  
  // interface SquareConfig {
  //   color?: string,
  //   width?: number,
  // }

  // function createSquare(config: SquareConfig) {
  //   if(config.color) {
  //     console.log(config.color);
  //   }
  //   if(config.width) {
  //     console.log(config.width);
  //   }
  // }

  // // createSquare({ colour: "red", width:100 });  // Error  额外的属性检查  会提示传入参数的colour不在SquareConfig中定义  这是意外检查引发的错误

  // let newSquare = {colour: "red", width: 100};  //把参数赋值给一个变量  就不会引发额外的属性检查  解决方法一

  // createSquare({colour: "red", width: 100} as SquareConfig);  //通过类型断言  也可以额外的检查  解决方法二



  //函数类型

  interface SearchFunc {
    (source: string, subString: string): boolean;
  }

  let mySearch: SearchFunc;

  mySearch = function(sur:string, sub:string) {
    let result = sur.search(sub);
    return result > -1;
  }

  console.log(mySearch("string", "t"));

  //可索引的类型

  // interface StringArray {
  //   [index: number]: string,
  // }

  // let myArray : StringArray;
  // myArray = ["Bob", "Fred"];

  // let myStr: string = myArray[0];

  // console.log(myStr);

  // class Animal {
  //   name: string;
  // }

  // class Dog extends Animal {
  //   breed: string;
  // }

  // interface NotOkay {
  //   [x: number]: Animal,
  //   [x: string]: Dog,
  // }

  


  //类类型

  /**实现接口 */
  // interface ClockInterface {
  //   currentTime: Date;
  //   setTime(d: Date);
  // }

  // class Clock implements ClockInterface {
  //   currentTime: Date;
  //   constructor(h: number,m: number) {
  //     //TODO some
  //   }
  //   setTime(d: Date) {
  //     this.currentTime = d;
  //   }  
  // }

  /**继承接口 */

  // interface Shape {
  //   color: string;
  // }

  // interface Square extends Shape {
  //   sideLength: number,
  //   color: string,
  // }

  // let square = <Square>{};
  // square.color = "red";
  // square.sideLength = 12;

  // console.log(square);



  //混合类型

  interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
  }

  function getCounter(): Counter {
    let counter = <Counter>function(start: number) {
      // console.log(start, "///");
      // return start.toString();
    };
    counter.interval = 123;
    counter.reset = function() {};
    return counter;
  }

  let c = getCounter();

  c(10);
  c.reset();

  console.log(c(10));




})();