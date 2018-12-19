import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsToolbarComponent } from './bs-toolbar.component';

describe('BsToolbarComponent', () => {
  let component: BsToolbarComponent;
  let fixture: ComponentFixture<BsToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
