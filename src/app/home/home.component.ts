import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {DiscoucouService} from "../discoucou.service";
import {ChuckService} from "../chuck.service";
import {Joke} from "../joke";
import {JokeComponent} from "../joke/joke.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, JokeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  host:{'class':'homeclass'}
})
export class HomeComponent {
cuc: DiscoucouService = inject(DiscoucouService)
  chuckService : ChuckService = inject(ChuckService)

  jokies : Joke[] = []

  faisvoir = this.cuc.yo()

  constructor() {
  this.chuckService.getFiveJokes().then((jokes : Joke[])=>{
    this.jokies = jokes
    console.log(this.jokies)
  })
  }

}
