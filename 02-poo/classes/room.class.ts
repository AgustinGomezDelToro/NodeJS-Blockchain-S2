import {Art} from "../interfaces";

export class Room {
    name: string;
    arts:  Art[];

    constructor(name: string, arts: Art[]) {
        this.name = name; // le mot clé this permet d'acceder à l'instance courant
        this.arts = arts;
    }

    toString(): string {
        let res = `${this.name}: \n`;
        for(let i = 0; i < this.arts.length; i += 1) {
            const art = this.arts[i];
            res += `    + ${art.name} / ${art.author}\n`;
        }
        return res;
    }
}