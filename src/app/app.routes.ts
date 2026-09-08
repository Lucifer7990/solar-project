import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', loadComponent: () => import('./pages/product-list/product-list').then(m => m.ProductListComponent) },
  { path: 'products/:slug', loadComponent: () => import('./pages/product-detail/product-detail').then(m => m.ProductDetailComponent) },
  { path: 'blog', loadComponent: () => import('./pages/blog-list/blog-list').then(m => m.BlogListComponent) },
  { path: 'blog/:slug', loadComponent: () => import('./pages/blog-detail/blog-detail').then(m => m.BlogDetailComponent) },
  { path: 'privacy-policy', loadComponent: () => import('./pages/privacy/privacy').then(m => m.PrivacyComponent) },
  { path: 'terms-conditions', loadComponent: () => import('./pages/terms/terms').then(m => m.TermsComponent) },
  { path: '**', redirectTo: '' }
];
