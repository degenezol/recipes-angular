import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeEditorFormComponent } from './recipe-editor-form.component';

describe('RecipeEditorFormComponent', () => {
  let component: RecipeEditorFormComponent;
  let fixture: ComponentFixture<RecipeEditorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeEditorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeEditorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
