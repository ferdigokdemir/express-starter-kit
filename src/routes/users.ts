import * as express from "express";
import { Request, Response } from "express";

const router = express.Router();

router.get("/api/v1/users", (_: Request, res: Response) => {
  res.json([]);
});

export default router;
