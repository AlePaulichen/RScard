import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './pages/base-layout/base-layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EsriMapComponent } from './components/esri-map/esri-map.component';


@NgModule({
  declarations: [BaseLayoutComponent, MenuComponent, EsriMapComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
  ],
  exports: [
    BaseLayoutComponent,
    FontAwesomeModule,
    EsriMapComponent,
  ]
})
export class SharedModule { }
