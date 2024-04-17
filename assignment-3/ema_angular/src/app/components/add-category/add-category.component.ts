import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  name: string = "";
  description: string = "";
  image: string = "";
  constructor(private dbService: DatabaseService, private router: Router) { }

  saveCategory(){
    let categoryObj = {
      name : this.name,
      description :this.description,
      image : this.image
    };
    // console.log(categoryObj);
    this.dbService.addCategory(categoryObj).subscribe({
      next : (result) => {this.router.navigate(["/list-categories"])},
      error : (error) => {this.router.navigate(["/invalid-data"])}
  })
  }
  //this.router.navigate(["/list-categories"])

}
