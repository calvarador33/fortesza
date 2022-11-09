import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { NotFoundComponent } from './shared/views/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },

      {
        path: 'list',
        loadChildren: () => import('./feature/list/list.module').then((m) => m.ListModule)
      },

      {
        path: 'category',
        loadChildren: () => import('./feature/category/category.module').then((m) => m.CategoryModule)
      },
      {
        path: 'detail/:id',
        loadChildren: () => import('./feature/detail/detail.module').then((m) => m.DetailModule)
      }

      ,
      { path: '**', component: NotFoundComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
