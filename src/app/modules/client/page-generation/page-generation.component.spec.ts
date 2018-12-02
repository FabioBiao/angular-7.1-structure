import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGenerationComponent } from './page-generation.component';

describe('PageGenerationComponent', () => {
  let component: PageGenerationComponent;
  let fixture: ComponentFixture<PageGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
