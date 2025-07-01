const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log(`method:${req.method} url:${req.url}>`);
  res.status(200).json({
    message: "home page",
  });
});

const PORT = process.env.PORT | 3000;
app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});
