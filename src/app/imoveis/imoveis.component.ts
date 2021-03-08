import { Imovel } from './../../model/imovel';
import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-imoveis',
  templateUrl: './imoveis.component.html',
  styleUrls: ['./imoveis.component.scss'],
})
export class ImoveisComponent implements OnInit {

  @Input() imovel: Imovel;
  imoveis$: Imovel[] = [];
  cidade: string;
  search: string;
  constructor(private _api: ApiService, private menu: MenuService) {}

  ngOnInit() {
    this._api.getImoveis().subscribe((data) => {
      this.imoveis$ = data;
      this.cidade = this.imoveis$[0].city;
    });
    this.menu.change.subscribe((search) => {
      this.search = search;
      this._api.getImoveis().subscribe((data) => {
        this.imoveis$ = data.filter((imovel) => {
          return imovel.city.toLowerCase().includes(this.search.toLowerCase());
        });
      });
    });
  }
}
