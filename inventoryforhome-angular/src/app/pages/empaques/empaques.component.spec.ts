import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpaquesComponent } from './empaques.component';

describe('EmpaquesComponent', () => {
  let component: EmpaquesComponent;
  let fixture: ComponentFixture<EmpaquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpaquesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpaquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
