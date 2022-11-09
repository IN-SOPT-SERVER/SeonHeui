import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//* 유저 생성
const createUser = async (name: string, email: string, age: number) => {
  // prisma는 promise 객체 반환
  const data = await prisma.user.create({
    data: {
      userName: name, 
      age,
      email,
    },
  });

  return data;
};

//* 유저 전체 조회
const getAllUser = async () => {
  const data = await prisma.user.findMany()
  return data;
};

//* 유저 정보 업데이트
const updateUser = async (userId: number, name: string) => {
  const data = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      userName: name, 
    }
  });
  return data;
};

//* 유저 삭제
const deleteUser = async (userId: number) => {
  await prisma.user.delete({
    where: {
      id: userId
    }
  })
};

//* userId로 유저 조회
const getUserById = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: { // where라는 쿼리 사용! --> 조건을 거는 것!
      id: userId,
    },
  });

  return user;
};

const userService = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
};

export default userService;
