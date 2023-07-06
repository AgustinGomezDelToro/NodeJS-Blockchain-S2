export interface Weapon {
    readonly name: string;
    readonly height: number;
    readonly width: number;
    readonly weight: number;
    readonly price: number;

    duration(): number;
    damage(): number;
    bonus(): number;
}