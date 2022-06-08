const matrix = genMatrix(24, 20);
function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * SIDE, matrix.length * SIDE);
    background("#acacac");

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] === GRASS_INDEX) {
                const gr = new Grass(x, y, GRASS_INDEX);
                GRASS_ARR.push(gr);
            }
            if (matrix[y][x] === GRASS_EATER_INDEX) {
                const grassEt = new GrassEater(x, y, GRASS_EATER_INDEX)
                GRASS_EATER_ARR.push(grassEt)
            }
            if (matrix[y][x] === GRASS_EATER_PREDATOR_INDEX) {
                const grassEtD = new GrassEaterPredator(x, y, GRASS_EATER_PREDATOR_INDEX)
                GRASS_EATER_PREDATOR_ARR.push(grassEtD)
            }
            if (matrix[y][x] === BOMB_INDEX) {
                const bomb = new Bomb(x, y, BOMB_INDEX)
                BOMB_ARR.push(bomb)
            }
            if (matrix[y][x] === BLACK_HOLE_INDEX) {
                const hole = new BlackHole(x, y, BLACK_HOLE_INDEX)
                BLACK_HOLE_ARR.push(hole)
            }

        }
    }
}

function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] === EMPTY_INDEX) {
                fill("#acacac");
            } else if (matrix[y][x] === GRASS_INDEX) {
                fill("green");
            } else if (matrix[y][x] === GRASS_EATER_INDEX) {
                fill('yellow');
            } else if (matrix[y][x] === GRASS_EATER_PREDATOR_INDEX) {
                fill('orange')
            } else if (matrix[y][x] === BOMB_INDEX) {
                fill("red");
            } else if (matrix[y][x] === BLACK_HOLE_INDEX) {
                fill("black");
            }
            rect(x * SIDE, y * SIDE, SIDE, SIDE);
        }
    }

    for (let i in GRASS_ARR) {
        GRASS_ARR[i].mul();
    }

    for (let i in GRASS_EATER_ARR) {
        GRASS_EATER_ARR[i].mul();
        GRASS_EATER_ARR[i].eat()
        GRASS_EATER_ARR[i].move()
        GRASS_EATER_ARR[i].die()
    }

    for (let i in GRASS_EATER_PREDATOR_ARR) {
        GRASS_EATER_PREDATOR_ARR[i].eat();
        GRASS_EATER_PREDATOR_ARR[i].move();
    }

    for (let i in BOMB_ARR) {
        BOMB_ARR[i].bombLine();
    }

    for (let i in BLACK_HOLE_ARR) {
        BLACK_HOLE_ARR[i].hole();
    }
}
