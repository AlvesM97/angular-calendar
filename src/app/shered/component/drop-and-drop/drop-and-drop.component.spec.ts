import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropAndDropComponent } from './drop-and-drop.component';

describe('DropAndDropComponent', () => {
  let component: DropAndDropComponent;
  let fixture: ComponentFixture<DropAndDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropAndDropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
