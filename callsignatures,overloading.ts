type Add = (a:number , b:number) => number;
//a,b number 리턴

type Ted = {
    (c:number , d:number) : number;
    (c:number , d:number , e:number ) : number;

}
let add:Add = (a,b) => a+b

const ted:Ted = (c,d,e?:number) =>{
    if(c)return c+d+e
    return c+d
}
//서로다른 여러개의 시그니쳐 = 오버로딩
ted(2,3)
ted(2,3,5)