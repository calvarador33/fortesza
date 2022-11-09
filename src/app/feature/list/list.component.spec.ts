import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/http/http.service';
import { Cat } from 'src/app/core/models/cat.interface';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { ListComponent } from './list.component';

import { Router } from '@angular/router';


describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let dashboardService: DashboardService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule

      ],
      declarations: [
        ListComponent
      ],
      providers: [
        { provide: dashboardService, useValue: dashboardService },
       
        HttpService,
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    component.result  = [{
      id: '1',
      name: 'test',
      description: '',
      origin: 'test',
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
    }];
    component.data  = [{
      id: '1',
      name: 'test',
      description: '',
      origin: 'test',
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
    }];
    dashboardService = TestBed.inject(DashboardService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    const result: Cat[] = [{
      id: '1',
      name: 'test',
      description: '',
      origin: 'test',
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
    }]
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.data).toEqual(result);
  });

  it('should filter:::name different vacio', () =>{
    component.name='test';
    component.origin = '';
    component.filter();
    fixture.detectChanges();

    const result: Cat[] = [{
      id: '1',
      name: 'test',
      description: '',
      origin: 'test',
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
    }]
    expect(component.data).toEqual(result);
  })

  it('should filter:::name different vacio', () =>{
    component.name='';
    component.origin = 'test';
    component.filter();
    fixture.detectChanges();

    const result: Cat[] = [{
      id: '1',
      name: 'test',
      description: '',
      origin: 'test',
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
    }]
    expect(component.data).toEqual(result);
  })

  it('should filter:::name different vacio && origin different vacio', () =>{
    component.name='test';
    component.origin = 'test';
    component.filter();
    fixture.detectChanges();

    const result: Cat[] = [{
      id: '1',
      name: 'test',
      description: '',
      origin: 'test',
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
    }]
    expect(component.data).toEqual(result);
  })


  it('should goToDetail', inject([Router], (router: Router) => {
    const data:Cat= {
      id: '1',
      name: 'test',
      description: '',
      origin: 'test',
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
    spyOn(router, 'navigate').and.stub();

    fixture.detectChanges();
    component.goToDetail(data);
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalledWith([`detail/${data.id}`]);
  }));
});
