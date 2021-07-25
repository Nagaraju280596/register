
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(public http:HttpClient) {}
  getContacts():Observable<object>{
      return this.http.get("http://localhost:9090/contacts")
  }
}
