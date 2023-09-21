import { Router } from "express";
import { getOrders } from "../controllers/order.controller.js";

const router = Router();

router.get("/orders/:status/:startDate/:endDate", getOrders);

export default router;
