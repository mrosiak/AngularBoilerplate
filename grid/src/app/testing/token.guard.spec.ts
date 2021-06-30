import { TestBed } from '@angular/core/testing';

import { TokenGuard } from '../common/token.guard';

describe('TokenGuard', () => {
  let guard: TokenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TokenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
