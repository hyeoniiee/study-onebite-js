// 함수
function add(num1, num2) {
  return num1 + num2;
  console.log("함수 호출"); //return 문 아래에 작성된 코드는 실행되지 않고 함수는 종료된다.
}

let result = add(10, 20);
console.log(`두 숫자를 더한 결과는 ${result} 입니다.`);

function compare(num) {
  if (num === 0) {
    console.log("num의 값은 0 입니다.");
  } else if (num < 0) {
    console.log("num의 값이 0 보다 작습니다.");
  } else {
    if (num >= 10) {
      console.log("num의 값이 10 보다 크거나 같습니다.");
    } else {
      console.log("num의 값이 0 보다 크고 10 보다 작습니다.");
    }
  }
}

compare(10);

function compare1(num3) {
  if (num3 === 0) {
    return "num3 값은 0 입니다.";
  }
  if (num3 < 0) {
    return "num3 값이 0 보다 작습니다.";
  }
  if (num3 >= 10) {
    return "num3 값이 10 보다 크거나 같습니다.";
  }
  return "num3 값이 0 보다 크고 10 보다 작습니다.";
}

console.log(compare1(0));

function print() {
  console.log(1);
  console.log(2);
}

console.log(3);
print();
console.log(4);
