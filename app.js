const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sequelize = require("./util/database");
const expenseRoutes = require("./routes/expenseRoutes");

app.set("views", __dirname + "/views");
app.engine("html", require("ejs").renderFile);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(expenseRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
