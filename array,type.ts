let a = [1,2];
let b:string[] = ["hello"];

type Age = number;
type Name = string;
type bool = bool[];

type Player = {
    name:Name,
    age?:Age
   
} 

const playerlist = (name:string) : Player => ({name})

let test3: any[2] = [1,2,3]
let test5: number[] = [4,5,6]

test3+test5

