import { Router } from "express";
import { AppController } from "../controllers/app";
import { EstimationController } from "../controllers/estimation";

const router = Router();
const appController = new AppController();
const estimationController = new EstimationController();

router.get("/", appController.healthCheck);
router.get('/estimate', estimationController.getEstimation);

router.use((err, req, res, next) => {
  console.log(err);

  res.status(500).send("Internal Server Error Router");
});

export default router;
