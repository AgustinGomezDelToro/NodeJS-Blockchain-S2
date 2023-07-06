import {config} from "dotenv";
config(); // import les variables d'env du fichier .env

import * as express from 'express';
import {Request, Response} from "express";

const app = express();

// -> http://localhost:$PORT/ping
app.get('/ping', function(req: Request, res: Response) {
    res.send("pong"); // res.send permet de repondre au client
});

// -> http://localhost:$PORT/school?name=XXX
// req.query --> dans l'url après le ?
app.get('/school', function(req: Request, res: Response) {
    if(typeof req.query.name === 'string') {
        res.send("L'ecole est la suivante : " + req.query.name)
    } else {
        res.send("Il n'y a pas d'école"); // si aucun res.send le navigateur va etre en attente à l'infini
    }
});

// -> http://localhost:$PORT/school/XXXX
// req.params --> permet de recuperer des variables directement dans l'url
app.get('/school/:name', function(req: Request, res: Response) {
    const school = req.params['name'];
    res.send("Super voici l'ecole: " + school);
});

// process.env.$VAR permet de recuperer la valeur de la variable d'env en question
app.listen(process.env.PORT, function() {
    console.log(`listening on port ${process.env.PORT}...`);
});