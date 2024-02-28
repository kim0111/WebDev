import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { Product } from '../products';
import { ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],

})
export class ProductListComponent implements OnInit{
  products = [...products];

  constructor(private route: ActivatedRoute,) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryName = params.get('categoryName');
      if (categoryName) {
        this.products = products.filter(product => product.categoryName === categoryName);
      } else {
        this.products = products;
      }
    });
  }

  shareTelegram(product: Product) {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(product.link)}`;
    window.open(telegramUrl, '_blank');
  }

  shareWhatsapp(product: Product){
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent('Check out this product!')}%20${encodeURIComponent(product.link)}`;
    window.open(whatsappUrl, '_blank')
  }


  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  onDeleteProduct(productDelete: Product) {
    const index = this.products.findIndex(product => product === productDelete);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}

