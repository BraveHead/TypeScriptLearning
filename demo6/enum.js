/**
 * 枚举  enum
 */
function getSomeValue(value) {
    return value;
}
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Right"] = 3] = "Right";
    Direction[Direction["Left"] = getSomeValue(12)] = "Left";
})(Direction || (Direction = {}));
var E1;
(function (E1) {
    E1["X"] = "string";
    E1["Y"] = "123";
    E1["Z"] = "sb";
})(E1 || (E1 = {}));
var E2;
(function (E2) {
    E2[E2["X"] = 1] = "X";
    E2[E2["Y"] = 2] = "Y";
    E2[E2["Z"] = 3] = "Z";
})(E2 || (E2 = {}));
console.log(E1['123'], E2[2]);
