import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SustainabilityAction {
  id?: number;
  action: string;
  date: string;
  points: number;
}

@Injectable({
  providedIn: 'root'
})
export class SustainabilityService {
  private apiUrl = 'https://backend-sustainability-9og8n9fkl-akshaykumar2004s-projects.vercel.app/api/actions';

  constructor(private http: HttpClient) {}

  getActions(): Observable<SustainabilityAction[]> {
    return this.http.get<SustainabilityAction[]>(this.apiUrl);
  }

  addAction(action: SustainabilityAction): Observable<SustainabilityAction> {
    return this.http.post<SustainabilityAction>(this.apiUrl, action);
  }
}