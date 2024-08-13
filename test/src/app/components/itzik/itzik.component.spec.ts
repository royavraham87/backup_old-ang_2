import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItzikComponent } from './itzik.component';

describe('ItzikComponent', () => {
  let component: ItzikComponent;
  let fixture: ComponentFixture<ItzikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItzikComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItzikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
