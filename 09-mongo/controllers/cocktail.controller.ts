import {ExpressController} from "./controller.interface";
import {Request, Response} from "express";
import * as express from "express";

export class CocktailController implements ExpressController {

    readonly path: string;

    constructor() {
        this.path = '/cocktails';
    }

    async getAll(req: Request, res: Response): Promise<void> {
        res.send("All cocktails --> " + this.path);
    }

    buildRoutes(): express.Router {
        const router = express.Router();
        // enregistrer les routes disponible pour vos cocktails
        // -> /cocktails
        // .bind(this) permet de conserver le this lors de l'appel par express de la fonction
        // this restera le CocktailController lorsque express va executer le methode
        router.get('/', this.getAll.bind(this));
        return router;
    }
}