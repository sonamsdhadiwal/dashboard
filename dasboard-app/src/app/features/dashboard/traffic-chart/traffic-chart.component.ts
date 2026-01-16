import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-traffic-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './traffic-chart.component.html',
  styleUrls: ['./traffic-chart.component.scss']
})
export class TrafficChartComponent {
  traffic = [
    { label: 'Mon', value: 40 },
    { label: 'Tue', value: 70 },
    { label: 'Wed', value: 55 }
  ];
}