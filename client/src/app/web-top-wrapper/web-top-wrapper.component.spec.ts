import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTopWrapperComponent } from './web-top-wrapper.component';

describe('WebTopWrapperComponent', () => {
  let component: WebTopWrapperComponent;
  let fixture: ComponentFixture<WebTopWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebTopWrapperComponent]
    });
    fixture = TestBed.createComponent(WebTopWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
