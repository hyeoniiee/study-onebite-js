// 산술 연산자
let num1 = 10;
let num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % 2); //0
console.log(num2 % 2); //1

// 증감 연산자
console.log(num1++); //10
console.log(num1); //11
console.log(++num1); //12

console.log(num1--); //12
console.log(num1); //11
console.log(--num1); //10

// 대입 연산자
let num3 = 10;
num3 = num3 + 5; // num3 += 5
console.log(num3);

// 비교 연산자
// 두 개의 값이 일치하는지 확인하는 연산자 : === / ==
let num4 = 10;
let num5 = "10";
console.log(num4 === num5); //false / === 자료형의 타입까지 일치하는지 확인하는 연산자
console.log(num4 == num5); //true / == 오직 값이 일치하는지 확인하는 연산자 (자료형은 확인하지 않음)

// 일치하지 않는지 확인하는 연산자 : !== / !=
console.log(num4 !== num5); // 자료형까지 불일치 하므로 true 출력
console.log(num4 != num5); // 10으로 동일한 값을 가지고 있어 불일치 하지 않는다 라는 false 출력

// 대소비교 연산자
let a = 10;
let b = 20;
let c = 10;

console.log(a < b);
console.log(a > b);
console.log(b >= c);
console.log(a > c);

// 연결 연산자 : + 기호를 사용
let price = 10000;
console.log("가격 : " + price + "원");

// 논리 연산자 : true, false 를 이용해 조건을 확인할때 사용
// NOT 연산자 : flase -> true, true -> false
let isClicked = true;
let isOpened = false;
console.log(!isClicked); //false
console.log(!isOpened); // true

// OR 연산자 : || 기호사용, 하나라도 값이 true 면 true 를 반환
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// AND 연산자 : && 기호 사용, 하나라도 값이 false 면 flase 반환
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// null 병합 연산자 : 주로 변수의 기본값을 할당하고 싶을때 사용
let aa;
let bb = 10;
console.log(aa ?? 20);
console.log(bb ?? 20);

// 삼항 연산자 : A ? B : C
// A 라는 조건문의 값이 true 라면 B 의 값을 반환하고, 조건문이 만족하지 않아 false 라면 C 의 값을 반환한다.
let a1 = 100;
let result = a1 % 2 === 0 ? "짝수" : "홀수";
console.log(result);
