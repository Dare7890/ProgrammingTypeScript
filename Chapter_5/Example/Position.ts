import { Fiel, Rank } from "./Types/Types";

class Position {
    constructor(
        private fiel: Fiel,
        private rank: Rank
    ){ };

    public distanceFrom(position: Position) { 
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.fiel.charCodeAt(0) - this.fiel.charCodeAt(0))
        };
    }
}

export { Position };