import { Employee } from './Employee'

export class Seller extends Employee {
    private salesQuantity: number = 0
    static SELLING_COMMISSION: number = 5;

    public getSalesQuantity(): number {
        return this.salesQuantity;
    }

    public setSalesQuantity(value: number): number {
        return this.salesQuantity += value;
    }

    public calculateTotalSalary(): number {
        return (
            this.baseSalary + Employee.BENEFITS_VALUE + Seller.SELLING_COMMISSION * this.salesQuantity
        )
    }
}