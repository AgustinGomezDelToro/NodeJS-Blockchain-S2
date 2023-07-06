import {Player} from "./models/player.class";

export class Battle {

    players: Player[];

    constructor(players: Player[]) {
        this.players = players;
    }

    fight(): Player | undefined {
        while(this.countAlivePlayers() >= 2) {
            const playerIndex = this.randomPlayerIndex();
            const targetPlayerIndex = this.randomPlayerIndex(playerIndex);
            const player = this.players[playerIndex];
            const target = this.players[targetPlayerIndex];
            player.attack(target);
        }
        for(let i = 0; i < this.players.length; i++) {
            if(this.players[i].health > 0) {
                return this.players[i];
            }
        }
    }

    private randomPlayerIndex(currentPlayerIndex?: number): number {
        const index = Math.floor(Math.random() * this.players.length);
        if(index === currentPlayerIndex || this.players[index].health === 0) {
            return this.randomPlayerIndex(currentPlayerIndex);
        }
        return index;
    }

    private countAlivePlayers(): number {
        let count = 0;
        for(let i = 0; i < this.players.length; i++) {
            if(this.players[i].health > 0) {
                count ++;
            }
        }
        return count;
    }
}