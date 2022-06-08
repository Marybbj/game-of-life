function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function setRandomValueInMatrix(matrix, index) {
    const x = getRandomInt(matrix.length)
    const y = getRandomInt(matrix.length)

    if (matrix[y][x] === EMPTY_INDEX) {
        matrix[y][x] = index
    }
    else {
        setRandomValueInMatrix(matrix, index)
    }
}

function setMultipleRandomValue(matrix, count, index) {
    for (let i = 0; i < count; i++) {
        setRandomValueInMatrix(matrix, index)
    }
}

function setFixedValue(matrix, index) {
    for (let i = 0; i < matrix.length; i++) {
        const x = matrix[i].length - 1;
        const y = matrix.length - 1;
        matrix[0][0] = index
        matrix[0][x] = index
        matrix[y][0] = index
        matrix[y][x] = index
    }
}
function setCentreddValue(matrix, index) {
    for (let i = 0; i < matrix.length; i++) {
        var x = Math.floor(matrix[i].length / 2)
        var y = Math.floor(matrix.length / 2)
        matrix[y][x] = index
    }
}

function genMatrix(x, y) {
    const matrix = [];
    for (let i = 0; i < x; i++) {
        matrix[i] = []
        for (let j = 0; j < y; j++) {
            matrix[i][j] = EMPTY_INDEX
        }
    }
    setMultipleRandomValue(matrix, GRASS_COUNT, GRASS_INDEX)
    setMultipleRandomValue(matrix, GRASS_EATER_COUNT, GRASS_EATER_INDEX)
    setMultipleRandomValue(matrix, GRASS_EATER_PREDATOR_COUNT, GRASS_EATER_PREDATOR_INDEX)
    setCentreddValue(matrix, BOMB_INDEX)
    setFixedValue(matrix, BLACK_HOLE_INDEX)

    return matrix

}
