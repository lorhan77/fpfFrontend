import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import axios from 'axios';
import { NavbarComponent } from '../navbar/navbar.component';

interface ISkill {
 name: string;
}

@Component({
  selector: 'app-list-skill',
  standalone: true,
  imports: [CommonModule, RouterLink, CommonModule, NavbarComponent],
  templateUrl: './list-skill.component.html',
  styleUrl: './list-skill.component.css'
})
export class ListSkillComponent {
  data: ISkill[] = [];
  baseUrl = 'https://localhost:7260/api';

  async getSkillsList() {
    try {
      const response = await axios.get(`${this.baseUrl}/Skills`);
      this.data = response.data.dados;
      console.log(this.data);
    } catch (error) {
      console.error('Erro ao buscar as habilidades:', error);
    }
  }

  ngOnInit() {
    this.getSkillsList();
  }
}
