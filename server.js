const express = require("express");
const path = require("path");
const mainRoutes = require("./routes/mainRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/img", express.static(path.join(__dirname, "img")));

app.use("/", mainRoutes);

app.use((req, res) => {
  res.status(404).render("404", {
    pageTitle: "Page Not Found",
    activeRoute: ""
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
