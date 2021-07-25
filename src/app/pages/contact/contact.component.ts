import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contacts:any;
  constructor(public cs:ContactService) { 
    this.cs.getContacts().subscribe(
      (data)=>{
        this.contacts=data
      },
      ()=>{
        this.contacts=[]
      }
    )
  }

  ngOnInit(): void {
  }

}
