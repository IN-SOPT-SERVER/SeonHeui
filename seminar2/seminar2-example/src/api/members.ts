// src/api/user.ts

import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {

    const members= [ 
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

  return res.status(200).json({
    status: 200,
    message: "유저 조회 성공",
    data: members,
  });
});

module.exports = router;