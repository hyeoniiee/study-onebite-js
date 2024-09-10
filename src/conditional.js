let num = 5;

if (num < 10) {
  console.log("num은 10보다 작다");
} else {
  //console.log("num은 10보다 크거나 같다");
  if (num > 10) {
    console.log("num은 10 보다 크다.");
  } else {
    console.log("num은 10 이다.");
  }
}

if (num < 10) {
  console.log("num은 10보다 작다");
} else if (num > 10) {
  console.log("num은 10 보다 크다.");
} else {
  console.log("num은 10 이다.");
}

let fruit = "apple";
switch (fruit) {
  case "banana":
    console.log("바나나");
    break;
  case "orange":
    console.log("오렌지");
  //break;
  case "apple":
    console.log("사과");
    break;
  case "grape":
    console.log("포도");
    break;
  default:
    console.log("다른과일");
}
