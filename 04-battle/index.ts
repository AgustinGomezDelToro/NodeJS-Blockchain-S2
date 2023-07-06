import {Excalibur} from "./models/excalibur.class";
import {Player} from "./models/player.class";
import {Gun} from "./models/gun.class";
import {Sword} from "./models/sword.class";
import {Battle} from "./battle";

const e = Excalibur.instance

const g = new Gun(5, "Pistolet à O", 10, 1, 10, 5);
const k = new Sword("Couteau de cuisine", 20, 1, 12, 3, 2022);

const benoit = new Player("Benoit", g);
const djason = new Player("Djason", g);
const matthias = new Player("Matthias", g);

const arena: Player[] = [benoit, djason, matthias];
const battle = new Battle(arena);
const winner = battle.fight();
console.log("And the winner ISSSS " + winner);