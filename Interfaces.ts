type Team = "read" | "blue" | "yellow"
type Health = 1 | 5 | 10

interface Player{
nickname:string;
team:Team
healthBar:Health
}
//React.js 자주 사용  interface = only use object 모양 설명만 가능


const Choi : Player = {
nickname:"Choi",
team:"read",
healthBar:10
}

//type은 범용성이 더 좋다 / 다양한 목적 사용가능함. 타입 alios , 특정 값 제한 ,예시 처럼 object 모양도 설명이 가능
type Test = {
    ts:string;
    tes: Team
}
let kimchi:Test = {
    ts:"cool",
    tes:"read"
}

type Pl = {
    name:string,
    size:"xs" | "s" | "m" | "l" | "xl"
}
