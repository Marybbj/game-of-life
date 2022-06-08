
class Bomb {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.directions = [];
    }

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
        let found = [];
        for (let i = 0; i < this.directions.length; i++) {
            const [x, y] = this.directions[i];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    bombLine() {
        this.getNewCoordinates();
        const GrassCells = random(this.chooseCell(GRASS_INDEX));
        const GrassEaterCells = random(this.chooseCell(GRASS_EATER_INDEX));
        const GrassEaterPredatorCells = random(this.chooseCell(GRASS_EATER_PREDATOR_INDEX));
        const BlackHoleCells = random(this.chooseCell(BLACK_HOLE_INDEX));

        if (GrassCells) {
            const [x, y] = GrassCells;
            matrix[this.y][this.x] = EMPTY_INDEX;
            matrix[y][x] = EMPTY_INDEX;
            for (let i in GRASS_ARR) {
                if (x === GRASS_ARR[i].x && y === GRASS_ARR[i].y) {
                    GRASS_ARR.splice(i, 1);
                    break;
                }
            }
        } else if (GrassEaterCells) {
            const [x, y] = GrassEaterCells;
            matrix[this.y][this.x] = EMPTY_INDEX;
            matrix[y][x] = EMPTY_INDEX;
            for (let i in GRASS_EATER_ARR) {
                if (x === GRASS_EATER_ARR[i].x && y === GRASS_EATER_ARR[i].y) {
                    GRASS_EATER_ARR.splice(i, 1);
                    break;
                }
            }
        } else if (GrassEaterPredatorCells) {
            const [x, y] = GrassEaterPredatorCells;
            matrix[this.y][this.x] = EMPTY_INDEX;
            matrix[y][x] = EMPTY_INDEX;
            for (let i in GRASS_EATER_PREDATOR_ARR) {
                if (x === GRASS_EATER_PREDATOR_ARR[i].x && y === GRASS_EATER_PREDATOR_ARR[i].y) {
                    GRASS_EATER_PREDATOR_ARR.splice(i, 1);
                    break;
                }
            }
        } else if (BlackHoleCells) {
            const [x, y] = BlackHoleCells;
            matrix[this.y][this.x] = EMPTY_INDEX;
            matrix[y][x] = EMPTY_INDEX;
            for (let i in BLACK_HOLE_ARR) {
                if (x === BLACK_HOLE_ARR[i].x && y === BLACK_HOLE_ARR[i].y) {
                    BLACK_HOLE_ARR.splice(i, 1);
                    break;
                }
            }
        }

        for (let i = 0; i < matrix.length; i++) {
            var a = Math.floor(matrix[i].length / 2)
            var b = Math.floor(matrix.length / 2)
            matrix[b][a] = 4
            this.x = a;
            this.y = b;
        }
    }
}