import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FeaturedProjectComponent } from 'src/app/components/featured-project/featured-project.component';
import { DeferLoadDirective } from 'src/app/directives/defer-load.directive';

@NgModule({
  declarations: [
    HomeComponent, 
    FeaturedProjectComponent,
    DeferLoadDirective
  ],
  exports: [
    DeferLoadDirective
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
