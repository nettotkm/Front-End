import { ApiService } from './../api.service';
import { Imovel } from './../../model/imovel';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs';
import { AgmMap } from '@agm/core';
@Component({
  selector: 'app-imoveis',
  templateUrl: './imovel.component.html',
  styleUrls: ['./imovel.component.scss'],
})
export class ImovelComponent implements OnInit {
  @Input() imovel: Imovel;


  isLoadingResults = true;
  lat: number;
  lng: number;
  zoom: number = 12;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _api: ApiService,


  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this._api.getImoveis().subscribe((data) => {
      this.imovel = data[id];
      this.lat = data[id].lat;
      this.lng = data[id].lng;
    });

  }
}
