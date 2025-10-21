import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import axios from 'axios';
import { NavbarComponent } from '../navbar/navbar.component';

interface ICandidate {
  id: number;
  fullName: string;
  email: string;
  createdAt: string;
}

@Component({
  selector: 'app-list-candidate',
  standalone: true,
  imports: [CommonModule, RouterLink, CommonModule, NavbarComponent],
  templateUrl: './list-candidate.component.html'
})
export class ListCandidateComponent {
  data: ICandidate[] = [];
  baseUrl = 'https://localhost:7260/api';

  async getCandidatesList() {
    try {
      const response = await axios.get(`${this.baseUrl}/Candidates`);
      this.data = response.data.dados;
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
    }
  }

  confirmDelete(id: number) {
    const confirmed = window.confirm('Tem certeza que deseja excluir este candidato?');
    if (confirmed) {
      this.deleteCandidate(id);
    }
  }

  async deleteCandidate(id: number) {
    try {
      const response = await axios.delete(`${this.baseUrl}/Candidates/${id}`);
      this.data = this.data.filter(candidate => candidate.id !== id);
      console.log('Candidato deletado:', response.data);
    } catch (error) {
      console.error('Erro ao deletar o candidato:', error);
    }
  }

  ngOnInit() {
    this.getCandidatesList();
  }
}
