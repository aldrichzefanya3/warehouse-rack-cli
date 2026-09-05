class Slot {
    constructor() {
        this.slot = 0;
    }

    setSlot(quantity) {
        this.slot = quantity;

        console.log(`Created a warehouse with ${this.slot} slots`);

        return this.slot;
    }
}

module.exports = Slot;