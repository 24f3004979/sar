// controllers/faq.controller.js

let faqs = require("../data/faq.data");

exports.getFAQs = (req, res) => {
    res.json(faqs);
};

exports.createFAQ = (req, res) => {

    const newFAQ = {
        id: faqs.length + 1,
        question: req.body.question,
        answer: req.body.answer
    };

    faqs.push(newFAQ);

    res.status(201).json(newFAQ);
};

exports.deleteFAQ = (req, res) => {

    const id = parseInt(req.params.id);

    faqs = faqs.filter(faq => faq.id !== id);

    res.json({
        success: true
    });
};
