import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';
import { Cat } from 'src/app/core/models/cat.interface';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { DetailComponent } from './detail.component';



describe('DetailComponent', () => {

  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let dashboardService: DashboardService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        DetailComponent
      ],
      providers: [
        { provide: dashboardService, useValue: dashboardService },
        { provide: ActivatedRoute,
          useValue: {
            snapshot: {params: {id: '24fkzrw3487943uf358lovd'}}
          }  
        
        },
        HttpService,
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    component.data = {
      id: '1',
      name: '',
      description: '',
      origin: '',
      life_span: '',
      affection_level: 1,
      adaptability: 1,
      child_friendly: 1,
      dog_friendly: 1,
      energy_level: 1,
      grooming: 1,
      health_issues: 1,
      intelligence: 1,
      shedding_level: 1,
      social_needs: 1,
      stranger_friendly: 1,
      vocalisation: 1,
      wikipedia_url: '',
      image: {
        url: '',
      }
    };
    dashboardService = TestBed.inject(DashboardService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    const result: Cat = {
      id: '1',
      name: '',
      description: '',
      origin: '',
      life_span: '',
      affection_level: 1,
      adaptability: 1,
      child_friendly: 1,
      dog_friendly: 1,
      energy_level: 1,
      grooming: 1,
      health_issues: 1,
      intelligence: 1,
      shedding_level: 1,
      social_needs: 1,
      stranger_friendly: 1,
      vocalisation: 1,
      wikipedia_url: '',
      image: {
        url: '',
      }
    }
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.data).toEqual(result);
  });


  it('getDetailCat', () => {
    const result: Cat = {
      id: '1',
      name: '',
      description: '',
      origin: '',
      life_span: '',
      affection_level: 1,
      adaptability: 1,
      child_friendly: 1,
      dog_friendly: 1,
      energy_level: 1,
      grooming: 1,
      health_issues: 1,
      intelligence: 1,
      shedding_level: 1,
      social_needs: 1,
      stranger_friendly: 1,
      vocalisation: 1,
      wikipedia_url: '',
      image: {
        url: '',
      }
    }
    const spy = spyOn(dashboardService, 'getDetailCat').and.callFake(() =>
      of({
        data: {}
      } as any)
    );

    fixture.detectChanges();
    component.getDetailCat('1');
    expect(spy).toHaveBeenCalled();
    fixture.detectChanges();
    expect(component.data).toEqual(result);

  });


});
