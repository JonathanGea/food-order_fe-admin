import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

interface foods {
  name: string;
  code: string;
}

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [MessageService],
})
export class AddProductComponent {
  value: string | undefined;
  checked: boolean = true;
  foods: foods[] | undefined;
  selectedfoods: foods | undefined;

  ngOnInit() {
    this.foods = [
      { name: 'Pizza', code: 'PZ' },
      { name: 'Sushi', code: 'SH' },
      { name: 'Burger', code: 'BG' },
      { name: 'Baklava', code: 'BK' },
      { name: 'Croissant', code: 'CR' },
    ];
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }



}
