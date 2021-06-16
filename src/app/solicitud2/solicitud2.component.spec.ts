import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solicitud2Component } from './solicitud2.component';

describe('Solicitud2Component', () => {
  let component: Solicitud2Component;
  let fixture: ComponentFixture<Solicitud2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Solicitud2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Solicitud2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
