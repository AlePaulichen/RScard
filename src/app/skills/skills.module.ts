import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsRoutingModule } from './skills.routing.module';
import { SkillsComponent } from './pages/skills/skills.component';
import { SkillBarComponent } from './components/skill-bar/skill-bar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [SkillsComponent, SkillBarComponent],
    imports: [ CommonModule, SkillsRoutingModule, SharedModule ],
    exports: [],
    providers: [],
})
export class SkillsModule {}
