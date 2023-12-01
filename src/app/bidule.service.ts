import { Injectable } from '@angular/core';
import {Bidule} from "./bidule";

@Injectable({
  providedIn: 'root'
})
export class BiduleService {

  constructor() { }

  protected   bidules: Bidule[] = [{
    id:1,
    name:"premier bidule",
    description:"description premier bidule"
  },
    {
      id:2,
      name:'truc deux',
      description:"description deux"
    }
  ]

  getBidules():Bidule[]
  {
    return this.bidules
  }

  getBiduleById(id: number): Bidule {
    return this.bidules.find((bi : Bidule)=>bi.id==id)!
  }

  newBidule(name : string, description:string)
  {
    let id = Math.max(...this.bidules.map((bib)=>bib.id))+1

    this.bidules.push({id:id,name:name,description:description})
  }
}
