function restartGame() {
    const restart = document.getElementById('restart')

    restart.addEventListener("click", function () {
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                matrix[y][x] = 0
            }
        }

        setMultipleRandomValue(matrix, GRASS_COUNT, GRASS_INDEX)
        setMultipleRandomValue(matrix, GRASS_EATER_COUNT, GRASS_EATER_INDEX)
        setMultipleRandomValue(matrix, GRASS_EATER_PREDATOR_COUNT, GRASS_EATER_PREDATOR_INDEX)
        setCentreddValue(matrix, BOMB_INDEX)
        setFixedValue(matrix, BLACK_HOLE_INDEX)
    })
}

restartGame()