const express = require("express")
const {HomePage, AboutPage, ContactPage} = require("../controllers/pageController");

const router = express.Router()

router.get("/", HomePage);
router.get("/about", AboutPage);
router.get("/contact", ContactPage);

module.exports=router;