import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, ActivatedRoute, Router, RouterLink } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-create-skill',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './create-skill.component.html',
  styleUrl: './create-skill.component.css'
})
export class CreateSkillComponent {
 skill = {
    name: '',
  };

  baseUrl = 'https://localhost:7260/api';

  async onSubmit() {
  try {
    const response = await axios.post(`${this.baseUrl}/Skills`, {
      name: this.skill.name,
    });
    console.log('Habilidade criada:', response.data);
  } catch (error) {
    console.error('Erro ao criar habilidade:', error);
    }
  }
}