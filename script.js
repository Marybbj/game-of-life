// const matrix = [
//     [0, 0, 1, 0, 0],
//     [1, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0],
//     [0, 0, 1, 0, 0],
//     [1, 1, 0, 0, 0],
//     [1, 1, 0, 0, 0],
//     [1, 1, 0, 0, 0]
// ];

const matrix = [];
let x = 12
let y = 12
for (let i = 0; i < x; i++) {
    matrix[i] = [];
    for (let j = 0; j < y; j++) {
        matrix[i][j] = Math.floor(Math.random() * 2)
    }
}

const side = 50;
const empty_index = 0;
const grass_index = 1;

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}

function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == grass_index) {
                fill("green");
            }
            else if (matrix[y][x] == empty_index) {
                fill("#acacac");
            }
            rect(x * side, y * side, side, side);

            /*fill("black")
            text(x+" "+y, x*side+side/2,y*side+side/2)*/
        }
    }
}