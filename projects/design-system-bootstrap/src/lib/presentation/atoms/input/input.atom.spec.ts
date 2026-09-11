import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InputAtom } from './input.atom';

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
    component.placeholder = 'Buscar equipo...';
    component.value = 'Angular';
    fixture.detectChanges();

    const input = fixture.debugElement.query(By.css('input'));
    expect(input.nativeElement.placeholder).toBe('Buscar equipo...');
    expect(input.nativeElement.value).toBe('Angular');
  });

  it("should mark input as invalid when theme is danger", () => {
    component.theme = 'danger';
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