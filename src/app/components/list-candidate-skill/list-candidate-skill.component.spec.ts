import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCandidateSkillComponent } from './list-candidate-skill.component';

describe('ListCandidateSkillComponent', () => {
  let component: ListCandidateSkillComponent;
  let fixture: ComponentFixture<ListCandidateSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCandidateSkillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCandidateSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
