class GrassEaterPredator extends LivingCreature {

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

    move() {
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