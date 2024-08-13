import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmirComponent } from './amir.component';

describe('AmirComponent', () => {
  let component: AmirComponent;
  let fixture: ComponentFixture<AmirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
