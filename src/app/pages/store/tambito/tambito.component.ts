import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/domains/product';
import { ProductService } from 'src/app/services/product.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-tambito',
  templateUrl: './tambito.component.html',
  styleUrls: ['./tambito.component.scss']
})
export class TambitoComponent implements OnInit {

  
  products: Product[];

  sortOptions: SelectItem[];

  sortKey: string;

  sortOrder: number;

  sortField: string;

  constructor(private productService: ProductService) { }

  ngOnInit() {
      this.productService.getProducts().then(data => this.products = data);
      /*
              this.products = [
                  {
                      "id": "1000",
                      "code": "f230fh0g3",
                      "name": "Leche Gloria",
                      "description": "Product Description",
                      "image": "leche1.jpg",
                      "price": 3.50,
                      "category": "Lacteos",
                      "quantity": 24,
                      "inventoryStatus": "ENSTOCK",
                      "rating": 5
                  }
              ]
      */

      this.sortOptions = [
          { label: 'Precio alto a bajo', value: '!price' },
          { label: 'Precio bajo a alto', value: 'price' }
      ];
  }

  onSortChange(event) {
      let value = event.value;

      if (value.indexOf('!') === 0) {
          this.sortOrder = -1;
          this.sortField = value.substring(1, value.length);
      }
      else {
          this.sortOrder = 1;
          this.sortField = value;
      }
  }

}
