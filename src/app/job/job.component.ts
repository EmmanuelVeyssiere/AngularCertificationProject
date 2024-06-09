import { Component, Input } from '@angular/core';
import { IJob } from './job.model';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
  @Input() job!: IJob

}
