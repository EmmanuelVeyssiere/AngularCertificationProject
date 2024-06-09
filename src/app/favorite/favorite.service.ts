import { Injectable, OnInit } from '@angular/core';
import { IJob } from '../job/job.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  favoriteJobs: IJob[] = [];
  private storageKey = 'favorites';


  constructor() { }

  add(job:IJob){
    this.favoriteJobs = this.getAll();
    if(!this.includes(job)){
      this.favoriteJobs = [...this.favoriteJobs, job];
      localStorage.setItem(this.storageKey, JSON.stringify(this.favoriteJobs))
    }
  }

  remove(job:IJob){
    this.favoriteJobs = this.getAll();
    if(this.includes(job)){
      let newJobs = this.favoriteJobs.filter((i) => i.id !== job.id);
      this.favoriteJobs = [...newJobs];
      localStorage.setItem(this.storageKey, JSON.stringify(this.favoriteJobs))
    }
  }
  isFavorite(job:IJob){
    this.favoriteJobs = this.getAll();
    return this.includes(job);
  }

  private includes(job:IJob){
    return this.favoriteJobs.map((fj)=> fj.id).includes(job.id);
  }

  getAll(){
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

}
