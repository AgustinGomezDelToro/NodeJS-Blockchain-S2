import {Weapon} from "./weapon.interface";

export class Player {
    readonly name: string;
    health: number;
    weapon: Weapon;
    readonly hitChance: number;

    constructor(name: string, weapon: Weapon) {
        this.name = name;
        this.hitChance = 50 + Math.random() * 20;
        this.health = 25_000
        this.weapon = weapon;
    }

    protect(dmg: number): void {
        this.health -= dmg * 0.45;
        if(this.health < 0) {
            this.health = 0;
        }
    }

    attack(target: Player): void {
        const roll = Math.random() * 100;
        if(roll < this.hitChance) {
            target.protect(this.weapon.damage() * 1.13);
        }
    }

    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}