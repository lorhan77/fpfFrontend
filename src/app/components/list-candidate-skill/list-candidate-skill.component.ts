import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, ActivatedRoute, Router, RouterLink } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-list-candidate-skill',
  standalone: true,
  imports: [CommonModule, FormsModule, ],
  templateUrl: './list-candidate-skill.component.html',
  styleUrl: './list-candidate-skill.component.css'
})
export class ListCandidateSkillComponent {
    candidate = {
    id: 0,
    fullname: '',
    email: ''
  };

  skills: any[] = [];

  baseUrl = 'https://localhost:7260/api';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      await this.loadCandidate(Number(id));
      await this.loadCandidateSkills(Number(id));
    }
  }

  async loadCandidate(id: number) {
  try {
    const response = await axios.get(`${this.baseUrl}/Candidates/${id}`);
    const candidateData = response.data.dados || response.data;
    this.candidate = {
      id: candidateData.id,
      fullname: candidateData.fullName,
      email: candidateData.email
    };
    console.log('Candidato carregado:', this.candidate);
  } catch (error) {
    console.error('Erro ao carregar candidato:', error);
  }
  }

   async loadCandidateSkills(id: number) {
    try {
      const response = await axios.get(`${this.baseUrl}/Candidates/${id}/Skills`);
      this.skills = response.data.dados || [];
      console.log('Habilidades carregadas:', this.skills);
    } catch (error) {
      console.error('Erro ao carregar habilidades:', error);
    }
  }
}
