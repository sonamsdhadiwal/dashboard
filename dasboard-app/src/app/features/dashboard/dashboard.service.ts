import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Threat } from '../../shared/models/threat.model';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private apiUrl = 'http://localhost:3000/threats';

  constructor(private http: HttpClient) {}

  getThreats(): Observable<Threat[]> {
    return this.http.get<Threat[]>(this.apiUrl);
  }
}