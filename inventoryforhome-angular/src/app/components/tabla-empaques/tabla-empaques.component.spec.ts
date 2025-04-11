import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEmpaquesComponent } from './tabla-empaques.component';

describe('TablaEmpaquesComponent', () => {
  let component: TablaEmpaquesComponent;
  let fixture: ComponentFixture<TablaEmpaquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaEmpaquesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaEmpaquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
