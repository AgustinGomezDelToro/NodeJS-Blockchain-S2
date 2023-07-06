import {Weapon} from "./weapon.interface";

export class Sword implements Weapon {
    readonly height: number;
    readonly name: string;
    readonly price: number;
    readonly weight: number;
    readonly width: number;
    readonly year: number;
    /*
      Le fait d'utiliser le mot clé get permet lors de l'appel de la fonction
      de ne pas mettre les parentheses
      const s = new Sword(..)
      const leg = s.legendary; // pas besoin des ()
     */
    get legendary(): boolean {
        return false;
    }

    constructor(name: string, price: number, weight: number, height: number, width: number, year: number) {
        this.height = height;
        this.name = name;
        this.price = price;
        this.weight = weight;
        this.width = width;
        this.year = year;
    }

    /**
     * Uniquement si l’arme est légendaire, le poids divisé par l’Année de l’épée
     */
    bonus(): number {
        if(this.year === 0 || !this.legendary) {
            return 0;
        }
        return this.weight / this.year;
    }

    /**
     * Est la multiplication entre le poids la hauteur et la largeur.
     * On ajoute le bonus sur cette valeur. Le tout est ensuite divisé par l’année.
     * Si l’arme n’est pas légendaire ou que la durée de vie est inférieure à 10 ans
     * alors une réduction de 10% doit être appliquée
     */
    damage(): number {
        if(this.year === 0) {
            return 0;
        }
        let res = this.weight * this.height * this.width;
        res += this.bonus();
        if(!this.legendary || this.duration() < 10) {
            res *= 0.9;
        }
        return res;
    }

    /**
     * Durée de vie de l’épée calculée par le poids multiplié par l’année
     * le tout divisé par le prix.
     */
    duration(): number {
        if(this.price === 0) {
            return 0;
        }
        return this.weight * this.year / this.price;
    }

    toString() {
        return JSON.stringify(this, null, 2);
    }

}