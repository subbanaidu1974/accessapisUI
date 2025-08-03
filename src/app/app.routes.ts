import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Products } from './components/products/products';
import { MyApis } from './components/my-apis/my-apis';
import { Pricing } from './components/pricing/pricing';
import { AboutUs } from './components/about-us/about-us';
import { ContactUs } from './components/contact-us/contact-us';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products', component: Products },
  { path: 'myapis', component: MyApis },
  { path: 'pricing', component: Pricing },
  { path: 'aboutus', component: AboutUs },
  { path: 'contactus', component: ContactUs },
  { path: '**', redirectTo: '' }
];
