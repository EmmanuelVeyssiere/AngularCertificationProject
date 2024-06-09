import { Component } from '@angular/core';
import { JobComponent } from '../job/job.component';
import { NgFor, NgIf } from '@angular/common';
import { FavoriteService } from './favorite.service';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [JobComponent, NgIf, NgFor],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent {

  constructor(private favoriteService: FavoriteService){

  }

  get favJobItems() {
    return this.favoriteService.getAll();
  }
}
