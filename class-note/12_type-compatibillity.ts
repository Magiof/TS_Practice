// 타입호환참고 https://joshua1988.github.io/ts/guide/type-compatibility.html

interface Developer {
    name: string;
    skill: string;
}
interface Person5 {
    name: string;
}
var developer: Developer;
var person1: Person5;
developer = person1; // equal 기호의 오른쪽에 있는 속성이 구조적으로 더 크면 타입호환이 가능하다.
person1 = developer;

class Person6{
    name: string;
    skill: string; // skill이 빠지면 line 19 에서 에러 발생
}
var developer1: Developer;
var person6: Person6;
developer1 = new Person6();

// 함수
var add = function(a: number) {
    // ...
}
var sum = function(a: number, b: number) {
    // ...
}
sum = add;
add = sum;  // sum이 add보다 타입적으로 더 크다.

// 제네릭
interface Empty<T> {
    // ..
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
notempty1 = notempty2;
notempty2 = notempty1;