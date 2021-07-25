import { Injectable } from '@angular/core';
import {content} from "../model/data"

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}
  getabout():string{
    return content.about;
  }
  getoverview():string{
    return content.overview;
  }
}
