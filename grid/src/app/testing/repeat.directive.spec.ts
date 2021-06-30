import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepeatDirective } from '../common/repeat.directive';
import { PaginationComponent } from '../pagination/pagination.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('RepeatDirective', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ PaginationComponent, RepeatDirective ],
      schemas:      [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .createComponent(PaginationComponent);
    fixture = TestBed.createComponent(PaginationComponent); 
    component = fixture.componentInstance;
  });
  it('should have 6 li', () => {
    component.hasPages=true;
    component.page=1;
    component.per_page=6;
    component.pg_href='a';
    component.total=12;
    component.totalPages=6;
    fixture.detectChanges();
    const ul: HTMLElement = fixture.nativeElement.querySelector('ul');
    const li = ul.children.length;
    expect(li).toBe(6);
  });
});
