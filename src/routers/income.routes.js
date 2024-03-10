import { Router } from "express";
import { addIncome, deleteIncome, getAllIncome, updateIncome } from "../controllers/income.controller.js";
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = Router();

router.route("/add").post(verifyJWT, addIncome);
router.route("/delete").delete(verifyJWT, deleteIncome);
router.route("/update").patch(verifyJWT, updateIncome);
router.route("/all").get(verifyJWT, getAllIncome);


export default router