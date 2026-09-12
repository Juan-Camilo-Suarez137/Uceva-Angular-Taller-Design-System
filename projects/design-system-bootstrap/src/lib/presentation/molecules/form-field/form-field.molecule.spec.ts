import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  MOCK_FORM_FIELD_HELPER_TEXT,
  MOCK_FORM_FIELD_LABEL,
  MOCK_FORM_FIELD_PLACEHOLDER,
  MOCK_FORM_FIELD_THEME_DANGER,
  MOCK_FORM_FIELD_VALUE,
} from '../../../mocks/form-field.mocks';
import { FormFieldMolecule } from './form-field.molecule';

describe('FormFieldMolecule', () => {
  let component: FormFieldMolecule;
  let fixture: ComponentFixture<FormFieldMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldMolecule],
    }).compileComponents();

    fixture = TestBed.createComponent(FormFieldMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia crear el component', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia mostrar el label y el valor del input', () => {
    component.label = MOCK_FORM_FIELD_LABEL;
    component.value = MOCK_FORM_FIELD_VALUE;
    component.placeholder = MOCK_FORM_FIELD_PLACEHOLDER;
    fixture.detectChanges();

    const label = fixture.debugElement.query(By.css('dsb-text-atom'));
    const input = fixture.debugElement.query(By.css('input'));

    expect(label.nativeElement.textContent).toContain(MOCK_FORM_FIELD_LABEL);
    expect(input.nativeElement.value).toBe(MOCK_FORM_FIELD_VALUE);
    expect(input.nativeElement.placeholder).toBe(MOCK_FORM_FIELD_PLACEHOLDER);
  });

  it('Deberia mostrar el texto de ayuda solo cuando helperText tiene contenido', () => {
    fixture.detectChanges();
    let textAtoms = fixture.debugElement.queryAll(By.css('dsb-text-atom'));
    expect(textAtoms.length).toBe(0);

    component.label = MOCK_FORM_FIELD_LABEL;
    component.helperText = MOCK_FORM_FIELD_HELPER_TEXT;
    fixture.detectChanges();
    textAtoms = fixture.debugElement.queryAll(By.css('dsb-text-atom'));
    expect(textAtoms.length).toBe(2);
    expect(textAtoms[1].nativeElement.textContent).toContain(MOCK_FORM_FIELD_HELPER_TEXT);
  });

  it('Deberia marcar el input como invalido cuando el theme es danger', () => {
    component.theme = MOCK_FORM_FIELD_THEME_DANGER;
    fixture.detectChanges();

    const input = fixture.debugElement.query(By.css('input'));
    expect(input.nativeElement.classList.contains('is-invalid')).toBe(true);
  });

  it('Deberia deshabilitar el input cuando disabled es true', () => {
    component.disabled = true;
    fixture.detectChanges();

    const input = fixture.debugElement.query(By.css('input'));
    expect(input.nativeElement.disabled).toBe(true);
  });
});