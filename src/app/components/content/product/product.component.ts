import { Component, ViewChild  } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../service/product.service';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @ViewChild(AddProductComponent) addProductComponent!: AddProductComponent;

  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });
  }
  getSeverity(status: string): 'success' | 'warning' | 'danger' | undefined {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return undefined; // Mengembalikan undefined jika tidak ada kondisi yang terpenuhi
    }
  }

  showAddProductDialog() {
    this.addProductComponent.showDialog();
  }
}
