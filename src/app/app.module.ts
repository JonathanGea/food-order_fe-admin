import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopbarComponent } from './components/topbar/topbar.component';
import { TagModule } from 'primeng/tag';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ProductComponent } from './components/content/product/product.component';
import { AddProductComponent } from './components/content/add-product/add-product.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { CustomerComponent } from './components/content/customer/customer.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ScrollerModule } from 'primeng/scroller';
import { MultiSelectModule } from "primeng/multiselect"; 


const routes: Routes = [
  { path: 'login', component: NotFoundComponent },
  { path: '', component: DashboardComponent, 
    children: [
      { path: 'product', component: ProductComponent },
      { path: 'customer', component: CustomerComponent },
      { path: '', redirectTo: 'product', pathMatch: 'full' } // Redirect ke product jika tidak ada path
    ]
  },
  { path: '**', component: ProductComponent } // Menangani semua rute yang tidak ditemukan
];



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    ProductComponent,
    AddProductComponent,
    CustomerComponent,
    NotFoundComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule,
    DialogModule,
    ButtonModule,
    SidebarModule,
    BrowserAnimationsModule,
    TagModule,
    PanelModule,
    CardModule,
    ToolbarModule,
    AutoCompleteModule,
    InputTextModule,
    MenuModule,
    ToastModule,
    ScrollPanelModule,
    TableModule,
    FloatLabelModule,
    FormsModule,
    DropdownModule,
    InputSwitchModule,
    FileUploadModule,
    InputTextareaModule,
    InputGroupAddonModule,
    InputGroupModule,
    ScrollerModule,
    MultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
