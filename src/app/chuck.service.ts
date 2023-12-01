import { Injectable } from '@angular/core';
import {Joke} from "./joke";

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  constructor() { }

  url :string = "https://api.chucknorris.io/jokes/random"

  async getFiveJokes(): Promise<Joke[]>
  {
    let jokes : Joke[] = []

    for(let i=0; i<5; i++){

      const jokeJson = await fetch(this.url);

      const joke = await jokeJson.json()

          jokes.push(joke)


    }
return jokes


}


}
