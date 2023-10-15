class Notification {
    constructor() {
        this.array = [];
        this.maxCapacity = 0;
        this.data = '';
    }

    setMaximumCapacity(slot){
        this.maxCapacity = slot;

        return this.maxCapacity;
    }
}

module.exports = Notification;