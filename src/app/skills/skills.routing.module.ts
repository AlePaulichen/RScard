import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [
    { path: '', component: SkillsComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SkillsRoutingModule {}
