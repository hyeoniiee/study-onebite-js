// 전역 스코프 (글로벌 스코프 라고도 함) -> 어디서든지 접근 가능
// 지역 스코프 (로컬 스코프 라고도 함) -> 특정 지역에서만 접근 가능

let globalNum = 100;

function testFunc() {
  let innerNum = 50;
  console.log(globalNum);
  console.log(innerNum);
}

testFunc();
console.log(globalNum);
// console.log(innerNum); // 오류 발생 : innerNum is not defined at scope.js:14:13

// 다음 예제로 흐름 알아보기
let global = "나는 전역 변수입니다.";

function outerFunction() {
  let outer = "나는 외부 함수의 변수입니다.";

  function innerFunction() {
    let inner = "나는 내부 함수의 변수입니다.";
    console.log(global);
    console.log(outer);
    console.log(inner);
  }

  innerFunction();
  console.log(global);
  console.log(outer);
  //console.log(inner); // inner 변수에 접근할 수 없어 오류가 발생한다.
}

outerFunction();
/**
1. 나는 전역 변수입니다.
2. 나는 외부 함수의 변수입니다.
3. 나는 내부 함수의 변수입니다.
4. 나는 전역 변수입니다.
5. 나는 외부 함수의 변수입니다.
6. inner is not defined at outerFunction
 */

// 함수 스코프 (같은 함수 내부에서만 접근이 가능) 와 블록 스코프
function print() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i);
}
print();
// var 이라는 키워드는 let, const 처럼 어떤 식별자를 선언할 때 사용하는 키워드로 let 과는 다르게 함수 스코프를 갖는다.

// let 키워드로 선언된 변수는 블록 스코프를 갖고, var 키워드로 선언된 변수는 함수 스코프를 갖는다.
// var 키워드를 사용해 변수르르 선언하면 같은 이름의 변수를 여러번 다시 선언 할 수 있고, 기존에 선언된 동일한 변수는 무시된다.
// var 키워드는 자바스크립트 초기 버전에 도입된 변수 선언 방식으로 오래된 변수 선언 키워드라 불리며 잘 사용하지 않는다.
// 또한 함수 스코프를 갖기 때문에 함수 내부에서 어디서든 접근이 가능하고, 함수 외부에서는 접근할 수 없다.
// 하지만 var 키워드와 다르게 let, const 키워드는 자바스크립트 ES6 버전에 도입된 변수 선언 방식으로 블록스코프를 지원하며 중괄호인 블록 단위로 둘러싸인 코드블록의 내부에서만 유효한 범위를 갖는다.
// 블록 스코프는 같은 블록 내부에서 같은 이름의 변수를 재선언하려고 할 때 에러를 발생시키기 때문에 코드의 신뢰성과 예측 가능성을 높인다는 특징이 있다.
var num = 10;
var num = 100;
console.log(num);
