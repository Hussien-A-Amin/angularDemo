import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Shop } from './components/shop/shop';
import { NotFound } from './components/not-found/not-found';
import { Vision } from './components/vision/vision';
import { __values } from 'tslib';
import { Values } from './components/values/values';
import { Productdetails } from './components/productdetails/productdetails';
import { Login } from './components/login/login';
import { authGuard } from './guards/auth-guard';
import { AddProduct } from './components/add-product/add-product';

export const routes: Routes = [
    {path:'',pathMatch:'full',component:Home},
    {path:'shop',component:Shop,canActivate:[authGuard]},
    {path:'login',component:Login},
    { path: 'about', component: About ,canActivate:[authGuard],children:[
        {path:'',pathMatch:'full',redirectTo:'vision'},
        {path:'vision',component:Vision},
        {path:'values',component:Values},
        {path:'add',component:AddProduct},

    ]},
    { path: 'ProductsDetails/:id', component: Productdetails },
    { path: 'shop/add', component: AddProduct },
    { path: '**', component: NotFound },


];
