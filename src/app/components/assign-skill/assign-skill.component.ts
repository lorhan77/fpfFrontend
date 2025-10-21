import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, ActivatedRoute, Router, RouterLink } from '@angular/router';
import axios from 'axios';

interface ICandidate {
  id: number;
  fullName: string;
  email: string;
  createdAt: string;
}

interface ISkill {
  id: number;
  name: string;
  candidateSkills: any[];
}

interface ISkillAssignment {
  skillId: number;
  skillName: string;
  level: string;
}

@Component({
  selector: 'app-assign-skill',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './assign-skill.component.html',
  styleUrl: './assign-skill.component.css'
})
export class AssignSkillComponent {
  candidates: ICandidate[] = [];
  selectedCandidateId: number | null = null;
  
  skills: ISkill[] = [];
  selectedSkillId: number | null = null;

  selectedLevel: string = '';

  selectedSkills: ISkillAssignment[] = [];

  ngOnInit() {
     this.loadCandidates();
     this.loadSkills();
  }

  addSkill() {
    if (!this.selectedSkillId || !this.selectedLevel) {
      alert('Por favor, selecione uma habilidade e um nível');
      return;
    }

  
    const skillExists = this.selectedSkills.find(s => s.skillId === this.selectedSkillId);
    if (skillExists) {
      alert('Esta habilidade já foi adicionada');
      return;
    }

    const skill = this.skills.find(s => s.id === this.selectedSkillId);
    if (skill) {
      this.selectedSkills.push({
        skillId: skill.id,
        skillName: skill.name,
        level: this.selectedLevel
      });

      
      this.selectedSkillId = null;
      this.selectedLevel = '';
    }
  }

  removeSkill(index: number) {
    this.selectedSkills.splice(index, 1);
  }

  async loadCandidates() {
    try {
      const response = await axios.get('https://localhost:7260/api/Candidates');
      this.candidates = response.data.dados;
      console.log('Candidatos carregados:', this.candidates);
      console.log('Candidato selecionado ID:', this.selectedCandidateId); 
    } catch (error) {
      console.error('Erro ao carregar candidatos:', error);
    }
  }


  async loadSkills() {
    try {
      const response = await axios.get('https://localhost:7260/api/Skills');
      this.skills = response.data.dados;
      console.log('Skills carregadas:', this.skills);
    } catch (error) {
      console.error('Erro ao carregar skills:', error);
    }
  }


  async onSubmit() {
    try {
      if (!this.selectedCandidateId) {
        alert('Por favor, selecione um candidato');
        return;
      }

      if (this.selectedSkills.length === 0) {
        alert('Por favor, adicione pelo menos uma habilidade');
        return;
      }

      const payload = this.selectedSkills.map(skill => ({
        SkillId: skill.skillId,
        Level: skill.level
      }));

      const response = await axios.post(
        `https://localhost:7260/api/Candidates/${this.selectedCandidateId}/Skills`,
        payload
      );

      if (response.data.status) {
        console.log('Sucesso:', response.data.mensagem);
        alert(response.data.mensagem);
        
        // Limpar formulário
        this.selectedCandidateId = null;
        this.selectedSkillId = null;
        this.selectedLevel = '';
        this.selectedSkills = [];
      } else {
        console.error('Erro:', response.data.mensagem);
        alert(`Erro: ${response.data.mensagem}`);
      }
      
    } catch (error: any) {
      console.error('Erro ao vincular habilidade:', error);
      
      if (error.response && error.response.data && error.response.data.mensagem) {
        alert(`Erro: ${error.response.data.mensagem}`);
      } else {
        alert('Erro ao vincular habilidade. Tente novamente.');
      }
    }
  }
}
