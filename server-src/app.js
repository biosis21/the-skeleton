import express from "express";
import "./b";

let app = express();

app.get('/', (req, res, next) => {
    res.send('Hello7!');
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Application is started!");
});