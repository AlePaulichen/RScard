import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './pages/about/about.component';
import { AboutRoutingModule } from './about.routing.module';
import { ProfileBoxComponent } from './components/profile-box/profile-box.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AboutComponent,
    ProfileBoxComponent,
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
