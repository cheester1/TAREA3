import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleArchivo } from './detalle-archivo';

describe('DetalleArchivo', () => {
  let component: DetalleArchivo;
  let fixture: ComponentFixture<DetalleArchivo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleArchivo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleArchivo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
