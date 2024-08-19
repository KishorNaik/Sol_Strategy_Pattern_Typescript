import { Predicate } from "../../shared/utils/delegates";
import { Discount, FifteenPercentageDiscount, TenPercentageDiscount } from "./strategyImplement";


type DiscountType = new () => Discount;
export class Strategy {
    private static instance: Strategy;
    private map:Map<Predicate<number>,DiscountType> = new Map();

    private constructor() {
        this.register();
    }

    public static getInstance(): Strategy {
        if (!Strategy.instance) {
            Strategy.instance = new Strategy();
        }
        return Strategy.instance;
    }

    private register(){
        this.map.set((price)=> price > 1 && price<=100,TenPercentageDiscount);
        this.map.set((price)=> price > 101 && price<=500,FifteenPercentageDiscount);
        this.map.set((price)=> price >= 501,FifteenPercentageDiscount);
    }

    public calculate(price:number):number{
        for (const [predicate, discountType] of this.map.entries()) {
            if (predicate(price)) {
                return new discountType().calculate(price);
            }
        }
        throw new Error(`Invalid price range: ${price}`);
    }
}