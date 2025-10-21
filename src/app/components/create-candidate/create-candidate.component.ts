import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, ActivatedRoute, Router, RouterLink } from '@angular/router';
import axios from 'axios';


@Component({
  selector: 'app-create-candidate',
  standalone: true,
  imports: [ CommonModule, FormsModule, RouterLink],
  templateUrl: './create-candidate.component.html',
  styleUrl: './create-candidate.component.css'
})
export class CreateCandidateComponent implements OnInit {
  candidate = {
    id: 0,
    fullname: '',
    email: ''
  };

  baseUrl = 'https://localhost:7260/api';
  isEditMode = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      await this.loadCandidate(Number(id));
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
    } catch (error) {
      console.error('Erro ao carregar candidato:', error);
    }
  }

  async onSubmit() {
    try {
      if (this.isEditMode) {
        const response = await axios.put(`${this.baseUrl}/Candidates`, {
          id: this.candidate.id,
          fullName: this.candidate.fullname,
          email: this.candidate.email
        });
        console.log('Candidato atualizado:', response.data);
      } else {
        const response = await axios.post(`${this.baseUrl}/Candidates`, {
          fullName: this.candidate.fullname,
          email: this.candidate.email
        });
        console.log('Candidato criado:', response.data);
      }
      this.router.navigate(['/candidates']);
    } catch (error) {
      console.error('Erro ao salvar candidato:', error);
    }
  }
}
