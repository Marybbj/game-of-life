class GrassEater extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
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
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    mul() {
        const newEmptyCells = random(this.chooseCell(EMPTY_INDEX));
        if (newEmptyCells && this.energy >= 8) {
            const [x, y] = newEmptyCells;
            matrix[y][x] = GRASS_EATER_INDEX;
            const gr = new GrassEater(x, y, GRASS_EATER_INDEX);
            GRASS_EATER_ARR.push(gr);
            this.energy = 0;
        }
    }

    move() {
        const newEmptyCells = random(this.chooseCell(EMPTY_INDEX));
        if (newEmptyCells) {
            const [x, y] = newEmptyCells;
            matrix[this.y][this.x] = EMPTY_INDEX;
            matrix[y][x] = GRASS_EATER_INDEX;

            this.x = x;
            this.y = y;
            --this.energy;
        }
    }

    eat() {
        const newGrassCells = random(this.chooseCell(GRASS_INDEX));
        if (newGrassCells) {
            const [x, y] = newGrassCells;
            matrix[this.y][this.x] = EMPTY_INDEX;
            matrix[y][x] = GRASS_EATER_INDEX;

            for (let i in GRASS_ARR) {
                if (x === GRASS_ARR[i].x && y === GRASS_ARR[i].y) {
                    GRASS_ARR.splice(i, 1);
                    break;
                }
            }
            this.x = x;
            this.y = y;
            this.energy += 2;
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = EMPTY_INDEX;
            for (let i in GRASS_EATER_INDEX) {
                if (x === GRASS_EATER_INDEX[i].x && y === GRASS_EATER_INDEX[i].y) {
                    GRASS_EATER_INDEX.splice(i, 1);
                    break;
                }
            }
        }
    }
}