import { Component, Input, OnInit } from '@angular/core';
import { JobService } from '../job/job.service';
import { IJobDetail } from './job-detail.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [NgFor, DatePipe, RouterModule],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent implements OnInit {

  jobId!: number;
  currentJobDetail!: IJobDetail | null

  constructor(private jobService: JobService, private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.jobId = this.route.snapshot.params['jobId']
    this.jobService.getJob(this.jobId).subscribe(
      job => { this.currentJobDetail = job }
    );
  }

}
