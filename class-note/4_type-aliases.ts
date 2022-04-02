// interface Person {
//   name: string;
//   age: number;
// }

type Person1 = {    // 타입 정의
  name: string;
  age: number;
};

var seho: Person1 = {
  name: "세호",
  age: 30,
};

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean};
function getTodo(todo: Todo) {

}

// ★ type vs interface 가장 큰 차이점은 타입은 확장이 되지 않는다!
// 가능한한 type 보다는 interface로 선언해서 사용하는게 더 추천되는 방식이다.
// 좋은 소프트웨어는 언제나 확장이 용이해야 한다는 원칙