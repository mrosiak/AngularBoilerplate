import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { MemberService } from '../membership/member.service';

describe('MemberService', () => {
  let service: MemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule, RouterModule.forRoot([])]});
    service = TestBed.inject(MemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
