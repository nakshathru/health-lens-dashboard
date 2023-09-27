import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolNavComponent } from './tool-nav.component';

describe('ToolNavComponent', () => {
  let component: ToolNavComponent;
  let fixture: ComponentFixture<ToolNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolNavComponent]
    });
    fixture = TestBed.createComponent(ToolNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
