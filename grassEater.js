class GrassEater {
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

    mul() {
        //p5 random returs undefined from empty array
        const newEmptyCells = random(this.chooseCell(EMPTY_INDEX));
        if (newEmptyCells && this.energy >= 8) {
            const [x, y] = newEmptyCells;
            matrix[y][x] = GRASS_EATER_INDEX;
            const gr = new Grass(x, y, GRASS_EATER_INDEX);
            GRASS_EATER_ARR.push(gr);
            this.energy = 0;
        }
    }

    move() {
        this.getNewCoordinates();
        this.energy++
        for (let i = 0; i < this.directions.length; i++) {
            const [x, y] = this.directions[i];
            const empty = this.chooseCell(EMPTY_INDEX)
            for (let j = 0; j < empty.length; j++) {
                if (empty[j][0] == x && empty[j][1] == y && this.energy >= 8) {
                    matrix[y][x] = GRASS_EATER_INDEX;
                }

            }
        }
    }

    eat() {
        this.getNewCoordinates();
        this.energy++
        for (let i = 0; i < this.directions.length; i++) {
            const [x, y] = this.directions[i];
            for (let j = 0; j < GRASS_ARR.length; j++) {
                if (GRASS_ARR[j].x == x && GRASS_ARR[j].y == y ) {
                    this.x = x;
                    this.y = y
                    this.energy = 0
                }
            }
        }



        // for (var i in grassArr) {
        //     if (newX == grassArr[i].x && newY == grassArr[i].y) {
        //         grassArr.splice(i, 1);
        //         break;
        //     }
        // }
    }
}