import { MenuService } from './menu.service';
import { ApiService } from './../api.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ImovelComponent } from '../imovel/imovel.component';
import { Imovel } from 'src/model/imovel';
import { Location } from '@angular/common';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() imovel: Imovel;
  @Input() ImovelComponent: ImovelComponent;
  queryField = new FormControl();
  routeUrl: string
  constructor(private _api: ApiService, private menu: MenuService, private route: ActivatedRoute,private router: Router,location: Location) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.routeUrl = location.path();
      } else {
        this.routeUrl = 'Home'
      }
    });
  }
  ngOnInit() {

  }
  // onSearch() {
  //   console.log(this.queryField.value);
  //   console.log(this._api.getImoveis());
  //   console.log(this.imovel);
  // }
  inputChange() {

    this.menu.set(this.queryField.value);
  }
}
