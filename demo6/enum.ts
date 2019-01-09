
/**
 * 枚举  enum
 */

 function getSomeValue<T>(value: T): T {
    return value;
 }

 enum Direction {
   Up = 1,
   Down,
   Right,
   Left = getSomeValue(12),
 }

 enum E1 {X="string", Y="123", Z="sb"}
 enum E2 {X = 1, Y, Z}
 console.log(E1['123'], E2[2]);