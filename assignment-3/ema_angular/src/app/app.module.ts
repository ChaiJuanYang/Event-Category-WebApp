import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { DeleteCategoriesComponent } from './components/delete-categories/delete-categories.component';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StatsG1Component } from './components/stats-g1/stats-g1.component';
import { TextToSpeechComponent } from './components/text-to-speech/text-to-speech.component';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from './database.service';
import { ListEventCapsPipe } from './pipes/list-event-caps.pipe';
import { DisplayCategoryComponent } from './components/display-category/display-category.component';
import { InvalidDataComponent } from './components/invalid-data/invalid-data.component';
import { ServiceWorkerModule } from '@angular/service-worker';

const routes: Routes = [
  {path :"add-category", component: AddCategoryComponent},
  {path :"list-categories", component: ListCategoriesComponent},
  {path :"delete-categories", component: DeleteCategoriesComponent},
  {path :"update-category", component: UpdateCategoryComponent},
  {path :"display-category/:categoryId", component: DisplayCategoryComponent},
  {path :"invalid-data", component: InvalidDataComponent},
  {path :"stats-g1", component: StatsG1Component},
  {path :"text-to-speech", component: TextToSpeechComponent},
  {path: "", redirectTo: "/list-categories", pathMatch: "full" },
  {path :"**", component: PageNotFoundComponent},
  ]

@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponent,
    DeleteCategoriesComponent,
    ListCategoriesComponent,
    FooterComponent,
    PageNotFoundComponent,
    StatsG1Component,
    TextToSpeechComponent,
    UpdateCategoryComponent,
    ListEventCapsPipe,
    DisplayCategoryComponent,
    InvalidDataComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes, { useHash: true }), HttpClientModule, FormsModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
    
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
