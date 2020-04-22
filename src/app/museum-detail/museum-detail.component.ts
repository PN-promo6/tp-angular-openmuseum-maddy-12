import { Component, OnInit } from '@angular/core';
import { MuseumListService } from '../services/museumList.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {

  //Variable
  ref_musee: string;
  museumName: string;
  museumAdress: string;
  museumCP: string;
  museumCity: string;
  museumTel: string;
  museumSite: string;
  museumHours: string;
  museumFax: string;

  constructor(private museumListService: MuseumListService, private route: ActivatedRoute) { }

  ngOnInit() {

    const museumRef = this.route.snapshot.params['ref_musee'];
    this.museumName = this.museumListService.getMuseumByRefmusee(museumRef).nom_du_musee;
    this.museumAdress = this.museumListService.getMuseumByRefmusee(museumRef).adr;
    this.museumCP = this.museumListService.getMuseumByRefmusee(museumRef).cp;
    this.museumCity = this.museumListService.getMuseumByRefmusee(museumRef).ville;
    this.museumTel = this.museumListService.getMuseumByRefmusee(museumRef).telephone;
    this.museumSite = this.museumListService.getMuseumByRefmusee(museumRef).sitweb;
    this.museumHours = this.museumListService.getMuseumByRefmusee(museumRef).periode_ouverture;
    this.museumFax = this.museumListService.getMuseumByRefmusee(museumRef).fax;

  }
}
