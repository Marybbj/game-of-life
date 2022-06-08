class BlackHole {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 0;
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

    hole() {
        this.getNewCoordinates();
        const GrassCells = random(this.chooseCell(GRASS_INDEX));
        const GrassEaterCells = random(this.chooseCell(GRASS_EATER_INDEX));
        if (GrassCells) {
            const [x, y] = GrassCells;
            matrix[this.y][this.x] = EMPTY_INDEX;
            matrix[y][x] = BLACK_HOLE_INDEX;

            for (let i in GRASS_ARR) {
                if (x === GRASS_ARR[i].x && y === GRASS_ARR[i].y) {
                    GRASS_ARR.splice(i, 1);
                    break;
                }
            }
            this.x = x;
            this.y = y;
        }

        if (GrassEaterCells) {
            const [x, y] = GrassEaterCells;
            matrix[this.y][this.x] = EMPTY_INDEX;
            matrix[y][x] = BLACK_HOLE_INDEX;

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

