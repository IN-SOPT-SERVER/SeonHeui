import { Router } from "express";
import { userController } from "../controller";
import {body} from "express-validator";
import auth  from "../middlewares/auth";

const router: Router = Router();



//* 유저 생성 - POST api/user --> Create
// router.post('/', userController.createUser);

//* 전체 유저 조회 - GET api/user --> R
router.get('/', userController.getAllUser);

//* 유저 정보 업데이트 - PATCH api/user/:userId (부분적으로만 수정할 거니깐 patch로) --> U
router.patch('/:userId', userController.updateUser);

//* 유저 정보 삭제 - DELETE api/user/:userId --> D
router.delete('/:userId', userController.deleteUser);

//* 유저 생성 - POST api/user
router.post(
    "/",
    [body("name").notEmpty(), body("email").notEmpty(), body("password").isLength({ min: 6 })],
    userController.createUser
  );

//* 로그인 - POST api/user/signin
router.post(
  "/signin",
  [
    body("email").notEmpty(),
    body("email").isEmail(),
    body("password").notEmpty(),
    body("password").isLength({ min: 6 }),
  ],
  userController.signInUser
);

//~ 이름으로 유저 검색 - GET api/user/search?keyword={}&option={}
router.get("/search", userController.searchUserByName);


router.get("/:userId",auth, userController.getUserById); // 

export default router;
