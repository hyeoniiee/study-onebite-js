// typeof : 특정 변수의 자료형을 결과 값으로 반환하는 연산자
let num = 10;
console.log(typeof num);

// 숫자형
let num1 = 125;
let num2 = 10.0012;
console.log(typeof num1);
console.log(typeof num2);

let num3 = Infinity;
console.log(typeof num3);

let num4 = 100 / 0;
console.log(num4);

let num5 = NaN;
console.log(num5);

let num6 = "javascript" / 10;
console.log(num6);

// 문자형 String
let name = "몽블랑";
console.log(typeof name);

let intro = `제 이름은 ${name} 입니다.`;
console.log(intro);

// 논리형 boolean
let isClicked = false;
if (isClicked) {
  console.log("클릭O");
} else {
  console.log("클릭X");
}

// Null : 존재하지 않거나 알 수 없는 값
let num7 = null;
console.log(typeof num7);
console.log(num7 === null);

// Undefined : 변수에 값이 할달되지 않을때 자동으로 할달되는 값
let num8;
console.log(typeof num8);
