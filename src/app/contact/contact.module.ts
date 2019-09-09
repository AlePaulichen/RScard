import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact.routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { LocationMapComponent } from './components/location-map/location-map.component';

@NgModule({
    declarations: [ContactComponent, ContactFormComponent, ContactInfoComponent, LocationMapComponent],
    imports: [ CommonModule, ContactRoutingModule, SharedModule, ReactiveFormsModule ],
    exports: [],
    providers: [],
})
export class ContactModule {}
