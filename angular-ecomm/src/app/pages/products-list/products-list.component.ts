import { Component, signal } from '@angular/core';
import { Product } from '../../../models/products.models';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'Mens Casual Premim Slim Fit T Shirt',
      price: 22.3,
      image: 'https://dynamic.zacdn.com/AIRm04MKcnH_91x6jJeW7ECI5yc=/filters:quality(70):format(webp)/https://static-my.zacdn.com/p/forest-6882-9729583-2.jpg',
      stock: 0    
    },
    {
      id: 2,
      title: 'Fit T-Shirt Men Cotton Jacket Men',
      price: 69.3,
      image: 'https://dynamic.zacdn.com/AIRm04MKcnH_91x6jJeW7ECI5yc=/filters:quality(70):format(webp)/https://static-my.zacdn.com/p/forest-6882-9729583-2.jpg',
      stock: 2    
    },
    {
      id: 3,
      title: 'Laptops Mens Casual Premium Slim',
      price: 37.9,
      image: 'https://dynamic.zacdn.com/AIRm04MKcnH_91x6jJeW7ECI5yc=/filters:quality(70):format(webp)/https://static-my.zacdn.com/p/forest-6882-9729583-2.jpg',
      stock: 10  
    }  
  ]);
}
