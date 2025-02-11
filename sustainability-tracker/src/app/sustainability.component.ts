import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SustainabilityService, SustainabilityAction } from './sustainability.service';

@Component({
  selector: 'app-sustainability-tracker',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  template: `
    <div class="container">
  <h2>Sustainability Tracker</h2>

  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Action</th>
          <th>Date</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let action of actions">
          <td>{{ action.id }}</td>
          <td>{{ action.action }}</td>
          <td>{{ action.date }}</td>
          <td>{{ action.points }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <form (ngSubmit)="onSubmit()">
    <input 
      [(ngModel)]="newAction.action" 
      name="action" 
      placeholder="Action Name" 
      required
    >
    <input 
      [(ngModel)]="newAction.date" 
      name="date" 
      type="date" 
      required
    >
    <input 
      [(ngModel)]="newAction.points" 
      name="points" 
      type="number" 
      placeholder="Points" 
      required
    >
    <button type="submit">Add Action</button>
  </form>
</div>

  `,
  styles: [`
    .container {
  max-width: 90%;
  width: 600px;
  margin: 20px auto;
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h2 {
  color: #333;
  font-size: 24px;
}

.table-container {
  overflow-x: auto;
  margin-top: 15px;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
}

th, td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  text-align: left;
}

th {
  background: #4CAF50;
  color: white;
}

tr:hover {
  background: #f1f1f1;
}

form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
}

input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

button {
  background: #4CAF50;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background: #45a049;
}

@media (max-width: 600px) {
  th, td {
    font-size: 14px;
    padding: 8px;
  }

  input {
    font-size: 14px;
  }

  button {
    font-size: 14px;
  }
}

  `]
})
export class SustainabilityTrackerComponent implements OnInit {
  actions: SustainabilityAction[] = [];
  newAction: SustainabilityAction = {
    action: '',
    date: '',
    points: 0
  };

  constructor(private sustainabilityService: SustainabilityService) {}

  ngOnInit() {
    this.loadActions();
  }

  loadActions() {
    this.sustainabilityService.getActions().subscribe(
      actions => this.actions = actions,
      error => console.error('Error fetching actions', error)
    );
  }

  onSubmit() {
    this.sustainabilityService.addAction(this.newAction).subscribe(
      () => {
        this.loadActions();
        // Reset form
        this.newAction = { action: '', date: '', points: 0 };
      },
      error => console.error('Error adding action', error)
    );
  }
}