import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() page:number|undefined=0;
  @Input() per_page:number|undefined=0;
  @Input() total:number|undefined=0;
  @Input() totalPages:number|undefined=0;
  @Input() pg_href:string|undefined="users?page=";
  @Input() hasPages:boolean=false;
  constructor() { 

  }

  ngOnInit(): void {
    this.hasPages = this.total !== undefined && this.total>0;
  }

}
