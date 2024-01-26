import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpointsComponent } from './userpoints.component';

describe('UserpointsComponent', () => {
  let component: UserpointsComponent;
  let fixture: ComponentFixture<UserpointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserpointsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
