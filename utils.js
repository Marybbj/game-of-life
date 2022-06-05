function genMatrix(x, y) {
    const matrix = [];
    for (let i = 0; i < x; i++) {
        matrix[i] = [];
        for (let j = 0; j < y; j++) {
            matrix[i][j] = Math.floor(Math.random() * 3);
        }
    }
    return matrix
}
