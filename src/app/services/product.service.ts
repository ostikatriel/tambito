import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Product } from '../domains/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) { }

    getProducts() {

        return this.http.get<any>('assets/data/product/products.json')
            .toPromise()
            .then(res => <Product[]>res.data)
            .then(data => { return data; });
    }

    generateId() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    generatePrice() {
        return Math.floor(Math.random() * Math.floor(299) + 1);
    }

    generateQuantity() {
        return Math.floor(Math.random() * Math.floor(75) + 1);
    }

    generateRating() {
        return Math.floor(Math.random() * Math.floor(5) + 1);
    }

}
