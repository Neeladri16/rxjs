import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetryyComponent } from './retryy.component';

describe('RetryyComponent', () => {
  let component: RetryyComponent;
  let fixture: ComponentFixture<RetryyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetryyComponent]
    });
    fixture = TestBed.createComponent(RetryyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
