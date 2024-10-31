import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReactiveFormsComponent } from './formulario-reactive-forms.component';

describe('FormularioReactiveFormsComponent', () => {
  let component: FormularioReactiveFormsComponent;
  let fixture: ComponentFixture<FormularioReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioReactiveFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
