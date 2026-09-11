import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TextAtom } from './text.atom';

describe('TextAtom', () => {
  let component: TextAtom;
  let fixture: ComponentFixture<TextAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextAtom],
    }).compileComponents();

    fixture = TestBed.createComponent(TextAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title variant as h1', () => {
    component.content = 'Título';
    component.variant = 'title';
    fixture.detectChanges();

    const node = fixture.debugElement.query(By.css('h1'));
    expect(node.nativeElement.textContent).toContain('Título');
  });

  it('should render body variant as p', () => {
    component.content = 'Cuerpo';
    component.variant = 'body';
    fixture.detectChanges();

    const node = fixture.debugElement.query(By.css('p'));
    expect(node.nativeElement.textContent).toContain('Cuerpo');
  });

  it('should apply theme class', () => {
    component.theme = 'danger';
    component.variant = 'caption';
    fixture.detectChanges();

    const node = fixture.debugElement.query(By.css('small'));
    expect(node.nativeElement.classList.contains('text-danger')).toBe(true);
  });
});