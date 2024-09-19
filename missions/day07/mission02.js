/**
미션2. DOM API & Select Tag
id 가 app인 div 요소의 내부에 아래의 코드들을 넣어주세요.

<select id="skills">
    <option value="javascript">Javascript</option>
    <option value="next">Next.js</option>
    <option value="react">React.js</option>
    <option value="typescript">TypeScript</option>
</select>
단, createElement, appendChild를 사용해서 생성해주세요.

select 태그의 값을 변경할 때 마다, 변경된 값을 출력하는 기능도 작성해주세요.


HTML코드
<!DOCTYPE html>
<html>
    <head>
        <title>Select Tag Quiz</title>
        <meta charset="UTF-8" />
    </head>
    <body>
        <div id="app">
            <!-- 여기에 요소들을 추가 -->
        </div>
        <script src="src/index.js"></script>
    </body>
</html>
 */

// 미션1
const app = document.getElementById("app");

const select = document.createElement("select");
select.id = "skills";

const options = [
  { value: "javascript", text: "Javascript" },
  { value: "next", text: "Next.js" },
  { value: "react", text: "React.js" },
  { value: "typescript", text: "TypeScript" },
];

options.forEach((optionData) => {
  const option = document.createElement("option");
  option.value = optionData.value;
  option.textContent = optionData.text;
  select.appendChild(option);
});

app.appendChild(select);

select.addEventListener("change", function () {
  console.log(select.value);
});
