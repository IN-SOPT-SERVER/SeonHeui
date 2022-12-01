import { success, fail } from "../constants/response";
import { ContentCreateDTO } from "./../interfaces/ContentCreateDTO";
import { validationResult } from "express-validator";
import { Request, Response } from "express";
import { contentService } from "../service";
import { rm, sc } from "../constants";

//* content 생성
const createContent = async (req: Request, res: Response) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
    }

    const contentCreateDto: ContentCreateDTO = req.body;
    const data = await contentService.createContent(contentCreateDto);

    if (!data) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));

    return res.status(sc.OK).send(success(sc.OK, rm.CREATE_CONTENT_SUCCESS, data));

  } catch (error) {
    return res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

//* content 전체 조회
const getAllContent = async (req: Request, res: Response) => {
    try {
        const data = await contentService.getAllContent();
        if (!data) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
        return res.status(sc.OK).send(success(sc.OK, rm.READ_CONTENT_SUCCESS, data));
    } catch (error) {
        return res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
    }
};

//* 특정 content 조회
const getContent = async (req: Request, res: Response) => {
  const { contentId } = req.params;
  try {
    const data = await contentService.getContent(+contentId);
    if (!data) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
    return res.status(sc.OK).send(success(sc.OK, rm.READ_CONTENT_SUCCESS, data));
  } catch (error) {
    return res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

//* episode 조회
const getEpisode = async (req: Request, res: Response) => {
  const { contentId } = req.params;
  const episodeId = req.query.id;
  if (!contentId || !episodeId) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));

  try {
    const data = await contentService.getEpisode(+contentId, +episodeId);
    if (!data) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
    return res.status(sc.OK).send(success(sc.OK, rm.READ_EPISODE_SUCCESS, data));
  } catch (error) {
    return res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

//* 찜한 content 조회
const getLikeAllContent = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const data = await contentService.getLikeAllContent(+userId);
    if (!data) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
    return res.status(sc.OK).send(success(sc.OK, rm.READ_CONTENT_SUCCESS, data));
  } catch (error) {
    return res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

//* content 업데이트
const updateContent = async (req: Request, res: Response) => {
  const { contentId } = req.params;
  const contentUpdateDto: ContentCreateDTO = req.body;
  try {
    const data = await contentService.updateContent(+contentId, contentUpdateDto);
    if (!data) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
    return res.status(sc.OK).send(success(sc.OK, rm.UPDATE_CONTENT_SUCCESS, data));
  } catch (error) {
    return res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

//* content 삭제
const deleteContent = async (req: Request, res: Response) => {
  const { contentId } = req.params;
  try {
    await contentService.deleteContent(+contentId);
    return res.status(sc.OK).send(success(sc.OK, rm.DELETE_CONTENT_SUCCESS));

  } catch (error) {
    return res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

const contentController = {
  createContent,
  getAllContent,
  getContent,
  updateContent,
  deleteContent,
  getEpisode,
  getLikeAllContent,
};

export default contentController;
