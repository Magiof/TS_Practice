interface User {
  age: number;
  name: string;
}

// 변수에 활용한 인터페이스
var seho: User = {
  age: 33,
  name: "세호",
};

// 함수에 활용한 인터페이스
function getUser(user: User) {
  //특정 형식을 사용하는 데이터만 받겠다
  console.log(user);
}
var capt = {
  name: "캡틴",
  age: 100,
};

getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;
sum = function(a: number, b: number){
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ['a','b','c'];
// arr[0] = 10;

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp; // 정규표현식 생성자
}

var object1: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/, // css파일 정규표현식
  jsFile: /\.js$/,  // js파일 정규표현식
}
// object1['cssFile'] = 'a'  //'a'가 아닌 정규표현식이 와야하므로 에러

Object.keys(object1).forEach(function(value) {});

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person{
  language: string;
}

var seongwon: Developer = {
  language: 'ts',
  age: 100,
  name: '성원'
}