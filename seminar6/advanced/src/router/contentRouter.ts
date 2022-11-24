import { Router } from "express";
import { contentController } from "../controller";
import { body } from "express-validator";

const router: Router = Router();

//* content 생성
router.post("/", [body("title").notEmpty()], contentController.createContent);

//* content 전체 조회
router.get("/", contentController.getAllContent);

//* 특정 content 조회
router.get("/:contentId", contentController.getContent);

//* episode 조회
//* /:contentId/episode?id=
router.get("/:contentId/episode", contentController.getEpisode);

//* 찜한 content 조회
router.get("/like/:userId", contentController.getLikeAllContent);

//* content 업데이트
router.patch("/:contentId", contentController.updateContent);

//* content 삭제
router.delete("/:contentId", contentController.deleteContent);

export default router;
