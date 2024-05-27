import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {
  name: string = "";
  description: string = "";
  image: string = "";
  categoryId : string = "";
  
  categoriesDb: any[] = [];
  constructor(private dbService: DatabaseService, private router: Router) {
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

  onSelectUpdate(item : any) {
    this.categoryId = item.categoryID;
    this.name = item.name;
    this.description = item.description;
    this.image = item.image;
  }

  onUpdateCategory() {
    const nameIsAlphanumeric = /^[a-zA-Z0-9\s]+$/.test(this.name);

    if (!nameIsAlphanumeric) {
      console.log("wrong format");
      this.router.navigate(["/invalid-data"]);
      return;
    }
    let obj = { name: this.name, description: this.description, image : this.image,categoryId: this.categoryId};
    // console.log(obj);
    console.log(this.categoryId)
    this.dbService.updateCategory(this.categoryId, obj).subscribe({
      next : (result) =>{this.getCategories(); 
      this.router.navigate(["/list-categories"])
    }, error : (error) => {console.log(error)}
  })
  }

}
