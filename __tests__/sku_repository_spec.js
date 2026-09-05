const { describe, test, expect } = require('@jest/globals');
const { spyOn } = require('jest-mock');

const StockKeepingUnit = require('../src/repositories/sku_repository');

describe('SKU Number Repository Unit Test', () => {
    test('should allocated SKU number', () => {
        const log = spyOn(console,'log').mockImplementation(() => {})

        const slot = new StockKeepingUnit();
        const result = slot.setStockKeepingUnit(1, 'ZG11AQA', '2022-01-01')

        expect(result).toMatch(new RegExp('1 ZG11AQA 2022-01-01'));
        expect(log).toBeCalledWith('Allocated slot number: 1');  
        
        log.mockReset()
    })
})
