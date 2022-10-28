import { TestBed } from '@angular/core/testing';

import { NoIngresadoAlumGuard } from './no-ingresado-alum.guard';

describe('NoIngresadoAlumGuard', () => {
  let guard: NoIngresadoAlumGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoIngresadoAlumGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
