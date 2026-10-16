import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent } from './features/contact/contact.component';
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
        component: ContactComponent,
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