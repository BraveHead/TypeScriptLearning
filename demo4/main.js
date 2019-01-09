//数组
var list = [1, 2, 3];
var list2 = [1, 2, 3, { name: "zhangsan" }, "12"];
//元组 Tuple
var tuple1;
tuple1 = ["zhangsan", 20, { name: "1" }, "123"];
tuple1[2] = { name: "123" };
tuple1[3] = 'world';
//枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[2];
//Any  any在不确定的时候使用
var notsure = 4;
var prettySure = 4;
prettySure = {
    name: 123,
    age: 12
};
//类型断言
var someValue = "this is a string";
var strlength = someValue.length;
var someValue2 = "this ia a string";
var strLength2 = someValue2.length;
//函数申明
function f(_a) {
    var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    console.log(a, b);
}
f({ a: "234" });
// console.log();
