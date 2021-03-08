import { Imovel } from './../model/imovel';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImoveisComponent } from './imoveis/imoveis.component';
import { ImovelComponent } from './imovel/imovel.component';

const routes: Routes = [
  {
    path: '',
    component: ImoveisComponent,
    data: { title: 'Lista de Imoveis' },
  },
  {
    path: 'imoveis/:id',
    component: ImovelComponent,
    data: { title: 'Detalhes do Imovel' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
