const matrix = genMatrix(5, 7);
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

        }
    }
}

function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] === GRASS_INDEX) {
                fill("green");
            } else if (matrix[y][x] === EMPTY_INDEX) {
                fill("#acacac");
            } else if (matrix[y][x] === GRASS_EATER_INDEX) {
                fill('yellow');
            }
            rect(x * SIDE, y * SIDE, SIDE, SIDE);
        }
    }

    for (let i in GRASS_ARR) {
        GRASS_ARR[i].mul();
    }

    for (let i in GRASS_EATER_ARR) {
        GRASS_EATER_ARR[i].mul();
        GRASS_EATER_ARR[i].move()
    }
}
