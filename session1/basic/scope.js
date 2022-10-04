// if (true) {
//     var x = "var";
//     console.log(x);
// }
// console.log("x: ", x); // var: Function Scope

// if (true) {
//     let y = "let";
//     console.log(y);
// }
// console.log("y: ", y); // error, Block Scope 블록 밖에서 호출 안 됨

const arr1 = ['전선희', '피자', 23, true];
const arr2 = Array('전선희', '피자', 23, true);

arr1.map((item) => console.log(`${item}!!`));
