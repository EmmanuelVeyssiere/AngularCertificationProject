import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IJob } from "./job.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
export class JobService {
    private jobs: BehaviorSubject<IJob[]> = new BehaviorSubject<IJob[]>([]);


    constructor(private http: HttpClient) {
        this.http.get<IJob[]>('/jobs').subscribe({
            next: (jobs) => this.jobs.next(jobs),
        });
    }
    getJobs(): Observable<IJob[]> {
        return this.jobs.asObservable();
    }
}