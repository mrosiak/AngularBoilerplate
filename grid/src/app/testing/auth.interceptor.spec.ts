import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { AuthInterceptor } from '../membership/auth.interceptor';
import { MemberService } from "../membership/member.service";
describe('AuthInterceptor', () => {
  let service: MemberService;
  let httpMock: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule,HttpClientTestingModule],
    providers: [
      MemberService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
      },      
      ]
  })
  );

  it('should be created', () => {
    const interceptor: AuthInterceptor = TestBed.inject(AuthInterceptor);
    expect(interceptor).toBeTruthy();
  });
  it('should inject Auth Token', () => {
    service = TestBed.inject(MemberService);
    service.token='abc';
    //const interceptor: AuthInterceptor = TestBed.inject(AuthInterceptor);
    httpMock = TestBed.inject(HttpTestingController);
    service.Login('','');
    const httpRequest = httpMock.expectOne(`${service.endpoint}login`);
    expect(httpRequest.request.headers.has('Authorization')).toEqual(true);    
    expect(httpRequest.request.headers.get('Authorization')).toEqual('Basic abc'); 
  });
});
