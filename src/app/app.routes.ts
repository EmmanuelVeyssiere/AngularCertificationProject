import { Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';

export const routes: Routes = [
    {
        path:'jobs', component:CatalogComponent, title: "All jobs"
    }
];
