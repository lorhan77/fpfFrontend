// import { Component } from '@angular/core';
// import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms'
// import axios from 'axios';


// interface IUser {
//   id: number;
//   fullName: string;
//   email: string;
//   createdAt: string;
// }

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, CommonModule, FormsModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })

// export class AppComponent {
//   title = 'frontend';
//   data: IUser[] = [];
//   baseUrl = 'https://localhost:7260/api';
  
  
//   async getListProcessamento() {
//     try {
//       const response = await axios.get(`${this.baseUrl}/Candidates`, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
      
//       this.data = response.data.dados;
//       console.log(this.data);
//     } catch (error) {
//       console.error('Erro ao buscar os dados:', error);
//     }
//   }
  
//   async createProcessamento() {
//     // const body = {
//     //   num1: this.num1,
//     //   num2: this.num2,
//     //   num3: this.num3
//     // };

//   // handleAdd() {
//   //   // Implement add logic
//   // }

//   // handleDelete(id: number) {
//   //   // Implement delete logic
//   // }
//   }

//   ngOnInit() {
//   this.getListProcessamento();
//   }
// }
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'frontend';
}