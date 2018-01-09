import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsilikeComponent } from './thingsilike.component';

describe('ThingsilikeComponent', () => {
  let component: ThingsilikeComponent;
  let fixture: ComponentFixture<ThingsilikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingsilikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingsilikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
