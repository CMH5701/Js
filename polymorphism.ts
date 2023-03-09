type Superprint = {
    (arr: number[]):void
    (arr: boolean[]):void
    (arr: string[]):void
    (arr: (number|boolean)[]):void
}

const superPrint: Superprint = (arr) => {
    arr.forEach(i => console.log(i))
}

superPrint([1,2,3,4])
superPrint([true,false,true])
superPrint(["a","b","c"])
superPrint([1,2,true,false])
//제너릭으로 보완 가능한 코드 다형성 type 

