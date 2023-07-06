import {Weapon} from "./weapon.interface";

export class Gun implements Weapon {
    readonly height: number;
    readonly name: string;
    readonly price: number;
    readonly weight: number;
    readonly width: number;
    readonly bullets: number;

    constructor(height: number, name: string, price: number, weight: number, width: number, bullets: number) {
        this.height = height;
        this.name = name;
        this.price = price;
        this.weight = weight;
        this.width = width;
        this.bullets = bullets;
    }

    /**
     * Correspond à une multiplication entre le nombre de balles et le poids,
     * le tout divisé par le poids modulo le nombre de balles
     */
    bonus(): number {
        if(this.bullets === 0) {
            return 0;
        }
        const val =this.weight % this.bullets;
        if(val === 0) {
            return 0;
        }
        return this.bullets * this.weight / val;
    }

    /**
     * Est le rapport entre le poids et la multiplication entre la hauteur
     * et la largeur. Le bonus s’ajoute à cette valeur
     */
    damage(): number {
        const size = this.height * this.width;
        if(size === 0) {
            return this.bonus();
        }
        return this.weight / size + this.bonus();
    }

    /**
     * Durée de vie de l’arme calculée par
     * le prix divisé par le poids et le tout multiplié par les dégâts
     */
    duration(): number {
        if(this.weight === 0) {
            return 0;
        }
        return this.price / this.weight * this.damage();
    }

    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}