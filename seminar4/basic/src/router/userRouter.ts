import { Router } from "express";
import { userController } from "../controller";

const router: Router = Router();

router.get("/:userId", userController.getUserById);

//* 유저 생성 - POST api/user --> Create
router.post('/', userController.createUser);

//* 전체 유저 조회 - GET api/user --> R
router.get('/', userController.getAllUser);

//* 유저 정보 업데이트 - PATCH api/user/:userId (부분적으로만 수정할 거니깐 patch로) --> U
router.patch('/:userId', userController.updateUser);

//* 유저 정보 삭제 - DELETE api/user/:userId --> D
router.delete('/:userId', userController.deleteUser);

export default router;
