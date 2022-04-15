const express = require("express");
const res = require("express/lib/response");
const champions = require("./data");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/champions", (req, res) => {
    res.status(200).json(champions);
}); 

app.get('/api/champions/:id', (req, res) => {
    const champion = champions.find((e) => e.id === Number(req.params.id));
    res.status(200).json(champion);
});

app.post("/api/champions", (req, res) => {
    
    const { club, manager, stadium } = req.body;

    const lastId = champions[champions.length - 1].id;
    const newId = lastId + 1;

    const champion = {
        id: newId,
        club,
        manager,
        stadium,
    };

    champions.push(champion);
    
    res.status(201).json(champion);
});

app.put("/api/champions/:id", (req, res) => {
    // Destructuring
    const { club, manager, stadium } = req.body;

    const indexChampion = champions.findIndex(
        (e) => e.id === Number(req.params.id)
        );

    champions[indexChampion] = {
        id: Number(req.params.id),
        club,
        manager,
        stadium,
    };

    res.status(200).json(champions[indexChampion]);
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});