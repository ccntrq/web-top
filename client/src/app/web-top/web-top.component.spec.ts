import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTopComponent } from './web-top.component';

describe('WebTopComponent', () => {
  let component: WebTopComponent;
  let fixture: ComponentFixture<WebTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebTopComponent]
    });
    fixture = TestBed.createComponent(WebTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
