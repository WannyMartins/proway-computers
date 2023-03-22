import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraPesquisasComponent } from './barra-pesquisas.component';

describe('BarraPesquisasComponent', () => {
  let component: BarraPesquisasComponent;
  let fixture: ComponentFixture<BarraPesquisasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraPesquisasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraPesquisasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
