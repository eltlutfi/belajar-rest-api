const express = require("express");
const res = require("express/lib/response");
const champions = require("./data");


const app = express();
const port = 3000;

app.get("/api/champions", (req, res) => {
    res.status(200).json(champions);
}); 

app.get('/api/champions/:id', (req, res) => {
    const champion = champions.find((e) => e.id === Number(req.params.id));
    res.status(200).json(champion);
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});