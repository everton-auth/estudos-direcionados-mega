import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './container/main.component';
import { FilterComponent } from './filter/filter.component';


@NgModule({
  declarations: [
    NavbarComponent,
    MainComponent,
    FilterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class MainComponentsModule { }
