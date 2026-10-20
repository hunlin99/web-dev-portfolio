import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { DC3ViralMenaceComponent } from './features/dc3-viral-menace/dc3-viral-menace.component';
import { CuisinesAroundUsComponent } from './features/cuisines-around-us/cuisines-around-us.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'projects',
        component: ProjectsComponent,
    },
    {
        path: 'contact',
        redirectTo: 'blog',
        pathMatch: 'full',
    },
    {
        path: 'blog',
        title: 'Blog | Ling Chang',
        loadComponent: () => import('./features/blog/pages/blog-list/blog-list.component').then(m => m.BlogListComponent),
    },
    {
        path: 'blog/:slug',
        loadComponent: () => import('./features/blog/pages/blog-post/blog-post.component').then(m => m.BlogPostComponent),
        title: 'Article | Ling Chang',
    },
    {
        path: 'dc3-viral-menace',
        component: DC3ViralMenaceComponent,
    },
    {
        path: 'cuisines-around-us',
        component: CuisinesAroundUsComponent,
    },
    {
        path: 'organic-care',
        loadComponent: () => import('./features/organic-care/organic-care.component').then(m => m.OrganicCareComponent),
    },
    {
        path: 'traclocal',
        loadComponent: () => import('./features/traclocal/traclocal.component').then(m => m.TraclocalComponent),
    },
    {
        path: 'health-pocket',
        loadComponent: () => import('./features/health-pocket/health-pocket.component').then(m => m.HealthPocketComponent),
    },
    { path: 'tracLocal', redirectTo: 'traclocal', pathMatch: 'full' },
    {
        path: '**',
        redirectTo: '',
    },


];