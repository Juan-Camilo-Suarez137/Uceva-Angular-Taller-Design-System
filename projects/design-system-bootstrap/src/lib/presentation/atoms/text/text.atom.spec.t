import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TextAtom } from './text.atom';
import {
  MOCK_TEXT_CONTENT_TITLE,
  MOCK_TEXT_CONTENT_BODY,
  MOCK_TEXT_THEME_DANGER,
} from '../../../mocks/text.mocks';

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
    component.content = MOCK_TEXT_CONTENT_TITLE;
    component.variant = 'title';
    fixture.detectChanges();

    const node = fixture.debugElement.query(By.css('h1'));
    expect(node.nativeElement.textContent).toContain(MOCK_TEXT_CONTENT_TITLE);
  });

  it('should render body variant as p', () => {
    component.content = MOCK_TEXT_CONTENT_BODY;
    component.variant = 'body';
    fixture.detectChanges();

    const node = fixture.debugElement.query(By.css('p'));
    expect(node.nativeElement.textContent).toContain(MOCK_TEXT_CONTENT_BODY);
  });

  it('should apply theme class', () => {
    component.theme = MOCK_TEXT_THEME_DANGER;
    component.variant = 'caption';
    fixture.detectChanges();

    const node = fixture.debugElement.query(By.css('small'));
    expect(node.nativeElement.classList.contains('text-danger')).toBe(true);
  });
});