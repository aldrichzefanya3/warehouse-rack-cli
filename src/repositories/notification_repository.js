const Type = require('../enums/type_enum');

class Notification {
    constructor() {
        this.maxCapacity = 0;
        this.data = [];
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

    findSlotNumberBySKUNumber(skuNumber) {
        let status = false;

        for (const data  of this.data) {
            const tempData = data.split(' ');

            let search = tempData.indexOf(skuNumber);

            if (search !== -1) {
                status = true;
                console.log(tempData[0]);

                break;
            }
        }

        if (status !== true) {
            console.log('Not Found');
        }

        return;
    }

    findNotificationByFilter(filter, type) {
        let status = false;
        let slotNumbers = [];
        let skuNumbers = [];

        for (const data  of this.data) {
            const tempData = data.split(' ');

            let search = tempData.indexOf(filter);

            if (search !== -1) {
                status = true;

                if (type !== Type.SLOT_NUMBER){
                    skuNumbers.push(tempData[1]);
                } else {
                    slotNumbers.push(tempData[0]);
                }
            }
        }
        
        if (status !== true) {
            console.log('Not Found');
        } else {
            if (type !== Type.SLOT_NUMBER) {
                console.log(skuNumbers.toString())
            } else {
                console.log(slotNumbers.toString())
            }
        }

        return;
    }
}

module.exports = Notification;