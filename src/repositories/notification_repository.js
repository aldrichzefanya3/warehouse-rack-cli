class Notification {
    constructor() {
        this.maxCapacity = 0;
        this.data = [];
        this.index = 0;
        this.currentIndex = 1;
    }

    setMaximumCapacity(slot){
        this.maxCapacity = slot;

        return this.maxCapacity;
    }

    setData(skuNumber){
        this.data.push(skuNumber);

        this.currentIndex++;
    
        return;
    }

    getData(){
        return this.data;
    }

    removeData(index){
        this.data[index] = null;

        return this.data;
    }
}

module.exports = Notification;