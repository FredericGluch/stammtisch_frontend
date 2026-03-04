import { Component, inject, OnInit } from '@angular/core';
import data from '../assets/data/stammtisch.json';
import { HttpClient } from '@angular/common/http';

interface Test {
  name: string;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.html',
  styleUrl: './history.css',
  standalone: false
})
export class History implements OnInit {

  private http = inject(HttpClient);

  public historyData: any;

  public ngOnInit(): void {
    this.historyData = data;

    this.test();
  }

  private test() {
    console.log("test1");
    
    this.http.get<Test>('http://localhost:3000').subscribe((config) => {
      console.log("name", config.name)
    })
  }
}
