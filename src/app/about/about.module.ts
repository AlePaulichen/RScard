import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './pages/about/about.component';
import { AboutRoutingModule } from './about.routing.module';
import { ProfileBoxComponent } from './components/profile-box/profile-box.component';
import { SocialMediaBarComponent } from './components/social-media-bar/social-media-bar.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AboutComponent,
    ProfileBoxComponent,
    SocialMediaBarComponent,
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
