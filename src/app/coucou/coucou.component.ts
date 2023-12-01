import {Component, inject, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {Bidule} from "../bidule";
import {BiduleComponent} from "../bidule/bidule.component";
import {BiduleService} from "../bidule.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'app-coucou',
  standalone: true,
  imports: [CommonModule, RouterLink, BiduleComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './coucou.component.html',
  styleUrl: './coucou.component.css',

})
export class CoucouComponent {

biduleService : BiduleService = inject(BiduleService)
  bidules : Bidule[] =  this.biduleService.getBidules()
  filteredBidules : Bidule[] = []

  form = new FormGroup({
    name: new FormControl(''),
    description:new FormControl('blabla')

  })
  truc: any;
  sendBidule(){
  this.biduleService.newBidule(this.form.value.name ?? '', this.form.value.description ?? '')
    this.form.reset({
      name: 'autre name ?',
      description: 'autre description ?'
    })

  }

  filtreDeFer(occurence : string){
    if(!occurence){
      this.filteredBidules = this.bidules
    }else{
      this.filteredBidules = this.bidules.filter((bibi : Bidule)=>
      bibi?.description.toLowerCase().includes(occurence.toLowerCase())
      )
    }
  }

}


