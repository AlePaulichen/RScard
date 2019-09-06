import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './pages/contact.component';

const routes: Routes = [
    { path: '', component: ContactComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactRoutingModule {}
