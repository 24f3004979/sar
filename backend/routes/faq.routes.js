\// routes/faq.routes.js

const express = require("express");

const router = express.Router();

const faqController = require("../controllers/faq.controller");

router.get("/", faqController.getFAQs);

router.post("/", faqController.createFAQ);

router.delete("/:id", faqController.deleteFAQ);

module.exports = router;
