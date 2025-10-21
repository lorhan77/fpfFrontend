// import { Routes } from '@angular/router';
// import { CreateCandidateComponent } from './components/create-candidate/create-candidate.component';

// export const routes: Routes = [
//   // Add your routes here, for example:
//   { path: '/candidates/create', component: CreateCandidateComponent },
//   { path: '', redirectTo: '/', pathMatch: 'full' }
// ];
import { Routes } from '@angular/router';
import { CreateCandidateComponent } from './components/create-candidate/create-candidate.component';
import { ListCandidateComponent } from './components/list-candidate/list-candidate.component';
import { ListSkillComponent } from './components/list-skill/list-skill.component';
import { CreateSkillComponent } from './components/create-skill/create-skill.component';
import { AssignSkillComponent } from './components/assign-skill/assign-skill.component';
import { ListCandidateSkillComponent } from './components/list-candidate-skill/list-candidate-skill.component';

export const routes: Routes = [
   {
    path: 'candidates/edit/:id', 
    component: CreateCandidateComponent
  },
  { 
    path: 'candidates/create', 
    component: CreateCandidateComponent 
  },
  { 
    path: 'candidates/list', 
    component: ListCandidateComponent 
  },
  { 
    path: 'skills/list', 
    component: ListSkillComponent 
  },
  {
    path: 'candidates/:id/skills',
    component: ListCandidateSkillComponent
  },
  { 
    path: 'skills/create', 
    component: CreateSkillComponent 
  },
  { 
    path: 'assign-skills/create', 
    component: AssignSkillComponent 
  },
  { 
    path: '', 
    redirectTo: 'candidates/list', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    redirectTo: 'candidates/list' 
  }
];