#! /usr/bin/env node

const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '$ '
})

const Slot = require('./repositories/slot_repository');
const StockKeepingUnit = require('./repositories/sku_number_repository');
const Notification = require('./repositories/notification_repository');

const Command = require('./enums/command.enum')

const slot = new Slot();
const notification = new Notification();
const stockKeepingUnit = new StockKeepingUnit();

readline.prompt()

readline.on('line', input => {

    const command = (input.split(' ')[0]).toLowerCase();
    
    switch(command) {
        case Command.CREATE_WAREHOUSE_RACK:
            determineMaximumSlot(input);

            readline.prompt()
            break;
        case Command.RACK:
            addStockIntoSlot(input);    

            readline.prompt()
            break;
        case Command.RACK_OUT:
            removeSlot(input);

            readline.prompt();
            break;
        case Command.STATUS:
            //
            break;
        default:
            readline.close()
    }
})

function determineMaximumSlot(input) {
    const quantity = input.split(' ')[1];

    if (!quantity) {
        console.log('Invalid command! ---- command create_warehouse_rack input_capacity');
        return;
    }

    slot.setSlot(parseInt(quantity));

    notification.setMaximumCapacity(slot.slot);
}

function addStockIntoSlot(input) {
    const skuNumber = input.split(' ')[1];
    const expiredDate = input.split(' ')[2];

    if (notification.data.length == notification.maxCapacity) {
        console.log('Sorry, rack is full')
        
        return;
    }

    const data = stockKeepingUnit.setStockKeepingUnitNumberAndExpiredDate(notification.currentIndex, skuNumber, expiredDate);
    
    notification.setData(data);

}

function removeSlot(index) {
    
}
