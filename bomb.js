
class Bomb extends LivingCreature {

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    FindAndRemove(cells, arr) {
        const [x, y] = cells;
        matrix[y][x] = EMPTY_INDEX;
        for (let i in arr) {
            if (x === arr[i].x && y === arr[i].y) {
                arr.splice(i, 1);
                break;
            }
        }
    }

    bombLine() {
        const GrassCells = random(this.chooseCell(GRASS_INDEX));
        const GrassEaterCells = random(this.chooseCell(GRASS_EATER_INDEX));
        const GrassEaterPredatorCells = random(this.chooseCell(GRASS_EATER_PREDATOR_INDEX));
        const BlackHoleCells = random(this.chooseCell(BLACK_HOLE_INDEX));

        if (GrassCells) {
            this.FindAndRemove(GrassCells, GRASS_ARR)
        }
        if (GrassEaterCells) {
            this.FindAndRemove(GrassEaterCells, GRASS_EATER_ARR)
        }
        if (GrassEaterPredatorCells) {
            this.FindAndRemove(GrassEaterPredatorCells, GRASS_EATER_PREDATOR_ARR)
        }
        if (BlackHoleCells) {
            this.FindAndRemove(BlackHoleCells, BLACK_HOLE_ARR)
        }
    }
}