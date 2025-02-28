import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterErrorComponent } from './router-error.component';

describe('RouterErrorComponent', () => {
  let component: RouterErrorComponent;
  let fixture: ComponentFixture<RouterErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
