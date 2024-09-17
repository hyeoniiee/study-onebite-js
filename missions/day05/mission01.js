/**
미션1. spread와 rest
sumAndDouble 함수를 작성하세요. 이 숫자는 여러 개의 숫자를 받아들입니다.

나머지를 대신하여 모든 요소를 ​​하나의 배열로 사용합니다.
숫자는 모두 더합니다.
배열의 모든 숫자에 2를 곱한 새로운 배열을 반환합니다. (배열 메소드 맵을 사용하세요.)
// 호출 예시
console.log(sumAndDouble(1, 2, 3, 4));
 */

// 미션1
function sumAndDouble(...number) {
  let sum = number.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  let array = number.map((num) => num * 2);

  return { sum, array };
}

console.log(sumAndDouble(1, 2, 3, 4));
