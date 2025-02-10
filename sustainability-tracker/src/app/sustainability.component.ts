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
    .container { max-width: 600px; margin: 0 auto; }
    table { width: 100%; border-collapse: collapse; }
    th, td { border: 1px solid #ddd; padding: 8px; }
    form { display: flex; flex-direction: column; gap: 10px; margin-top: 20px; }
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