const express = require("express");
const app = express(); // Initialize Express application
const users = require("./question.json");
const port = 8000;

app.get("/users", (req, res) => {
    return res.json(users);
});

app.listen(port, () => {
    console.log(`Server started at: ${port}`);
});
