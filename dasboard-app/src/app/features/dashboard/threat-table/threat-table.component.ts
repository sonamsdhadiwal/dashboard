import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-threat-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './threat-table.component.html',
  styleUrls: ['./threat-table.component.scss']
})
export class ThreatTableComponent {
  threats = [
    { id: 1, name: 'SQL Injection', severity: 'High' },
    { id: 2, name: 'XSS Attack', severity: 'Medium' },
    { id: 3, name: 'Brute Force', severity: 'Low' }
  ];
}