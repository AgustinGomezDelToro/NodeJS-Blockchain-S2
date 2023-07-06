import {config} from "dotenv";
config({
    path: "prod.env"
});

import * as express from 'express';
import {CocktailController, ExpressController} from "./controllers";
import {UserController} from "./controllers/user.controller";
import {connect} from 'mongoose';

async function launchAPI(): Promise<void> {
    await connect(process.env.MONGO_URI as string, {
        auth: {
            username: process.env.MONGO_USER,
            password: process.env.MONGO_PASSWORD,
        },
        authSource: "admin",
    });

    const app = express();
    const controllers: ExpressController[] = [
        new CocktailController(),
        new UserController()
    ];
    // Permet d'enregistrer dans express toutes les routes des controllers du
    // tableau ci-dessus
    for(let controller of controllers) {
        const router = controller.buildRoutes();
        app.use(controller.path, router);
    }
    app.listen(process.env.PORT, function() {
        console.log(`API Listening on port ${process.env.PORT}...`);
    });
}

launchAPI().catch(console.error);