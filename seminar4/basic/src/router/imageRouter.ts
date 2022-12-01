import { Router } from "express";
import { imageController } from "../controller";
import { upload } from "../middlewares";
const router: Router = Router();



router.post('/', upload.single('file'), imageController.uploadImage);

// upload.single , upload.array --> 여러개
export default router;