import { TestBed } from '@angular/core/testing';

import { IngresadoAlumGuard } from './ingresado-alum.guard';

describe('IngresadoAlumGuard', () => {
  let guard: IngresadoAlumGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IngresadoAlumGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
