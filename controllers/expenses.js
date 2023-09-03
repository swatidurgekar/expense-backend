const Expense = require("../models/expenseModel");

exports.expenseForm = (req, res, next) => {
  Expense.findAll()
    .then((result) => {
      res.render("expenseForm.ejs", {
        expenses: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postExpenses = (req, res, next) => {
  const name = req.body.name;
  const price = req.body.price;
  console.log(name, price);
  Expense.create({
    name: name,
    price: price,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteExpense = (req, res, next) => {
  const id = req.params.id;
  Expense.findByPk(id)
    .then((expense) => {
      expense.destroy();
    })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.editExpense = (req, res, next) => {
  const id = req.params.id;
  Expense.findByPk(id)
    .then((result) => {
      res.render("editExpense.ejs", {
        expense: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postEdit = (req, res, next) => {
  const id = req.body.id;
  const name = req.body.name;
  const price = req.body.price;
  Expense.findByPk(id)
    .then((expense) => {
      expense.name = name;
      expense.price = price;
      return expense.save();
    })
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
