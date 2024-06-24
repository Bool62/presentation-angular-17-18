import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignauxChildComponent } from './signaux-child.component';

describe('SignauxChildComponent', () => {
  let component: SignauxChildComponent;
  let fixture: ComponentFixture<SignauxChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignauxChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignauxChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
