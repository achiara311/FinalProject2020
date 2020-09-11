import { CatDetailsService } from './../cat-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private catServ: CatDetailsService) {}
  cats: any;
  ngOnInit(): void {
    this.getData();
  }

  getData = () => {
    this.catServ.getData().subscribe((response) => {
      console.log('Data stuff yo', response);
      // this.cats = response.data.children;
    });
  };
}
