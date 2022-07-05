const exp = require("express");

const app = exp();

app.get("/", (req, res) => {
  res.send("AAAA");
});

app.listen(5000, () => console.log("Çalisiyo"));
