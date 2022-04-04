// function logText(text) {
//     console.log();
//     return text;
// }
// logText(10); // 숫자 10
// logText('하이'); // 문자열 하이
// logText(true); // 진위값 true

// function logText<T>(text: T):T {
//     console.log(text);
//     return text;
// }
// logText<string>('하이');

// function logText(text: string) {
//   console.log(text);
//   text.split("").reverse().join("");
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }

// const a = logText("a");
// logText(10);
// logText(true);

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str1 = logText<string>("abc");
str1.split("");
logText<boolean>(true);

logText("a");
logText(10);

// ★generic은 '함수를 정의할 때'가 아닌 '함수를 호출할 때' 타입을 정의한다.

// 제네릭 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach(function (text) {
//     console.log(text);
//   });
//   return text;
// }
// logTextLength(["hi", "abc"]);

// 제네틱 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength(10);
logTextLength( {length: 10});

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem{
  name: string;
  price: number;
  stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption('name');