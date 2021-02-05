import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositivoEdicaoComponent } from './dispositivo-edicao.component';

describe('DispositivoEdicaoComponent', () => {
  let component: DispositivoEdicaoComponent;
  let fixture: ComponentFixture<DispositivoEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispositivoEdicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositivoEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
