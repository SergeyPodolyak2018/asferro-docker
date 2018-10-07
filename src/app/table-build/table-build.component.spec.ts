import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBuildComponent } from './table-build.component';

describe('TableBuildComponent', () => {
  let component: TableBuildComponent;
  let fixture: ComponentFixture<TableBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
