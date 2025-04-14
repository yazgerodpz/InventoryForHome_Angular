import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForminvcomponentComponent } from './forminvcomponent.component';

describe('ForminvcomponentComponent', () => {
  let component: ForminvcomponentComponent;
  let fixture: ComponentFixture<ForminvcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForminvcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForminvcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
