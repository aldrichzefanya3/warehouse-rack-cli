class StockKeepingUnit {
    constructor() {
        this.stockKeepingUnitNumber = null;
        this.expiredDate = null;
    }

    setStockKeepingUnitNumberAndExpiredDate(stockKeepingUnitNumber, expiredDate) {
        this.stockKeepingUnitNumber = stockKeepingUnitNumber;
        this.expiredDate = expiredDate;

        return this.stockKeepingUnitNumber;
    }
}

module.exports = StockKeepingUnit;