// server.js

const express = require("express");

const cors = require("cors");

const faqRoutes = require("./routes/faq.routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/faqs", faqRoutes);

app.get("/", (req, res) => {
    res.send("FAQ Backend Running");
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
