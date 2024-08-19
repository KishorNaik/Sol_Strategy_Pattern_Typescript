// Define a common interface
export interface Discount {
    calculate(price: number): number;
}

// Implement the interface in different classes
export class TenPercentageDiscount implements Discount {
    public calculate(price: number): number {
        console.log(`10% discount applied`);
        return price - (price * 10 / 100);
    }
   
}

export class FifteenPercentageDiscount implements Discount {
    public calculate(price: number): number {
        console.log(`20% discount applied`);
        return price - (price * 15 / 100);
    }
}

export class TwentyPercentageDiscount implements Discount {
    public calculate(price: number): number {
        console.log(`30% discount applied`);
        return price - (price * 20 / 100);
    }
}