const express = require("express");
const userRoute = require("./routes/userRoute.js");
const connectDB = require("./config/config");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(`/api/user`, userRoute);

connectDB();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
