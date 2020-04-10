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
   museumName: string = "oihoho";
   museumAdress: string = "ohoihoi";
   museumCP: string = "ohoihoi";
   museumCity: string = "ohoihoi";
   museumTel: string = "ohoihoi";
   museumSite: string = "ohoihoi";
   museumHours: string = "ohoihoi";

  constructor(private museumListService:MuseumListService, private route: ActivatedRoute) { }

  ngOnInit() {

    const museumRef = this.route.snapshot.params['ref_musee'];
    this.museumName = this.museumListService.getMuseumByrefmusee(+museumRef).nom_du_musee;
    this.museumAdress = this.museumListService.getMuseumByrefmusee(+museumRef).adr;
    this.museumCP = this.museumListService.getMuseumByrefmusee(+museumRef).cp;
    this.museumCity = this.museumListService.getMuseumByrefmusee(+museumRef).ville;
    this.museumTel = this.museumListService.getMuseumByrefmusee(+museumRef).telephone;
    this.museumSite = this.museumListService.getMuseumByrefmusee(+museumRef).sitweb;
    this.museumHours = this.museumListService.getMuseumByrefmusee(+museumRef).periode_ouverture;

  }
}
