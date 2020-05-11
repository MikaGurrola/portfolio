import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FeaturedProjectComponent } from 'src/app/components/featured-project/featured-project.component';

@NgModule({
  declarations: [HomeComponent, FeaturedProjectComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
