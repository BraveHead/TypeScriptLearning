// let options = {
//     color: "red",
//     value:11
// };

export function Run() {
   interface Options {
    color: string;
    volume:number
}
let options = {} as Options;
options.color = "red";
options.volume = 11;

//数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number= 0b1010;
let octalLiteral: number = 0o744;
// console.log(decLiteral, hexLiteral, binaryLiteral, octalLiteral); 

//数组
let list: Array<number>  = [1, 2, 3];  //泛型写法
let list1: number[] = [1, 2,3,4];  //直接类型接[]
console.log(list, list1);

//元组 Tuple
let x: [string, number];
x = ['red', 10];
// x = [10, 'red'];  //error
console.log(x[0].substring(1));   //OK
// console.log(x[1].substring(1));  //Error number上没有substring方法

//当访问一个越界的元素，会使用联合类型
x[3] = "world";  //OK  number | string
// x[6] = true;  //Error 布尔不是string | number类型

//枚举
enum Color { Red = "red", Green =12, Blue="Blue" };
let c: Color = Color.Red;
console.log(c);

//对象解构
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};

let { a: newName1, b: newName2 }: {a: string, b: number} = o;

console.log(newName1, newName2);
}
