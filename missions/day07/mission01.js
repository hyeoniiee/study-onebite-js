/**
미션1. DOM API
index.js 파일을 생성하고, 파일의 내부에 버튼 클릭 시 텍스트 요소의 내용을 변경하는 함수를 작성하세요.

DOM API를 사용하여 요소를 선택하고, 이벤트 리스너를 추가해야 합니다.

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DOM API Quiz</title>
    </head>
    <body>
        <p id="text">기본 텍스트</p>
        <button id="changeTextButton">텍스트 변경</button>
        <script src="src/index.js"></script>
    </body>
</html>

 */

// 미션1
const $text = document.getElementById("text");
const $button = document.getElementById("changeTextButton");

function changeText() {
  $text.textContent = "미션1 DOM API ";
}

$button.addEventListener("click", changeText);
