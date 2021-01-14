import express from "express";
import mongoose from "mongoose";
import Cards from './dbCards.js';
import Cors from "cors";

//App Config
const app = express();
const port = process.env.port || 8001;
const connectionUrl = `mongodb+srv://admin:zQavPgN6KrRWcznx@cluster0.orlks.mongodb.net/tinderdb?retryWrites=true&w=majority`

//Middlewares
app.use(express.json())
app.use(Cors())

//Db Config
mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

//Api Endpoints
app.get("/", (request, response) => response.status(200).send("Hello World!"));

app.post("/tinder/cards", (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data) // Data successfully added
        }
    })
})

app.get("/tinder/cards", (req, res) => {
    Cards.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data) // Data successfully retrieved
        }
    })
})

app.post("/tinder/cards/deleteAll", (req, res) => {
    Cards.deleteMany({}, (err) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send("Deleted All data") // Data successfully retrieved
        }
    })
})


//Listener
app.listen(port, () => console.log(`Listenin on local host: ${port}`));
