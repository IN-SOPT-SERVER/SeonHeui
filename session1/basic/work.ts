// 1. 
const members: Server[] = [ // 
    {
        name: '김동재',
        age: 23,
        loc: '상봉역',
        like: '치킨',
    }, 
    {
        name: '김소현',
        age: 23,
        loc: '상도',
        like: '방탈출',
    },
    {
        name: '김경린',
        age: 24,
        loc: '일샨',
        like: '산책'
    },
]

// 2.
interface Server {
    name: string;
    age: number;
    loc: string;
    like?: string;
}
// const arr: SOPT[] = members

// 3. 
members.map((member) => console.log(`${member.name}, ${member.age}, ${member.loc}, ${member.like}`));