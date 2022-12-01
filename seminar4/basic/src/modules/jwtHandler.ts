// src/modules/jwtHandler.ts
import jwt from "jsonwebtoken";
import { tokenType } from "../constants";

//* 받아온 userId를 담는 access token 생성
const sign = (userId: number) => {
  const payload = { // payload --> 
    userId, 
  };
  // access token으로 만들어 줌, expiresIn: 옵션 2h --> 2시간
  const accessToken = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: "2h" });
  return accessToken;
};

//* token 검사!
const verify = (token: string) => {
  let decoded: string | jwt.JwtPayload;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET as string);
  } catch (error: any) {
    if (error.message === "jwt expired") {
      return tokenType.TOKEN_EXPIRED;
    } else if (error.message === "invalid token") {
      return tokenType.TOKEN_INVALID;
    } else {
      return tokenType.TOKEN_INVALID;
    }
  }
  // 
  return decoded;
};

export default {
  sign,
  verify,
};