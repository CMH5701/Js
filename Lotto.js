document.write('번호');
//document.write('하이');//''
//var name = '엄준식';
//document.write(typeof name);//불,정수,문자 무엇인지 타입 출력해줌
var lotto = [];
while (lotto.length < 6)/*배열안의 값이 6개가 될 때 까지*/ {
    var num = parseInt(Math.random() * 45 + 1);//소수를 벌고 정수만
    if (lotto.indexOf(num) == -1){//lotto 배열에 num 값이 있는지 검사하는 코드를 작성해주세요.
        lotto.push(num);
    }
}
    lotto.sort((a,b)=>a-b);//오름차순으로
    document.write(lotto);