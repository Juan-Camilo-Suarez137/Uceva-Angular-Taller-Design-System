import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InputAtom } from './input.atom';
import {
  MOCK_INPUT_PLACEHOLDER,
  MOCK_INPUT_VALUE,
  MOCK_INPUT_THEME_DANGER,
} from '../../../mocks/input.mocks';

describe('InputAtom', () => {
  let component: InputAtom;
  let fixture: ComponentFixture<InputAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAtom],
    }).compileComponents();

    fixture = TestBed.createComponent(InputAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render placeholder and current value', () => {
    component.placeholder = MOCK_INPUT_PLACEHOLDER;
    component.value = MOCK_INPUT_VALUE;
    fixture.detectChanges();

    const input = fixture.debugElement.query(By.css('input'));
    expect(input.nativeElement.placeholder).toBe(MOCK_INPUT_PLACEHOLDER);
    expect(input.nativeElement.value).toBe(MOCK_INPUT_VALUE);
  });

  it('should mark input as invalid when theme is danger', () => {
    component.theme = MOCK_INPUT_THEME_DANGER;
    fixture.detectChanges();

    const input = fixture.debugElement.query(By.css('input'));
    expect(input.nativeElement.classList.contains('is-invalid')).toBe(true);
  });

  it('should disable the input when disabled is true', () => {
    component.disabled = true;
    fixture.detectChanges();

    const input = fixture.debugElement.query(By.css('input'));
    expect(input.nativeElement.disabled).toBe(true);
  });
});