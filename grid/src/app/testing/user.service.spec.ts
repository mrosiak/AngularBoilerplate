import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from '../users/user.service';
import { RouterModule } from '@angular/router';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule, RouterModule.forRoot([])]});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
