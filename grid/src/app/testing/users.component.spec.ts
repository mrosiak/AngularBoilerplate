import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UsersComponent } from '../users/users.component';
import {UserService} from '../users/user.service';
import { of } from 'rxjs';
describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  const fakeSpinner = {
    spinnerState: of({ show: false }),
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      providers:[{ provide: UserService, useValue: fakeSpinner }],
      imports: [HttpClientModule, RouterModule.forRoot([])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
