import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAndBehaviourComponent } from './subject-and-behaviour.component';

describe('SubjectAndBehaviourComponent', () => {
  let component: SubjectAndBehaviourComponent;
  let fixture: ComponentFixture<SubjectAndBehaviourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectAndBehaviourComponent]
    });
    fixture = TestBed.createComponent(SubjectAndBehaviourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
