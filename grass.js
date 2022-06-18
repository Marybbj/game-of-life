class Grass extends LivingCreature {

    mul() {
        this.multiply++;
        const newEmptyCells = random(this.chooseCell(EMPTY_INDEX))

        if (newEmptyCells && this.multiply >= 8) {
            const [x, y] = newEmptyCells
            matrix[y][x] = GRASS_INDEX
            const gr = new Grass(x, y, GRASS_INDEX)
            GRASS_ARR.push(gr)
            this.multiply = 0
        }
    }
}