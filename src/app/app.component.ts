import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-project';
  onLoadCurrentPage:string = 'receipe';
  onNavigation(page){
    console.log(page);
    this.onLoadCurrentPage = page;
  }
}
