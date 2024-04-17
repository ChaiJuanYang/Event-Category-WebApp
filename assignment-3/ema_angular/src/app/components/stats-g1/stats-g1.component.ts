import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-stats-g1',
  templateUrl: './stats-g1.component.html',
  styleUrls: ['./stats-g1.component.css']
})
export class StatsG1Component {
statsDb :any = [];
  constructor(private dbService : DatabaseService){
    this.dbService.displayStats().subscribe({
      next: (data: any) => {
        this.statsDb = data;
        console.log('daa:', JSON.stringify(this.statsDb, null, 2));
      },
      error: (err) => { console.log(err)}
    })
  }
  }

