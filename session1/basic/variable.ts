// const isLiked: boolean = true;
// console.log(`${typeof isLiked}, ${isLiked}`)

// const str: string = 'helloooo!'
// console.log(`${typeof str}, ${str}`)

// let num:number = 31
// console.log(`${typeof num}, ${num}`)

// const test3:boolean = true
// console.log(typeof test3, test3)

// const sum:number = 'sum number' // error
// const sum2:string = 'sum number'

// let aaa:number[] = [1, 2] //* 아래 보다 이걸 선호
// const arr3: Array<string> = ['h', 'a', 'd']

// const foo1 = (a: Object) => {
//     console.log(a)
// }

// const foo2 = (a: object) => {
//     console.log(a)
// }

// foo1('hello')
// foo2('hello') // error

const hello2 = (name: string): void => {
    console.log(`${name}아 안녕`)
}

const sum2 = (a: number, b: number): number => {
    return a + b;
}

//* as
const test11: any = '이종현'
const nameLength = (test11 as string).length
console.log(nameLength)
//* angle-bracket
const test12: any = '수현'
const nameLength2 = (<string>test12).length
console.log(nameLength2)

interface SOPT2 {
    name: string;
    age: number;
    isSOPT ?: boolean; // ? 키워드: 선택적 프로퍼티
}

const arr2: SOPT2[] = [{
    name: '전선희',
    age: 23,
    isSOPT: true,
},{
    name: "최승빈",
    age: 67,
},]

const introduce: SOPT2 = {
    name: '전선희',
    age: 23,
    isSOPT: true,
}
