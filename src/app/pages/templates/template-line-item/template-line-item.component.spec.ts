import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateLineItemComponent } from './template-line-item.component';

describe('TemplateLineItemComponent', () => {
  let component: TemplateLineItemComponent;
  let fixture: ComponentFixture<TemplateLineItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateLineItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateLineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
