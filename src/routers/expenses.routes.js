import { Router } from "express";
import { addExpense, deleteExpense, getAllExpense, updateExpense } from "../controllers/expense.controller.js";
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = Router();

router.route("/add").post(verifyJWT, addExpense);
router.route("/delete").delete(verifyJWT, deleteExpense);
router.route("/update").patch(verifyJWT, updateExpense);
router.route("/all").get(verifyJWT, getAllExpense);


export default router