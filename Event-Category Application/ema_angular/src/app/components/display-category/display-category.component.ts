import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-display-category',
  templateUrl: './display-category.component.html',
  styleUrls: ['./display-category.component.css']
})
export class DisplayCategoryComponent {
  categoriesDb: any[] = [];
  categoryId :string ="";
  category : any = {};

  constructor(private dbService :DatabaseService, private route: ActivatedRoute){
      this.categoryId = this.route.snapshot.params['categoryId'];
    }

  ngOnInit(): void {
    
    this.categoryId = this.route.snapshot.params['categoryId'];

    this.dbService.displayCategory(this.categoryId).subscribe({
      next: (data: any) => {
        this.category = data; 
        console.log('daa:', JSON.stringify(data, null, 2));
        // console.log(this.category + "hello");
      },
      error: (err) => {
        console.log(err);
      }
    
    })
  
    
  }
}
