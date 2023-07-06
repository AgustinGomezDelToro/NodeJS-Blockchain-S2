import {Hippo} from "./hippo.class";

const b = new Hippo("Benoit", 10, 1500);
const hippo2 = new Hippo("Flavien", 10, 1000);

const winner = b.fight(hippo2);
console.log("winner : " + winner);

Hippo.lifeCycle(b);

console.log("" + b);