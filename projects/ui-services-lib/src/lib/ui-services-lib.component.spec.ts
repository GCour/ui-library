import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiServicesLibComponent } from './ui-services-lib.component';

describe('UiServicesLibComponent', () => {
  let component: UiServicesLibComponent;
  let fixture: ComponentFixture<UiServicesLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiServicesLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiServicesLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
