import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscoucouService {

  constructor() { }

  yo():string
  {
    return "yoyo"
  }
}
