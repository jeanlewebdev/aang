import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Bidule} from "../bidule";
import {ActivatedRoute} from "@angular/router";
import {BiduleService} from "../bidule.service";

@Component({
  selector: 'app-bidule-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bidule-details.component.html',
  styleUrl: './bidule-details.component.css'
})
export class BiduleDetailsComponent {
bidule : Bidule
  biduleId : number
  route: ActivatedRoute = inject(ActivatedRoute)
  service : BiduleService = inject(BiduleService)
constructor() {
  this.biduleId = Number(this.route.snapshot.params['id'])
  this.bidule  = this.service.getBiduleById(this.biduleId)
}
}
