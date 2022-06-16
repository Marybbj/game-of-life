function endGame() {
    const end = document.getElementById('end')
    end.addEventListener("click", function () {
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                matrix[y][x] = EMPTY_INDEX
                // matrix.splice(x, 1);
                // matrix.splice(y, 1);
            }
        }
        alert('bye bye')
    })
}

// endGame()