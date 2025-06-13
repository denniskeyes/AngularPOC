import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSandboxComponent } from './layout-sandbox.component';

describe('LayoutSandboxComponent', () => {
  let component: LayoutSandboxComponent;
  let fixture: ComponentFixture<LayoutSandboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutSandboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
