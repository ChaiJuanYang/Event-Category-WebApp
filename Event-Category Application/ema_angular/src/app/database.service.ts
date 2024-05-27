import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers : new HttpHeaders({"Content-Type" : "application/json"}),
};

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  addCategory(aCategory: any){
    return this.http.post("/add-category", aCategory, httpOptions)
  }

  getCategory(){
    return this.http.get("/list-categories")
  }

  deleteCategory(id : string){
    let url = "/delete-categories/" + id;
    return this.http.delete(url, httpOptions)
  }

  updateCategory(categoryID : string, obj: any){
    return this.http.put("/update-category",  obj, httpOptions)
  }

  displayCategory(id : string){
    let url = "/display-category/" + id;
    return this.http.get(url,httpOptions)
  }

  displayStats(){
    return this.http.get("/stats-g1");
  }
}
