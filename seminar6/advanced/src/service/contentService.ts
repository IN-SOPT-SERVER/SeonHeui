import { ContentCreateDTO } from './../interfaces/ContentCreateDTO';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//* content 생성
const createContent = async (contentCreateDto: ContentCreateDTO) => {
    try {
        const data = await prisma.content.create({
            data: {
                title: contentCreateDto.title,
                actor: contentCreateDto?.actor,
                genre: contentCreateDto?.genre,
                year: contentCreateDto?.year,
                age: contentCreateDto?.age,
                episodeNum: contentCreateDto?.episodeNum,
                image: contentCreateDto?.image,
            }
        });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

//* content 전체 조회
const getAllContent = async () => {
    try {
        const data = await prisma.content.findMany();
        return data;
    } catch( error) {
        console.log(error);
        throw error;
    }
};

//* 특정 content 조회
const getContent = async (contentId: number) => {
    try {
        const contentData = await prisma.content.findUnique({
            where: {
                id: contentId,
            }
        });
        if (!contentData) return null;
        const episodeData = await prisma.episode.findMany({
            where: {
                contentId
            }
        });
        return { contentData, episodeData };
    } catch (error) {
        console.log(error);
        throw error;
    }
};

//* episode 조회
const getEpisode = async (contentId: number, episodeId: number) => {
    try {
        const data = await prisma.episode.findFirst({
            where: {
                episodeNum: episodeId,
                contentId
            }
        });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

//* 찜한 content 조회
const getLikeAllContent = async (userId: number) => {
    try {
        const data = await prisma.like.findMany({
            where: {
                userId
            },
            include: {
                Content: true
            }
        });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

//* content 업데이트
const updateContent = async (contentId: number, contentUpdateDto: ContentCreateDTO) => {
    try {
        const data = await prisma.content.update({
            where: {
                id: contentId,
            },
            data: {
                title: contentUpdateDto.title != null ? contentUpdateDto.title :undefined,
                actor: contentUpdateDto.actor != null ? contentUpdateDto.actor :undefined,
                genre: contentUpdateDto.genre != null ? contentUpdateDto.genre :undefined,
                year: contentUpdateDto.year != null ? contentUpdateDto.year :undefined,
                age: contentUpdateDto.age != null ? contentUpdateDto.age :undefined,
                episodeNum: contentUpdateDto.episodeNum != null ? contentUpdateDto.episodeNum :undefined,
                image: contentUpdateDto.image != null ? contentUpdateDto.image :undefined,
            }
        });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

//* content 삭제
const deleteContent = async (contentId: number) => {
    try {
        await prisma.content.delete({
            where: {
                id: contentId
            }
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const contentService = {
    createContent,
    getAllContent,
    getContent,
    updateContent,
    deleteContent,
    getEpisode,
    getLikeAllContent,
};

export default contentService;