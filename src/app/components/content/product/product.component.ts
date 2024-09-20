import { Component, ViewChild } from '@angular/core';
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
    this.getProducts()
  }

  ngOnChanges() {
    console.log('ngOnChanges :>> ');
  }
  getProducts() {
    this.productService.getProducts().subscribe(
      (response: any) => {
        if (response.isSuccess) {
          this.products = response.data.map((product: any) => ({
            ...product,
            price: this.formatPriceToRupiah(product.price),
          }));
        }
      },
      (error : any) => {
        console.error('Error fetching products:', error);
        alert("Error fetching products")
      }
    );
  }

  showAddProductDialog() {
    this.addProductComponent.showDialog();
  }

  formatPriceToRupiah(price: number): string {
    const rupiah = (number: number) => {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(number);
    };

    return rupiah(price);
  }

 
}
