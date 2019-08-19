import { LayoutModule } from './../../layout/layout.module';
import { HeaderComponent } from './../../layout/header/header.component';
import { FooterComponent } from './../../layout/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home/home.component';
import { DestaquesComponent } from './page/destaques/destaques.component';
import { SliderComponent } from './page/slider/slider.component';


@NgModule({
  declarations: [HomeComponent, DestaquesComponent, SliderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
