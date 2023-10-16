#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '$ '
})

const Slot = require('./repositories/slot_repository');
const StockKeepingUnit = require('./repositories/sku_repository');
const Notification = require('./repositories/notification_repository');

const Command = require('./enums/command_enum');
const Type = require('./enums/type_enum');

const slot = new Slot();
const notification = new Notification();
const stockKeepingUnit = new StockKeepingUnit();

if (process.argv[2] == 'file_input.txt' ) {
    const readFile = require('readline').createInterface({
        input: fs.createReadStream(path.join(__dirname, '../', process.argv[2]))
    })
    
    readFile.on('line', input => {
        runCommand(input);
    })
}

readline.prompt()

readline.on('line', input => {
    runCommand(input);
})

function runCommand(input){
    const command = (input.split(' ')[0]).toLowerCase();

    switch(command) {
        case Command.CREATE_WAREHOUSE_RACK:
            determineMaximumSlot(input);

            readline.prompt()
            break;
        case Command.RACK:
            addSKUNumber(input);    

            readline.prompt()
            break;
        case Command.RACK_OUT:
            removeSKUNumberBySlotNumber(input);

            readline.prompt();
            break;
        case Command.STATUS:
            printNotificationStatus();

            readline.prompt();
            break;
        case Command.SLOT_NUMBER_FOR_SKU_NUMBER:
            findSlotNumberBySKUNumber(input);    

            readline.prompt();
            break;
        case Command.SKU_NUMBERS_FOR_PRODUCT_WITH_EXP_DATE:
            findSKUNumbersForProductByExpiredDate(input)
            
            readline.prompt();
            break;
        case Command.SLOT_NUMBERS_FOR_PRODUCT_WITH_EXP_DATE:
            findSlotNumbersForProductByExpiredDate(input)
            
            readline.prompt();
            break;
        case Command.EXIT:
            readline.close();
        default:
            readline.close()
    }
} 

function determineMaximumSlot(input) {
    const quantity = input.split(' ')[1];

    if (!quantity) {
        console.log('Error: Invalid command!');
        return;
    }

    slot.setSlot(parseInt(quantity));

    notification.setMaximumCapacity(slot.slot);
}

function addSKUNumber(input) {
    const skuNumber = input.split(' ')[1];
    const expiredDate = input.split(' ')[2];

    if (notification.data.length == notification.maxCapacity) {
        console.log('Sorry, rack is full')
        
        return;
    }


    const data = stockKeepingUnit.setStockKeepingUnit(notification.currentIndex, skuNumber, expiredDate);
    
    notification.setNotification(data);
}

function removeSKUNumberBySlotNumber(input) {
    const index = input.split(' ')[1];

    if (index > notification.maxCapacity || index <= 0) {
        console.log('Error: Invalid command! Index out of range!');
        
        return;
    }

    notification.removeNotification(index);
}

function printNotificationStatus() {
    notification.printNotification();
}

function findSlotNumberBySKUNumber(input) {
    const skuNumber = input.split(' ')[1];

    notification.findSlotNumberBySKUNumber(skuNumber);
}

function findSKUNumbersForProductByExpiredDate(input) {
    determineFindFilter(input, Type.SKU_NUMBER);
}

function findSlotNumbersForProductByExpiredDate(input) {
    determineFindFilter(input, Type.SLOT_NUMBER);
}

function determineFindFilter(input, type) {
    const date = input.split(' ')[1];

    notification.findNotificationByFilter(date, type);
}
