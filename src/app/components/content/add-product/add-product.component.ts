import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/service/product.service';
import { CategoryService } from 'src/app/service/category.service';

interface Category {
  name: string;
  code: string;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [MessageService],
})
export class AddProductComponent {
  productForm: FormGroup;
  visible: boolean = false;
  productName: string | undefined;
  selectedCategory: Category | undefined;
  categories?: Category[];

  @Output() productAdded = new EventEmitter<void>();

  ngOnInit() {
    console.log('ngOnInit :>> ');
    this.getCategory();
  }

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      image: [''],
      description: [''],
      isActivated: [true],
    });
  }

  showDialog() {
    this.visible = true;
  }

  onImageUpload(event: any) {
    const file = event.files[0];
    this.productForm.patchValue({ image: file });
  }

  saveProduct() {
    console.log("save product")
    console.log('this.productForm :>> ', this.productForm);

    if (this.productForm.valid) {
      const product: Product = {
        name: this.productForm.get('name')?.value,
        price: this.productForm.get('price')?.value,
        description: this.productForm.get('description')?.value,
        isActivated: this.productForm.get('isActivated')?.value,
        categoryId: this.productForm.get('category')?.value?.id ,   
        category: this.productForm.get('category')?.value?.name    
      };

      console.log('Saving product:', product);
      this.messageService.add({
        severity: 'success',
        summary: 'Product Saved',
        detail: 'The product has been saved successfully.',
      });
      this.productService.AddProduct(product).subscribe(
        (savedProduct) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Product Saved',
            detail: 'The product has been saved successfully.',
          });
          this.productAdded.emit();
          this.visible = false;

        },
        (error) => {
          console.log('error :>> ', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error Saving Product',
            detail: 'There was an error saving the product.',
          });
          }
      );
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Form Invalid',
        detail: 'Please fill in all the required fields.',
      });
    }
  }

  getCategory() {
    console.log('halllo :>> ');
    this.categoryService.getCategories().subscribe(
      (response: any) => {
        console.log('response getCategories :>> ', response);
        if (response.isSuccess) {
          this.categories = response.data.map((category: any) => ({
            ...category,
          }));
        }
      },
      (error : any) => {
        console.error('Error fetching products:', error);
        alert("Error fetching products")
      }
    );
  }
}
