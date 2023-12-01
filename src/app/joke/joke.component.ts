import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Joke} from "../joke";

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent {
  @Input() joke : Joke = <Joke>{}

}
