#! /usr/bin/env node

const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

const Slot = require('./repositories/slot_repository');
const StockKeepingUnit = require('./repositories/sku_number_repository');
const Notification = require('./repositories/notification_repository');

const Command = require('./enums/command.enum')

const slot = new Slot();
const notification = new Notification();
const stockKeepingUnit = new StockKeepingUnit();

readline.on('line', input => {

    const command = (input.split(' ')[0]).toLowerCase();
    
    switch(command) {
        case Command.CREATE_WAREHOUSE_RACK:
            determineMaximumSlot(input);

            break;
        case Command.RACK:
            addStockIntoSlot(input);    

            break;
        case Command.RACK_OUT:
            //
            break;
        case Command.STATUS:
            //
            break;
        default:
            readline.close()
    }
})

function determineMaximumSlot(input) {
    const quantity = parseInt(input.split(' ')[1]);

    slot.setSlot(quantity);

    notification.setMaximumCapacity(slot.slot);
}

