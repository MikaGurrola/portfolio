import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  {
    path: 'projects',
    loadChildren: () => import(`./pages/projects/projects.module`).then(m => m.ProjectsModule),
    data: { state: 'projects' }
  },
  {
    path: 'home',
    loadChildren: () => import(`./pages/home/home.module`).then(m => m.HomeModule),
    data: { state: 'home' }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    data: { state: 'home' }
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { state: 'lost' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
