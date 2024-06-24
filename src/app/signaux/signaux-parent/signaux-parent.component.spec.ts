import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignauxParentComponent } from './signaux-parent.component';

describe('SignauxParentComponent', () => {
  let component: SignauxParentComponent;
  let fixture: ComponentFixture<SignauxParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignauxParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignauxParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
