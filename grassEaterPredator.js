class GrassEaterPredator {
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

    move() {
        this.getNewCoordinates();
        const newEmptyCells = random(this.chooseCell(EMPTY_INDEX));
        if (newEmptyCells) {
            const [x, y] = newEmptyCells;
            matrix[this.y][this.x] = EMPTY_INDEX;
            matrix[y][x] = GRASS_EATER_PREDATOR_INDEX;
            this.x = x;
            this.y = y;

        }
    }

    eat() {
        this.getNewCoordinates();
        const newGrassEaterCells = random(this.chooseCell(GRASS_EATER_INDEX));
        if (newGrassEaterCells) {
            const [x, y] = newGrassEaterCells;
            matrix[this.y][this.x] = EMPTY_INDEX;
            matrix[y][x] = GRASS_EATER_PREDATOR_INDEX;

            for (let i in GRASS_EATER_ARR) {
                if (x === GRASS_EATER_ARR[i].x && y === GRASS_EATER_ARR[i].y) {
                    GRASS_EATER_ARR.splice(i, 1);
                    break;
                }
            }
            this.x = x;
            this.y = y;
        }
    }

}