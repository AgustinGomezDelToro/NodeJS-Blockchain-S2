import {Sword} from "./sword.class";

export class Excalibur extends Sword {

    private static _instance?: Excalibur

    // design pattern Singleton
    // 1 seule instance d'une classe.
    public static get instance(): Excalibur {
        if(Excalibur._instance === undefined) {
            Excalibur._instance = new Excalibur();
        }
        return Excalibur._instance;
    }

    private constructor() {
        super('Excalibur', 100000000, 200, 170, 15, 1300);
    }

    get legendary(): boolean {
        return true;
    }
}