import 'reflect-metadata';
import { NODE_ENV } from './config/env';
import { Strategy } from './modules/factoryDemo/strategy';
console.log(`Node Env : ${NODE_ENV}`);
console.log(`Directory : ${__dirname}`);

const strategyInstance=Strategy.getInstance();
let totalAmount=strategyInstance.calculate(1000);
console.log(`Total Amount : ${totalAmount}`)

totalAmount=strategyInstance.calculate(50);
console.log(`Total Amount : ${totalAmount}`)

totalAmount=strategyInstance.calculate(5000);
console.log(`Total Amount : ${totalAmount}`)