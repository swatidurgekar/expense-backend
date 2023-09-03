const express = require("express");
const expenseController = require("../controllers/expenses");

const router = express.Router();

router.get("/", expenseController.expenseForm);
router.post("/getExpenses", expenseController.postExpenses);
router.post("/delete/:id", expenseController.deleteExpense);
router.post("/edit/:id", expenseController.editExpense);
router.post("/postEdit", expenseController.postEdit);

module.exports = router;
