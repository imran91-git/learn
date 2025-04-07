import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptcompilerComponent } from './javascriptcompiler.component';

describe('JavascriptcompilerComponent', () => {
  let component: JavascriptcompilerComponent;
  let fixture: ComponentFixture<JavascriptcompilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavascriptcompilerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptcompilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
