const a = [1,2,3,4] + false;
console.log(a)
//배열 사라짐 '1,2,3,4,5false' 문자열로 출력
//ts 써야하는 이유 js 잠시만 안녕? 

// var x = new Boolean(false);
// if (x) {
//   // 이 코드는 실행됨
// }
console.log(x);

var x = false;
if (x) {
  // 이 코드는 실행되지 않음
}
//js에서의 boolean은 type연산을 하지 않는 경우 사용에 문제는 없어보임 2023-02-21 아기명환기준

var myFalse = new Boolean(false);   // 초기값 거짓
var g = Boolean(myFalse);           // 초기값 참
var myString = new String('Hello'); // 문자열 객체
var s = Boolean(myString);          // 초기값 참

console.log(g);
console.log(s);

//false 값으로 초기화 () 비워두거나 null,0,문자열을 넣으면 무조건 true나옴
var bNoParam = new Boolean();
var bZero = new Boolean('0');
var bNull = new Boolean(null);
var bEmptyString = new Boolean('');
var bfalse = new Boolean(false);

console.log(bZero);
//true 값으로 초기화 ture 값 선언해주기
var btrue = new Boolean(true);
var btrueString = new Boolean('true');
var testfalse = new Boolean();
var bSuLin = new Boolean('Su Lin');
var bArrayProto = new Boolean([]);
var bObjProto = new Boolean({});

console.log(testfalse);