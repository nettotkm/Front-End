import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuService } from './../menu/menu.service';
import { ApiService } from './../api.service';
import { ImoveisComponent } from './imoveis.component';

describe('ImoveisComponent', () => {
  let component: ImoveisComponent;
  let fixture: ComponentFixture<ImoveisComponent>;

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
