import { Expense } from "../models/expences.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const addExpense = asyncHandler(async (req, res) => {
    const { product, amount, mode } = req.body

    if (
        [product, amount, mode].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }
    const expense = await Expense.create({
        product,
        amount,
        mode
    })

    const newExpense = await Expense.findById(expense._id)

    if (!newExpense) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, newExpense, "Expense added Successfully")
    )
})

const deleteExpense = asyncHandler(async (req, res) => {
    const { _id } = req.body
    if (!_id) {

        throw new ApiError(404, "Not found")
    }

    Expense.findByIdAndDelete(_id)
    return res.status(200).json(
        new ApiResponse(200, {}, "Deleted successfully")
    )
})

const updateExpense = asyncHandler(async (req, res) => {
    const { _id, product, amount, mode } = req.body
    if ([product, amount, mode].some((field) => field?.trim() === "")) {
        throw new ApiError(401, "All fields required")
    }

    const Expense = Expense.findById(_id)
    if (!Expense) {
        throw new ApiError(404, "Not found")
    }
    const newExpense = Expense.findByIdAndUpdate(_id, {
        $set: {
            product,
            amount,
            mode
        }
    }, { new: true })
    return res.status(200).json(
        new ApiResponse(200, newExpense, "Deleted successfully")
    )
})

const getAllExpense = asyncHandler(async (req,res)=>{
    const listExpense = await Expense.find({})
    console.log(listExpense);
    console.log("no");
    res.status(200).json(
        new ApiResponse(200,listExpense,"success")
    )
})

export { addExpense, deleteExpense,updateExpense ,getAllExpense}