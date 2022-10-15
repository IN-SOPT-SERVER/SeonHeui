// promise-chaining.ts

//* 아침에 힘겹게 일어나는 여러분을 표현한 함수
const me = (callback: () => void, time: number) => {
    setTimeout(callback, time);
};
  
//* 기상
const wakeUp = (): Promise<string> => {

    return new Promise((resolve, reject) => {
        me(() => {
            console.log("[현재] 기상!");
            resolve("기상");

        }, 3000);
    });
};

//* 화장실 감
const goBathRoom = (now: string): Promise<string> => {
return new Promise((resolve, reject) => {
    me(() => {
    console.log("[현재] 화장실로 이동함");
    resolve(`${now} -> 화장실로 이동함`);
    }, 1000);
});
};


//* 칫솔과 치약을 준비함
const ready = (now: string): Promise<string> => {
return new Promise((resolve, reject) => {
    me(() => {
    console.log("[현재] 칫솔과 치약을 준비함");
    resolve(`${now} -> 칫솔과 치약을 준비함`);
    }, 1000);
});
};

//* 양치함
const startChikaChika = (now: string): Promise<string> => {
return new Promise((resolve, reject) => {
    me(() => {
    console.log("[현재] 양치함");
    resolve(`${now} -> 양치함`);
    }, 1000);
});
};

//* 나 자신에게 칭찬함
const goodJob = (now: string): Promise<string> => {
return new Promise((resolve, reject) => {
    me(() => {
    console.log("[현재] 나 자신에게 칭찬중");
    resolve(`${now} -> 칭찬중`);
    }, 1000);
});
};

wakeUp() // 기상 먼저하기 --> resolve된 data then으로 바져오기
    .then((now) => goBathRoom(now)) // resolve된 data then을 이용해서 now로 바꿔서 ready로 넣고
    .then((now) => ready(now))
    .then((now) => startChikaChika(now))
    .then((now) => goodJob(now))
    .then((now) => console.log(`\n${now}`));