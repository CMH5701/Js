let arr = [1, 2, 3, 6];

let testmap = arr.map((element)=>{
    return element *5;
});

console.log(testmap);

// for문과 같은 혹은 비슷하다고 생각함, 경우에 따라 사용법이 다를듯 보인다 예제 함수 "=>" 바꿨음

let test = [1, 2, 3, 6];

for (let i = 0; i < test.length; i++){
  test[i] = test[i] * 5;
}

console.log(test);