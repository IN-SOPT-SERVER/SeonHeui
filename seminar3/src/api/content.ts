// src/api/content.ts

import express, { Request, Response, Router } from "express";
const content = require('../database/data.json');

const router: Router = express.Router();

router.get("/:contentId", (req: Request, res: Response) => {
    let contentId = req.params.contentId;

  return res.status(200).json({
    status: 200,
    message: `${content[contentId]["title"]} 조회 성공`,
    data: content[contentId]
  });
});

module.exports = router;