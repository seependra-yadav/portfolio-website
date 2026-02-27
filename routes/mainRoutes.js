const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT || "";
const SITE_URL = (process.env.SITE_URL || "").replace(/\/$/, "");
const RESUME_PUBLIC_PATH = "/docs/seependra_resume.pdf";
const RESUME_FILE_PATH = path.join(__dirname, "..", "public", "docs", "seependra_resume.pdf");
const HAS_RESUME = fs.existsSync(RESUME_FILE_PATH);

const PROFILE_LINKS = {
  github: "https://github.com/seependra-yadav",
  linkedin: "https://www.linkedin.com/in/seependra-singh-81ab63259/",
  email: "mailto:seependra9569@gmail.com",
  resume: HAS_RESUME ? RESUME_PUBLIC_PATH : ""
};

const buildAbsoluteUrl = (routePath) => {
  if (!SITE_URL) return "";
  return `${SITE_URL}${routePath}`;
};

const getCommonViewModel = ({
  pageTitle,
  activeRoute,
  metaDescription
}) => ({
  pageTitle,
  activeRoute,
  metaDescription,
  canonicalUrl: buildAbsoluteUrl(activeRoute || "/"),
  ogImage: buildAbsoluteUrl("/img/image.png"),
  profileLinks: PROFILE_LINKS,
  hasResume: HAS_RESUME
});

const renderContactPage = (res, { errorMessage = "" } = {}) => {
  res.render("contact", {
    ...getCommonViewModel({
      pageTitle: "Contact | Seependra Singh",
      activeRoute: "/contact",
      metaDescription: "Contact Seependra Singh for full-stack development opportunities, collaborations, and project discussions."
    }),
    errorMessage,
    formspreeEndpoint: FORMSPREE_ENDPOINT
  });
};

router.get("/", (req, res) => {
  res.render("home", {
    ...getCommonViewModel({
      pageTitle: "Home | Seependra Singh",
      activeRoute: "/",
      metaDescription: "Portfolio of Seependra Singh - full-stack developer building scalable web applications with modern JavaScript technologies."
    })
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    ...getCommonViewModel({
      pageTitle: "About | Seependra Singh",
      activeRoute: "/about",
      metaDescription: "Learn about Seependra Singh's background, education, technical skills, and professional development focus."
    })
  });
});

router.get("/projects", (req, res) => {
  res.render("projects", {
    ...getCommonViewModel({
      pageTitle: "Projects | Seependra Singh",
      activeRoute: "/projects",
      metaDescription: "Explore full-stack projects by Seependra Singh, including booking, authentication, e-commerce, and portfolio applications."
    })
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
