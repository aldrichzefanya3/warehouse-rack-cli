const { describe, test, expect } = require('@jest/globals');
const { spyOn } = require('jest-mock');

const Notification = require('../src/repositories/notification_repository');

describe('Notification Repository Unit Test', () => {
    test('should setted maximum capacity of notification data', () => {
        const notification = new Notification();
        const result = notification.setMaximumCapacity();

        expect(result).toBe();
    })

    test('should setted notification', () => {
        const notification = new Notification();
        const result = notification.setNotification('1 ZG11AQA 2022-01-01');

        expect(result).toBe(2);
    })

    test('should remove notification', () => {
        const log = spyOn(console,'log').mockImplementation(() => {})

        const notification = new Notification();

        const index = 1;

        notification.removeNotification(index);

        expect(log).toBeCalledWith(`Slot number ${index} is free`);

        log.mockReset()
    })
})
