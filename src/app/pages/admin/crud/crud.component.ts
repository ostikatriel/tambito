import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/domains/product';
import { ProductService } from 'src/app/services/product.service';

import exportFromJSON from 'export-from-json';

@Component({
    selector: 'app-crud',
    templateUrl: './crud.component.html',
    styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

    productDialog: boolean;

    products: Product[];

    product: Product;

    selectedProducts: Product[];

    submitted: boolean;

    statuses: any[];

    constructor(
        private productService: ProductService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private router: Router,
    ) { }

    ngOnInit() {

        this.productService.getProducts().then(data => this.products = data);

        this.statuses = [
            { label: 'ENSTOCK', value: 'enstock' },
            { label: 'STOCKBAJO', value: 'stockbajo' },
            { label: 'AGOTADO', value: 'agotado' }
        ];
        
    }

    openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedProducts() {
        this.confirmationService.confirm({
            message: '¿Está seguro de que desea eliminar los productos seleccionados?',
            header: 'Confirmar',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.products = this.products.filter(val => !this.selectedProducts.includes(val));
                this.selectedProducts = null;
                this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Productos eliminados', life: 3000 });
            }
        });
    }

    editProduct(product: Product) {
        this.product = { ...product };
        this.productDialog = true;
    }

    deleteProduct(product: Product) {
        this.confirmationService.confirm({
            message: '¿Estás seguro de que quieres eliminar? ' + product.name + '?',
            header: 'Confirmar',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.products = this.products.filter(val => val.id !== product.id);
                this.product = {};
                this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Producto eliminado', life: 3000 });
            }
        });
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;

        if (this.product.name.trim() && this.product.inventoryStatus.trim()
            && this.product.price.toString().trim()) {
            if (this.product.id) {
                this.products[this.findIndexById(this.product.id)] = this.product;
                this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Producto Actualizado', life: 3000 });
            }
            else {
                this.product.id = this.createId();
                this.product.code = this.createId();
                this.product.rating = 5;
                this.product.image = 'product-placeholder.svg';
                this.products.push(this.product);
                this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Producto Creado', life: 3000 });
            }

            this.products = [...this.products];
            this.productDialog = false;
            this.product = {};
        }
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    export() {

        const data = {
            "data": this.products
        }

        const fileName = 'products';
        const exportType = 'json';

        const fields = '';//bug

        exportFromJSON({ data, fileName, exportType, fields })

    }

    ir() {
        this.router.navigateByUrl('').then(e => {
            if (e) {
                console.log("La navegación es exitosa!");
            } else {
                console.log("La navegación ha fallado!");
            }
        });
    }

}
