import { LoanRequest } from './loan-request';
import { BookStore } from './book-store';
import { Loan } from './loan';

export class Store {
    public storeId: number;
    public name: string;
    public address: string;
    public program: string;
    public bookStores: BookStore[];
    public loanRequests: LoanRequest[];
    public loans: Loan[];
}