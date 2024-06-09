import { Component, OnInit } from '@angular/core';
import { IJob } from '../job/job.model';
import { JobService } from '../job/job.service';
import { CommonModule } from '@angular/common';
import { JobComponent } from '../job/job.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, JobComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {
  private jobs: IJob[] = [];

  constructor(private jobService: JobService) {
  }

  ngOnInit() {
    this.jobService.getJobs().subscribe({
      next: (jobs) => (this.jobs = jobs),
    });
  }

  get jobItems() {
    return this.jobs;
  }
}
