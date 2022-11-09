import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReplaceNullPipe } from './pipes/replace-null.pipe';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  imports: [RouterModule, CommonModule],
  exports: [ NotFoundComponent, LayoutComponent, LoaderComponent, ReplaceNullPipe],
  declarations: [NotFoundComponent, LayoutComponent, LoaderComponent,ReplaceNullPipe],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
