import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CatalogComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-job-search';

}
