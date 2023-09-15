import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShownowComponent } from './shownow.component';

describe('ShownowComponent', () => {
  let component: ShownowComponent;
  let fixture: ComponentFixture<ShownowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShownowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShownowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
