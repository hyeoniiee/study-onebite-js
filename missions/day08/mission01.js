/**
미션1. 자바스크립트의 this
다음 코드에서 regularFunction과 arrowFunction이 있습니다.

두 함수 모두 this가 어떻게 작동하는지 확인하기 위해 각각 this.value를 출력하려고 합니다.

각 함수의 this가 무엇을 가리키는지 확인하고, 각 함수가 정상적으로 this.value를 출력할 수 있도록 코드를 수정하세요. (주석으로 작성된 질문에 대한 답도 주석으로 남겨주세요!!)

const obj = {
    value: 42,
    regularFunction: function () {
        console.log(this.value); // 여기서 this는 무엇을 가리키나요?
    },
    arrowFunction: () => {
        console.log(this.value); // 여기서 this는 무엇을 가리키나요?
    },
};

obj.regularFunction(); // 출력: 42
obj.arrowFunction(); // 출력: undefined (이유를 설명해보세요)

 */

// 미션1
const obj = {
  value: 42,
  regularFunction: function () {
    console.log(this.value); // 여기서 this는 무엇을 가리키나요?
    // 일반 함수는 호출된 방식에 따라 this 가 결정되는데 obj.regularFunction() 으로 호출하면 this 는 호출한 객체 obj 를 가리킨다.
  },
  arrowFunction: () => {
    console.log(this.value); // 여기서 this는 무엇을 가리키나요?
    // 화살표 함수는 자신만의 this를 가지지 않고, 정의된 스코프에서 this를 상속받는데 화살표 함수는 전역 스코프의 this를 참조한다.
    // 전역 객체에는 value가 없으므로 this.value는 undefined가 된다.
  },
};

obj.regularFunction();
obj.arrowFunction();
