import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosBancariosCComponent } from './datos-bancarios-c.component';

describe('DatosBancariosCComponent', () => {
  let component: DatosBancariosCComponent;
  let fixture: ComponentFixture<DatosBancariosCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosBancariosCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosBancariosCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
