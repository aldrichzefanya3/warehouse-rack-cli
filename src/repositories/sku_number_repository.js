class StockKeepingUnit {
    constructor() {
        this.noOrder = 0;
        this.stockKeepingUnitNumber = null;
        this.expiredDate = null;
    }

    setStockKeepingUnitNumberAndExpiredDate(noOrder, stockKeepingUnitNumber, expiredDate) {
        this.noOrder = noOrder;
        this.stockKeepingUnitNumber = stockKeepingUnitNumber;
        this.expiredDate = expiredDate;

        console.log(`Allocated slot number: ${this.noOrder}`);

        return `${this.noOrder} ${this.stockKeepingUnitNumber} ${this.expiredDate}`;
    }
}

module.exports = StockKeepingUnit;