export class Hippo {

    name: string;
    tusksSize: number;
    weight: number;

    static lifeCycle(h: Hippo): void {
        for(let d = 0; d < 21; d++) {
            for(let i = 0; i < 15; i++) {
                h.eat();
                h.eat();
                h.swim();
                h.swim();
                h.swim();
            }
        }
    }

    constructor(name: string, tusksSize: number, weight: number) {
        this.name = name;
        this.tusksSize = tusksSize;
        this.weight = weight;
    }

    swim(): void {
        if(this.weight > 500) {
            this.weight -= 0.3;
        }
    }

    eat(): void {
        this.weight += 1;
    }

    fight(other: Hippo): Hippo | undefined {
        if(this.tusksSize > other.tusksSize) {
            return this;
        }
        if(other.tusksSize > this.tusksSize) {
            return other;
        }
        if(this.weight * 0.8 > other.weight) {
            return this;
        }
        if(other.weight * 0.8 > this.weight) {
            return other;
        }
        return undefined;
    }

    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}