import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPrioridadComponent } from './tabla-prioridad.component';

describe('TablaPrioridadComponent', () => {
  let component: TablaPrioridadComponent;
  let fixture: ComponentFixture<TablaPrioridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaPrioridadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaPrioridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
