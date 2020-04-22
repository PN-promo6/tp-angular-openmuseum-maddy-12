import { Component, Input, OnInit } from '@angular/core';
import { MuseumListService } from '../services/museumList.service';

@Component({
  selector: 'app-single-museum',
  templateUrl: './single-museum.component.html',
  styleUrls: ['./single-museum.component.css']
})
export class SingleMuseumComponent implements OnInit {

  //variable
  @Input() museumName: string;
  @Input() museumAdress: string;
  @Input() museumCP: string;
  @Input() museumCity: string;
  @Input() museumTel: string;
  @Input() museumSite: string;
  @Input() museumHours: string;
  @Input() ref_musee: string;
  @Input() museumFax: string;

  // Méthode

  //constructor
  constructor(private museumListService: MuseumListService) { }

  ngOnInit() {

  }

}
