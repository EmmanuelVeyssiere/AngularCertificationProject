import { Component, Input, OnInit } from '@angular/core';
import { IJob } from './job.model';
import { NgClass, NgIf } from '@angular/common';
import { FavoriteService } from '../favorite/favorite.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [NgClass, NgIf, RouterModule],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent implements OnInit {
  @Input() job!: IJob
  @Input() showStar: boolean = false;
  favorite: boolean = false;

  constructor(private favoriteService: FavoriteService) {

  }
  ngOnInit(): void {
    this.favorite = this.favoriteService.isFavorite(this.job);
  }

  setFavorite() {
    this.favorite = !this.favorite;
    if (this.favorite) {
      this.favoriteService.add(this.job);
    } else {
      this.favoriteService.remove(this.job);
    }
  }

}
