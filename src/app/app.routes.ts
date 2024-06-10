import { Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { JobDetailComponent } from './job-detail/job-detail.component';

export const routes: Routes = [
    { path: 'jobs/:jobId', component: JobDetailComponent },
    { path: 'jobs', component: CatalogComponent, title: "All jobs" },
    { path: 'favorites', component: FavoriteComponent, title: "My favorites jobs" },
    { path: '**', redirectTo: 'jobs' }
];
