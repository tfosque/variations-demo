import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateBrowseComponent } from './template-browse.component';

describe('TemplateBrowseComponent', () => {
  let component: TemplateBrowseComponent;
  let fixture: ComponentFixture<TemplateBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateBrowseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
