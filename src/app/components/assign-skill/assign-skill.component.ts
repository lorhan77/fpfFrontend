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

  ngOnInit() {
     this.loadCandidates();
     this.loadSkills();
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
      if (!this.selectedCandidateId || !this.selectedSkillId || !this.selectedLevel) {
        console.error('Por favor, preencha todos os campos');
        alert('Por favor, selecione um candidato, uma habilidade e um nível');
        return;
      }

      const payload = [
        {
          SkillId: this.selectedSkillId,
          Level: this.selectedLevel
        }
      ];

      const response = await axios.post(
        `https://localhost:7260/api/Candidates/${this.selectedCandidateId}/Skills`,
        payload
      );

      if (response.data.status) {
        console.log('Sucesso:', response.data.mensagem);
        alert(response.data.mensagem);
        
        // Limpar formulário apenas em caso de sucesso
        this.selectedCandidateId = null;
        this.selectedSkillId = null;
        this.selectedLevel = '';
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
