import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MOCK_RESULTS_PANEL_CONFIG } from '../../../mocks/results-panel.mocks';
import { ResultsPanelOrganism } from './results-panel.organism';

describe('ResultsPanelOrganism', () => {
  let component: ResultsPanelOrganism;
  let fixture: ComponentFixture<ResultsPanelOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsPanelOrganism],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultsPanelOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar config como null por defecto', () => {
    expect(component.config).toBeNull();
  });

  it('no debería renderizar contenido cuando config es null', () => {
    const section = fixture.debugElement.query(By.css('section'));
    expect(section).toBeNull();
  });

  it('debería renderizar el título del panel cuando config tiene valor', () => {
    component.config = MOCK_RESULTS_PANEL_CONFIG;
    fixture.detectChanges();
    const title = fixture.debugElement.query(By.css('h4'));
    expect(title.nativeElement.textContent).toContain(MOCK_RESULTS_PANEL_CONFIG.title);
  });

  it('debería renderizar un ítem de lista por cada elemento de config.items', () => {
    component.config = MOCK_RESULTS_PANEL_CONFIG;
    fixture.detectChanges();
    const items = fixture.debugElement.queryAll(By.css('li.list-group-item'));
    expect(items.length).toBe(MOCK_RESULTS_PANEL_CONFIG.items.length);
  });

  it('debería emitir el evento search al buscar', () => {
    component.config = MOCK_RESULTS_PANEL_CONFIG;
    fixture.detectChanges();
    let emitted = '';
    component.search.subscribe((term: string) => (emitted = term));
    component.onSearch('laptop');
    expect(emitted).toBe('laptop');
  });
});