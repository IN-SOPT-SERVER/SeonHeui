import { Request, Response } from "express";
const content = require('../database/data.json');

const getContent = (req: Request, res: Response) => {
    let {contentId} = req.params;
    let contentInfo = content[contentId];

    if (!contentInfo) {
        return res.status(404).json({
            status: 404,
            message: `조회 실패`
        }); 
    }

    return res.status(200).json({
        status: 200,
        message: `${contentInfo["title"]} 조회 성공`,
        data: contentInfo
    });
};

module.exports = {getContent};