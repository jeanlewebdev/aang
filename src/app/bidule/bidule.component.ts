import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Bidule} from "../bidule";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-bidule',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bidule.component.html',
  styleUrl: './bidule.component.css'
})
export class BiduleComponent {
@Input() bidule! : Bidule
}
