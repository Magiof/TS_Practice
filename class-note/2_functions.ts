// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//     return a + b;
// }
// sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
    return 10; //리턴값이 없으면 에러
}

// 함수에 타입을 정의하는 방식 (3_interface.ts 의 함수랑 중복이라 주석처리)
// function sum(a: number, b: number): number{
//     return a + b;
// }
sum(10, 20);    // ts에서는 엄격하게 체크한다. 인자가 적어도 에러
                        // js에서는 유연함

// 함수의 옵셔널 파라미터
function log(a: string, b?: string, c?: string) {

}
log('hello world');
log('hello ts', 'abc');