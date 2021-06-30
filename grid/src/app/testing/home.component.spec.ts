import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ResourceService } from "../home/resource.service";
import { HomeComponent } from '../home/home.component';
import { of } from 'rxjs';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let serviceStub: any;
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 21000;
  beforeEach(waitForAsync( () => {
    let resource = {id:1,
      name:'name',
      year:2000,
      color:'pink',
      pantone_value:'123_45'};
    let result = { data:resource, 
      support: {
        url: 'url',
        text: 'text'
      }
    };
    serviceStub = {
      endpoint : 'https://reqres.in/api/unknown/',
      GetResource:()=>of(result)
    };
     
    TestBed.configureTestingModule({
      imports: [HttpClientModule ],
      declarations: [ HomeComponent ],
      providers:[{provide:ResourceService , useFactory:()=> serviceStub as ResourceService }]
      })
        .compileComponents().then(() => {
          fixture = TestBed.createComponent(HomeComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
        });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be created with prepopulated resource', () => {    
    expect(component.resources.length).toBeTruthy(1);
  });
});
