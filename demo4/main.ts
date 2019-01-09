

//数组
let list: number[] = [1, 2,3];

let list2: Array<number | string | object> = [1, 2, 3, {name: "zhangsan"}, "12"];


//元组 Tuple

let tuple1: [string, number,object, string];

tuple1 = ["zhangsan", 20, { name: "1" }, "123"];
tuple1[2] = {name: "123"};
tuple1[3] = 'world';

//枚举

enum Color { Red, Green, Blue,  }

let c: number = Color.Green;

let colorName: string = Color[2];

//Any  any在不确定的时候使用

let notsure: any = 4;

let prettySure: Object = 4;
prettySure = {
  name: 123,
  age:12
}

//类型断言
let someValue: any = "this is a string";

let strlength = (<string>someValue).length;

let someValue2: any = "this ia a string";
let strLength2: number = (someValue2 as string).length;

//函数申明


function  f( {a, b = 0} = {a: ""} ) : void {
  console.log(a, b);
}

f({a: "234"});

// console.log();