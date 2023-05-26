import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSearchComponent } from './template-search.component';

describe('TemplateSearchComponent', () => {
  let component: TemplateSearchComponent;
  let fixture: ComponentFixture<TemplateSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
