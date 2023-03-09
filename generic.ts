type Superprint = {
    <TyepPlaceholder>(arr:TyepPlaceholder[]):TyepPlaceholder
}

const superPrint: Superprint = (arr) => arr[0]

const a = superPrint ([1,2,3,4])
const b =superPrint([true,false,true])
const c =superPrint(["a","b","c"])
const d =superPrint([1,2,true,false,"hello"])
console.log(a);

//call siganture 편하게 생성가능 placeholder
// 내가 원하는대로 callsignature = 제너릭