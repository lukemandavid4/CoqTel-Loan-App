const express = require("express");
const app = express();
const connectDB = require("./config/config");

app.use(express.json);

connectDB();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
