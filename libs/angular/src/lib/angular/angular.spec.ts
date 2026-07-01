import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransliterationEditorComponent } from './angular';

describe('TransliterationEditorComponent', () => {
  let component: TransliterationEditorComponent;
  let fixture: ComponentFixture<TransliterationEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransliterationEditorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransliterationEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
