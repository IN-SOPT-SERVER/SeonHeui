import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//* content 생성
const createContent = async (title: string, actor: string, genre: string, year: number, age: number, episodeNum: number, image: string) => {
    const data = await prisma.content.create({
        data: {
            title, actor, genre, year, age, episodeNum, image
        }
    });
    return data;
};

//* content 전체 조회
const getAllContent = async () => {
    const data = await prisma.content.findMany()
    return data;
};

//* 특정 content 조회
const getContent = async (contentId: number) => {
    const contentData = await prisma.content.findUnique({
        where: {
            id: contentId
        }
    });
    const episodeData = await prisma.episode.findMany({
        where: {
            contentId
        }
    });
    // const data = [contentData, episodeData];
    const data = Object.assign({}, contentData, episodeData);
    return data;
};

//* episode 조회
const getAllEpisode = async (contentId: number) => {
    const data = await prisma.episode.findMany({
        where: {
            contentId
        },
    });
    return data;
};

//* 찜한 content 조회
const getLikeAllContent = async (userId: number) => {
    const data = await prisma.like.findMany({
        where: {
            userId
        },
        include: {
            Content: true
        }
    });
    return data;
};

//* content 업데이트
const updateContent = async (contentId: number, actor: string) => {
    const data = await prisma.content.update({
        where: {
            id: contentId,
        },
        data: {
            actor: actor
        }
    });
    return data;
};

//* content 삭제
const deleteContent = async (contentId: number) => {
    await prisma.content.delete({
        where: {
            id: contentId
        }
    });
};

const contentService = {
    createContent,
    getAllContent,
    getContent,
    updateContent,
    deleteContent,
    getAllEpisode,
    getLikeAllContent,
};

export default contentService;