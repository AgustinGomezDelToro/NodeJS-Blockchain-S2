import {Room} from "./room.class";
import {Address} from "../interfaces";

// le mot clé export permet de sortir un element du fichier et le
// rendre disponible dans votre projet
export class Museum {
    name: string;
    rooms: Room[];
    address: Address;

    constructor(name: string, rooms: Room[], address: Address) {
        this.name = name;
        this.rooms = rooms;
        this.address = address;
    }

    toString(): string {
        // -> ALTGR + 7 | £
        let res = `${this.name}: \n`;
        for(let i = 0; i < this.rooms.length; i += 1) {
            res += `- ${this.rooms[i]}\n`;
        }
        return res;
    }
}