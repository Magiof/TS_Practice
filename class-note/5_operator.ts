// function logMessage(value: any) {    //any를 쓰므로 ts의 장점이 사라짐
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

// Union type
var sw: string | number | boolean;
function logMessage(value: string | number) {
    if(typeof value ==='number') {
        value.toLocaleString    //if문에서 value의 타입을 설정해 주므로 value. 까지만 적어도 number로 추론한다.
    }
    if(typeof value ==='string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
    //타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정
}
logMessage('hello');
logMessage(100);

interface Developer1 {
    name: string;
    skill: string;
}

interface Person2 {
    name: string;
    age: number;
}
// function askSomeone(someone: Developer1 | Person2) { //유니온 타입
    // someone.name    // ★ 공통 속성만 사용 가능
    // someone.skill   // 이 속성은 사용 불가능
    // someone.age     // 이 속성은 사용 불가능
// }   //Developer1 이나 Person2가 함수의 파라미터로 왔을 때 둘다 적용돼야 하기 때문
// askSomeone({ name: '디벨로퍼', skill: '웹 개발'});
// askSomeone({ name: '성원', age: 100});

function askSomeone(someone: Developer1 & Person2) { // 인터섹션 타입
    someone.name    // ★ 두 인터페이스의 모든 속성 사용 가능
    someone.skill   
    someone.age     
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 30});
// askSomeone({ name: '성원', age: 100});

var seong : string | number | boolean;
var won: string & number & boolean;