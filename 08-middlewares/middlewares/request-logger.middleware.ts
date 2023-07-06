import {RequestHandler} from "express";

// Un middleware est une fonction qui permet en général de verifier les informations de la requete
// ou bien de faire un traitment en amont de votre route
// Le middleware est fonction a 3 parametres
// --> req , res, next

export function log(): RequestHandler {
    return function(req, res, next) {
        console.log(`${req.method} ${req.path}`);
        // TRAITEMENT ANNEXE...
        next(); // permet de passer soit au middleware suivant ou la route
    }
}