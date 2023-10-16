const { describe, test, expect } = require('@jest/globals');
const { spyOn } = require('jest-mock');

const Slot = require('../src/repositories/slot_repository');

describe('Slot Repository Unit Test', () => {
    test('should create rack', () => {
        const log = spyOn(console,'log').mockImplementation(() => {})

        const capacity = 10;

        const slot = new Slot();
        const result = slot.setSlot(capacity);

        expect(result).toBe(capacity);
        expect(log).toBeCalledWith(`Created a warehouse with ${capacity} slots`);       

        log.mockReset()
    })
})
