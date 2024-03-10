import { Income } from "../models/income.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const addIncome = asyncHandler(async (req, res) => {
    const { source, amount, mode } = req.body

    if (
        [source, amount, mode].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }
    const income = await Income.create({
        source,
        amount,
        mode
    })

    const newIncome = await Income.findById(income._id)

    if (!newIncome) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, newIncome, "Income added Successfully")
    )
})

const deleteIncome = asyncHandler(async (req, res) => {
    const { _id } = req.body
    if (!_id) {

        throw new ApiError(404, "Not found")
    }

    Income.findByIdAndDelete(_id)
    return res.status(200).json(
        new ApiResponse(200, {}, "Deleted successfully")
    )
})

const updateIncome = asyncHandler(async (req, res) => {
    const { _id, source, amount, mode } = req.body
    if ([source, amount, mode].some((field) => field?.trim() === "")) {
        throw new ApiError(401, "All fields required")
    }
    console.log(req.body);

    const income = Income.findById(_id)
    if (!income) {
        throw new ApiError(404, "Not found")
    }
    const newIncome = await Income.findByIdAndUpdate(_id, {
        $set: {
            source,
            amount,
            mode
        }
    }, { new: true })
    return res.status(200).json(
        new ApiResponse(200, newIncome, "Updated successfully")
    )
})

const getAllIncome = asyncHandler(async (req,res)=>{
    const listIncome = await Income.find({})
    console.log(listIncome);
    console.log("no");
    res.status(200).json(
        new ApiResponse(200,listIncome,"success")
    )
})

export { addIncome, deleteIncome, updateIncome ,getAllIncome}