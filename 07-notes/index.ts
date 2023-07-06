import {config} from "dotenv";
config();

import * as express from 'express';
import {MarkService} from "./mark.service";

const app = express();

type K = "bonjour" | "test";

interface MetadataBonjour {
    name: string;
}

interface MetadataTest {
    test: string;
}

interface S {
    type: K
    metadata: ("bonjour" ? MetadataBonjour : MetadataTest)
}

const s: S = {
    type: "bonjour",
    metadata: {

    }
}

// un middleware permet de faire un ou plusieurs traitement AVANT ou APRES votre fonction de la route
app.post('/marks', express.json(), async function(req, res) {
    if(typeof req.body['class'] !== 'string'
        || typeof req.body['name'] !== 'string'
        || typeof req.body['mark'] !== 'number') {
        res.status(400).end(); // permet changer le status de la réponse et fermer la connexion
        return;
    }
    const className: string = req.body['class'];
    const studentName: string = req.body['name'];
    const studentMark: number = req.body['mark'];
    if(studentMark < 0 || studentMark > 20 || isNaN(studentMark)) {
        res.status(400).end(); // permet changer le status de la réponse et fermer la connexion
        return;
    }
    let service = new MarkService(className);
    await service.store(studentName, studentMark);
    res.status(204).end(); // NO_CONTENT
});

app.get('/marks', async function(req, res) {
    res.send("ok");
});

app.get('/marks/avg', async function(req, res) {
    if(typeof req.query['class'] !== 'string') {
        res.status(400).end(); // permet changer le status de la réponse et fermer la connexion
        return;
    }
    const className: string = req.query['class'];
    let service = new MarkService(className);
    const avg = await service.avg();
    res.send(`${avg}`);
});

app.listen(process.env.PORT, function() {
   console.log(`Listening on port ${process.env.PORT}...`);
});




