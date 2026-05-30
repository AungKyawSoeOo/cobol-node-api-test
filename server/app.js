require("dotenv").config();
const express = require("express");
const calcService = require("./services/calcService");


const app = express();
app.use(express.json());

app.post("/add", async (req, res) => {
    const { a, b } = req.body;

    const result = await calcService.add(a, b);

    res.json({
         inputs: { a, b },
         operation: "add",
         result
        });
});

app.post("/sub", async (req, res) => {
    const { a, b } = req.body;

    const result = await calcService.sub(a, b);

    res.json({
        inputs:{a,b},
        operation: "sub",
        result
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("🚀 Server running on http://localhost:3000");
});