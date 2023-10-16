const test = require('node:test');
const assert = require('node:assert');

const Slot = require('../src/repositories/slot_repository');

test.describe('Warehouse Rack Unit Test', () => {
    test.it('should create rack', () => {
        const slot = new Slot();
        const result = slot.setSlot(10);

        assert.strictEqual(result, 'Created a warehouse with 10 slots')
    })
})