import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  MOCK_SEARCH_BOX_BUTTON_TEXT,
  MOCK_SEARCH_BOX_PLACEHOLDER,
  MOCK_SEARCH_BOX_VALUE,
} from '../../../mocks/search-box.mocks';
import { SearchBoxMolecule } from './search-box.molecule';

describe('SearchBoxMolecule', () => {
  let component: SearchBoxMolecule;
  let fixture: ComponentFixture<SearchBoxMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBoxMolecule],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBoxMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia crear el component', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia renderizar el icono, el input y el boton', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('dsb-icon-atom'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('input'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('button'))).toBeTruthy();
  });

  it('Deberia mostrar el placeholder, el valor y el texto del boton', () => {
    component.placeholder = MOCK_SEARCH_BOX_PLACEHOLDER;
    component.value = MOCK_SEARCH_BOX_VALUE;
    component.buttonText = MOCK_SEARCH_BOX_BUTTON_TEXT;
    fixture.detectChanges();

    const input = fixture.debugElement.query(By.css('input'));
    const button = fixture.debugElement.query(By.css('button'));

    expect(input.nativeElement.placeholder).toBe(MOCK_SEARCH_BOX_PLACEHOLDER);
    expect(input.nativeElement.value).toBe(MOCK_SEARCH_BOX_VALUE);
    expect(button.nativeElement.textContent).toContain(MOCK_SEARCH_BOX_BUTTON_TEXT);
  });

  it('Deberia emitir el evento search con el valor actual al hacer click en el boton', () => {
    component.value = MOCK_SEARCH_BOX_VALUE;
    const spy = jest.spyOn(component.search, 'emit');
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();

    expect(spy).toHaveBeenCalledWith(MOCK_SEARCH_BOX_VALUE);
  });
});