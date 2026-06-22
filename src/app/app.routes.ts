import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { BlogListComponent } from './pages/blog-list/blog-list';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail';
import { ProductListComponent } from './pages/product-list/product-list';
import { ProductDetailComponent } from './pages/product-detail/product-detail';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:slug', component: ProductDetailComponent },
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/:slug', component: BlogDetailComponent },
  { path: '**', redirectTo: '' }
];
