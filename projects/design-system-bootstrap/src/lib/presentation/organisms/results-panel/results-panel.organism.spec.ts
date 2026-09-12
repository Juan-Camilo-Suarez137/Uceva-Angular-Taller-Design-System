import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsPanelOrganism } from './results-panel.organism';

describe('ResultsPanelOrganism', () => {
  let component: ResultsPanelOrganism;
  let fixture: ComponentFixture<ResultsPanelOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsPanelOrganism]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsPanelOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
