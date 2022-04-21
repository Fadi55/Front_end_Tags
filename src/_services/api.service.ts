import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  ListArray: string[] = ["Master tag", "Tag n1 ", "Tag n2"];
}
