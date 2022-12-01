import { Request, Response } from "express";
import { contentService } from "../service";

//* content 생성
const createContent = async ( req: Request, res: Response ) => {
    const { title, actor, genre, year, age, episodeNum, image } = req.body;

    if (!title) return res.status(400).json({ status: 400, message: "content 생성 실패" });

    const data = await contentService.createContent(title, actor, genre, year, age, episodeNum, image);

    if(!data) return res.status(400).json({ status: 400, message: "content 생성 실패" });

    return res.status(200).json({ status: 200, message: "content 생성 성공", data });
}

//* content 전체 조회
const getAllContent = async ( req: Request, res: Response ) => {
    const data = await contentService.getAllContent();
    return res.status(200).json({ status: 200, message: "content 전체 조회 성공", data });
}

//* 특정 content 조회
const getContent = async ( req: Request, res: Response ) => {
    const { contentId } = req.params;

    const data = await contentService.getContent(+contentId);

    if (!data) {
        return res.status(404).json({ status: 404, message: "NOT_FOUND" });
    }
    return res.status(200).json({ status: 200, message: "content 조회 성공", data});
};

//* episode 조회
const getAllEpisode = async ( req: Request, res: Response ) => {
    const { contentId } = req.params;

    const data = await contentService.getAllEpisode(+contentId);

    if (!data) {
        return res.status(404).json({ status: 404, message: "NOT_FOUND" });
    }
    return res.status(200).json({ status: 200, message: "episode 조회 성공", data});
};

//* 찜한 content 조회
const getLikeAllContent = async ( req: Request, res: Response ) => {
    const { userId } = req.params;

    const data = await contentService.getLikeAllContent(+userId);
    if (!data) {
        return res.status(404).json({ status: 404, message: "NOT_FOUND" });
    }
    return res.status(200).json({ status: 200, message: "찜한 목록 조회 성공", data});
};

//* content 업데이트
const updateContent = async ( req: Request, res: Response ) => {
    const { contentId } = req.params;
    const { actor } = req.body;
    
    const updatedContent = await contentService.updateContent(+contentId, actor);
    return res.status(200).json({ status: 200, message: "content 업데이트 성공", updatedContent});
}

//* content 삭제
const deleteContent = async ( req: Request, res: Response) => {
    const { contentId } = req.params;

    await contentService.deleteContent(+contentId);
    return res.status(200).json({ status: 200, message: "content 삭제 성공" });
}

const contentController = {
    createContent,
    getAllContent,
    getContent,
    updateContent,
    deleteContent,
    getAllEpisode,
    getLikeAllContent,
};

export default contentController;