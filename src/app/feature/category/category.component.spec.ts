import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/http/http.service';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { CategoryComponent } from './category.component';
import { Category } from 'src/app/core/models/category.interface';
import { ImageCategory } from 'src/app/core/models/image.interface';
import { Observable, of } from 'rxjs';


describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;
  let dashboardService: DashboardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        CategoryComponent
      ],
      providers: [
        { provide: dashboardService, useValue: dashboardService },
        HttpService,
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    dashboardService = TestBed.inject(DashboardService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    const categories: Category[] = [];
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.categories).toEqual(categories);
  });

  it('should filter', () => {
    component.filter();
    fixture.detectChanges();
    expect(component.isFilter).toBeTrue();
  });

  it('getAllImages', () => {

    const spy = spyOn(dashboardService, 'getAllImages').and.callFake(() =>
      of({
        data: {}
      } as any)
    );

    fixture.detectChanges();
    component.filter();
    expect(spy).toHaveBeenCalled();
    fixture.detectChanges();
    expect(component.isFilter).toBeTrue();

  });
});
