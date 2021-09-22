import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpensComponent } from './opens.component';

describe('OpensComponent', () => {
  let component: OpensComponent;
  let fixture: ComponentFixture<OpensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
