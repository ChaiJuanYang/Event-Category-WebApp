import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-delete-categories',
  templateUrl: './delete-categories.component.html',
  styleUrls: ['./delete-categories.component.css']
})
export class DeleteCategoriesComponent implements OnInit{
  categoriesDb: any[] = [];
  categoryId: string = "";

  constructor(private dbService: DatabaseService ) {  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.dbService.getCategory().subscribe({
      next: (data: any) => {
        this.categoriesDb = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  deleteCategorybyID(item: any) {
    console.log(item.categoryID)
    this.dbService.deleteCategory(item.categoryID).subscribe({
      next: (result) => {
        this.getCategories();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
