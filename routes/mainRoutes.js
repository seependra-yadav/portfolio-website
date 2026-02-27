const express = require("express");

const router = express.Router();

const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT || "";

const renderContactPage = (res, { errorMessage = "" } = {}) => {
  res.render("contact", {
    pageTitle: "Contact | Seependra Singh",
    activeRoute: "/contact",
    errorMessage,
    formspreeEndpoint: FORMSPREE_ENDPOINT
  });
};

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
  renderContactPage(res, {
    errorMessage: FORMSPREE_ENDPOINT
      ? ""
      : "Contact form is not configured yet. Add FORMSPREE_ENDPOINT in .env."
  });
});

module.exports = router;
