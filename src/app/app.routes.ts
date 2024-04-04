import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: 'index', component: IndexComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/index', pathMatch: 'full' },
];
