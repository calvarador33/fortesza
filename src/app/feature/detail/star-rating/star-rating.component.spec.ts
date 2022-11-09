import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StarRatingComponent } from './star-rating.component';



describe('StarRatingComponent', () => {
  let component: StarRatingComponent;
  let fixture: ComponentFixture<StarRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        StarRatingComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarRatingComponent);
    component = fixture.componentInstance;
    component.score = '5';
    fixture.detectChanges();
  });

  it('should create', () => {
    component.score = '5'; 
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    component.score = '5'; 
    const actives = [undefined,undefined,undefined,undefined,undefined]
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.actives).toEqual(actives);
  });


});
