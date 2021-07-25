import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  about:string="";
  overview:string="";

  constructor(public ds:DataService) { 
    this.about=ds.getabout();
    this.overview=ds.getoverview();
  }

  ngOnInit(): void {
  }

}
