import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebookformComponent } from './updatebookform.component';

describe('UpdatebookformComponent', () => {
  let component: UpdatebookformComponent;
  let fixture: ComponentFixture<UpdatebookformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatebookformComponent]
    });
    fixture = TestBed.createComponent(UpdatebookformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
