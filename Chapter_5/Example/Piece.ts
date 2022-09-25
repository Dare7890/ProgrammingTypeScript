import { Position } from "./Position";
import { Color, Fiel, Rank } from "./Types/Types";

// Шахматная фигура
abstract class Piece{
    protected position : Position;

    constructor(
        private readonly color: Color,
        public fiel: Fiel,
        public rank: Rank
    ) {
        this.position = new Position(fiel, rank);
    }

    public moveTo(position: Position) {
        this.position = position;
    }

    abstract canMoveTo(position: Position): boolean;
};

export { Piece }

