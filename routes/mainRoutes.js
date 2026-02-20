const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", {
    pageTitle: "Home | Seependra Singh",
    activeRoute: "/"
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    pageTitle: "About | Seependra Singh",
    activeRoute: "/about"
  });
});

router.get("/projects", (req, res) => {
  res.render("projects", {
    pageTitle: "Projects | Seependra Singh",
    activeRoute: "/projects"
  });
});

router.get("/contact", (req, res) => {
  res.render("contact", {
    pageTitle: "Contact | Seependra Singh",
    activeRoute: "/contact",
    successMessage: ""
  });
});

router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  const hasRequiredFields = name && email && message;

  res.render("contact", {
    pageTitle: "Contact | Seependra Singh",
    activeRoute: "/contact",
    successMessage: hasRequiredFields
      ? "Thank you for your message! I will get back to you soon."
      : "Please fill all required fields."
  });
});

module.exports = router;
