import {config} from "dotenv";
config(); // charge le .env

import * as express from 'express';
import {log} from "./middlewares";

const app = express();

app.use(log()); // permet de rendre d'executer le middleware avant toutes les routes

app.get('/ping', log(), log(), log(), function (req, res) {
   res.send("pong");
});

app.get('/test', function (req, res) {
   res.send("test");
});

app.listen(process.env.PORT, function() {
   console.log(`Listening on port ${process.env.PORT}...`);
});