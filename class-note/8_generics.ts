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

const str1 = logText<string>('abc');
str1.split('')
logText<boolean>(true);

logText('a')
logText(10)

// ★generic은 '함수를 정의할 때'가 아닌 '함수를 호출할 때' 타입을 정의한다.