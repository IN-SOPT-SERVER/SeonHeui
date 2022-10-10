const http = require("http"); // http라는 모듈 가져옴

const port = 3000; // 주소 느낌

http
  .createServer((req, res) => { // createsever라는 메서드를 사용해서 이런 식으로 수행하겠다~~
    res.write("<h1>IN SOPT SERVER!</h1>"); // res는 서버를 동작시킨다~~
    res.end("<p>awesome</p>");
  })
  .listen(port, () => { // 
    console.log(`${port} 번 포트에서 대기중 !`);
  });
