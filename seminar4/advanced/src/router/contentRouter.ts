import { Router } from "express";
import { contentController } from "../controller";

const router: Router = Router();

//* content 생성
router.post('/', contentController.createContent);

//* content 전체 조회
router.get('/', contentController.getAllContent);

//* 특정 content 조회
router.get('/:contentId', contentController.getContent);

//* content 업데이트
router.patch('/:contentId', contentController.updateContent);

//* content 삭제
router.delete('/:contentId', contentController.deleteContent);

export default router;