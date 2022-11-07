// src/api/content.ts

import express, { Router } from "express";
const ctrl = require('../controller/content.ctrl');

const router: Router = express.Router();

router.get('/:contentId', ctrl.getContent);

module.exports = router;