import { Piece } from '../Piece';
import { Position } from '../Position';

class King extends Piece {
    public canMoveTo(position: Position) {
        const distance = this.position.distanceFrom(position); 
        return distance.rank < 2 && distance.file < 2;
    }
}

class Queen extends Piece {

};
class Bishop extends Piece {

}; 
class Knight extends Piece {

};
class Rook extends Piece {

};
class Pawn extends Piece {

};

export { King, Queen, Bishop, Knight, Rook, Pawn };