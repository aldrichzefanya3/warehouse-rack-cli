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

    setNotification(skuNumber){
        this.data.push(skuNumber);

        this.currentIndex++;
    
        return;
    }

    getNotification(){
        return this.data;
    }

    removeNotification(index){
        this.data[index - 1] = null;
        
        console.log(`Slot number ${index} is free`)

        return;
    }

    printNotification(){
        console.log(`Slot No. SKU no. Exp Date`);
        this.data.map((d) => {
            console.log(d);
        })

        return;
    }

    findSlotNumberBySKUNumber() {
        
    }
}

module.exports = Notification;