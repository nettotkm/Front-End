import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuService } from './../menu/menu.service';
import { ApiService } from './../api.service';
import { ImoveisComponent } from './imoveis.component';
import { Imovel } from '../../model/imovel';
import { By } from '@angular/platform-browser';



describe('ImoveisComponent', () => {
  let component: ImoveisComponent;
  let fixture: ComponentFixture<ImoveisComponent>;
  let imovel: Imovel
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, RouterTestingModule],
        providers: [MenuService, ApiService],
        declarations: [ImoveisComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ImoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    imovel = new Imovel;
    imovel.city = 'São Paulo'

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter Imovel', () => {
    expect(component.filterImovel(imovel,'sao paulo')).toBeTruthy();
    expect(component.filterImovel(imovel,'so paulo')).toBeFalsy();
  });

});
