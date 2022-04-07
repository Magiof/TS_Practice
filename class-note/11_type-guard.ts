// 인트로
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: "Tony", age: 33, skill: "Iron Making" };
}
var tony = introduce();
console.log(tony.skill); // 유니온 타입이라 공통된 속성(name)만 접근가능

// skill에 접근하려면 타입 단언으로 줄일 수 있다.
// 가독성이 떨어져서 타입 가드를 쓴다.
if ((tony as Developer).skill) {
  var skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age);
}

// 타입 가드(type-guard) 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}
