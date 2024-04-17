import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  categoriesDb: any[] = []

  constructor(private dbService: DatabaseService, private router :Router) {
    this.getCategories();
  }

  getCategories() {
    this.dbService.getCategory().subscribe({
      next: (data: any) => {
        this.categoriesDb = data;
      },
      error: (err) => { console.log(err)}
    })
  }

  onSelectCategory(item : any){
    console.log(item.categoryID)
    let cat_id = item.categoryID;
    this.router.navigate(['/display-category',cat_id])  
  }
}
